'use client';

import React, { useState } from 'react';
import { htmlData, cssData } from '@/data/emmet';
import { useLocale } from '@/contexts/LocaleContext';
import { uiTranslations } from '@/i18n/ui';

interface TryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onCopy: (text: string) => void;
}

// Build output map from data
const buildOutputMap = () => {
  const map: Record<string, string> = {};
  htmlData.forEach(item => { map[item.cmd] = item.output; });
  cssData.forEach(item => { map[item.cmd] = item.output; });
  return map;
};

const outputMap = buildOutputMap();

export default function LivePreviewPanel({
  isOpen,
  onClose,
  onCopy,
}: TryPanelProps) {
  const { locale } = useLocale();
  const t = uiTranslations[locale];

  const [input, setInput] = useState('');
  const [output, setOutput] = useState(t.tryOutputPlaceholder);

  // Update output reset when locale changes
  React.useEffect(() => {
    if (!input) setOutput(t.tryOutputPlaceholder);
  }, [locale, input, t.tryOutputPlaceholder]);

  const expandEmmet = (abbr: string): string => {
    if (!abbr) return t.tryOutputPlaceholder;
    
    // 入力途中の場合は「入力中...」を表示
    if (/[>+*^({\[]$/.test(abbr) || /\.$/.test(abbr) || /#$/.test(abbr)) {
      return t.tryTyping;
    }

    // Check direct match first
    if (outputMap[abbr]) {
      if (abbr === '!') {
        return `<!DOCTYPE html>
<html lang="${locale === 'ja' ? 'ja' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;
      }
      return outputMap[abbr];
    }

    // クラス: .classname or .class1.class2
    if (/^\.[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*$/.test(abbr)) {
      const classes = abbr.slice(1).split('.').join(' ');
      return `<div class="${classes}"></div>`;
    }

    // ID: #idname
    if (/^#[a-zA-Z0-9_-]+$/.test(abbr)) {
      return `<div id="${abbr.slice(1)}"></div>`;
    }

    // タグ+クラス: div.class or tag.class1.class2
    if (/^[a-z]+(\.[a-zA-Z0-9_-]+)+$/.test(abbr)) {
      const [tag, ...classes] = abbr.split('.');
      return `<${tag} class="${classes.join(' ')}"></${tag}>`;
    }

    // タグ+ID: div#id
    if (/^[a-z]+#[a-zA-Z0-9_-]+$/.test(abbr)) {
      const [tag, id] = abbr.split('#');
      return `<${tag} id="${id}"></${tag}>`;
    }

    // タグ+クラス+ID: div.class#id or div#id.class
    if (/^[a-z]+[.#][a-zA-Z0-9_-]+[.#][a-zA-Z0-9_-]+$/.test(abbr)) {
      let tag = abbr.match(/^[a-z]+/)?.[0] || 'div';
      const classMatch = abbr.match(/\.([a-zA-Z0-9_-]+)/);
      const idMatch = abbr.match(/#([a-zA-Z0-9_-]+)/);
      let attrs = '';
      if (idMatch) attrs += ` id="${idMatch[1]}"`;
      if (classMatch) attrs += ` class="${classMatch[1]}"`;
      return `<${tag}${attrs}></${tag}>`;
    }

    // 繰り返し: element*n
    if (/^[a-z]+\*\d+$/.test(abbr)) {
      const [element, count] = abbr.split('*');
      const selfClosing = ['br', 'hr', 'img', 'input', 'meta', 'link'];
      const tag = selfClosing.includes(element) ? `<${element}>` : `<${element}></${element}>`;
      return Array(parseInt(count)).fill(tag).join('\n');
    }

    // 子要素+繰り返し: ul>li*3 or div>ul>li*3
    if (/^[a-z]+(?:>[a-z]+)+\*\d+$/.test(abbr)) {
      const parts = abbr.split('>');
      const lastPart = parts.pop() || '';
      const [lastTag, count] = lastPart.split('*');
      
      let inner = Array(parseInt(count)).fill(`<${lastTag}></${lastTag}>`).join('\n');
      
      while (parts.length > 0) {
        const parent = parts.pop();
        const indented = inner.split('\n').map(line => '  ' + line).join('\n');
        inner = `<${parent}>\n${indented}\n</${parent}>`;
      }
      return inner;
    }

    // 子要素+クラス/ID: ul>li.test, div>p.intro, nav>a#home
    if (/^[a-z]+>[a-z]+[.#][a-zA-Z0-9_-]+$/.test(abbr)) {
      const [parent, childPart] = abbr.split('>');
      let childHtml = '';
      if (childPart.includes('.')) {
        const [tag, className] = childPart.split('.');
        childHtml = `<${tag} class="${className}"></${tag}>`;
      } else if (childPart.includes('#')) {
        const [tag, id] = childPart.split('#');
        childHtml = `<${tag} id="${id}"></${tag}>`;
      }
      return `<${parent}>\n  ${childHtml}\n</${parent}>`;
    }

    // 深いネスト+クラス: nav>ul>li.item or div>ul>li.test
    if (/^[a-z]+(?:>[a-z]+)+[.#][a-zA-Z0-9_-]+$/.test(abbr)) {
      const parts = abbr.split('>');
      const lastPart = parts.pop() || '';
      let lastHtml = '';
      if (lastPart.includes('.')) {
        const [tag, className] = lastPart.split('.');
        lastHtml = `<${tag} class="${className}"></${tag}>`;
      } else if (lastPart.includes('#')) {
        const [tag, id] = lastPart.split('#');
        lastHtml = `<${tag} id="${id}"></${tag}>`;
      }
      
      let result = lastHtml;
      for (let i = parts.length - 1; i >= 0; i--) {
        const indented = result.split('\n').map(line => '  ' + line).join('\n');
        result = `<${parts[i]}>\n${indented}\n</${parts[i]}>`;
      }
      return result;
    }

    // 子要素+クラス+繰り返し: ul>li.item*3
    if (/^[a-z]+>[a-z]+\.[a-zA-Z0-9_-]+\*\d+$/.test(abbr)) {
      const match = abbr.match(/^([a-z]+)>([a-z]+)\.([a-zA-Z0-9_-]+)\*(\d+)$/);
      if (match) {
        const [, parent, tag, className, count] = match;
        const items = Array(parseInt(count)).fill(`  <${tag} class="${className}"></${tag}>`).join('\n');
        return `<${parent}>\n${items}\n</${parent}>`;
      }
    }

    // 深いネスト: ul>li>a or nav>ul>li>a
    if (/^[a-z]+(?:>[a-z]+)+$/.test(abbr)) {
      const parts = abbr.split('>');
      let result = `<${parts[parts.length - 1]}></${parts[parts.length - 1]}>`;
      for (let i = parts.length - 2; i >= 0; i--) {
        const indented = result.split('\n').map(line => '  ' + line).join('\n');
        result = `<${parts[i]}>\n${indented}\n</${parts[i]}>`;
      }
      return result;
    }

    // 兄弟: div+p+span
    if (/^[a-z]+(?:\+[a-z]+)+$/.test(abbr)) {
      const parts = abbr.split('+');
      return parts.map(tag => `<${tag}></${tag}>`).join('\n');
    }

    // 兄弟+繰り返し: div+ul>li*3
    if (/^[a-z]+\+[a-z]+>[a-z]+\*\d+$/.test(abbr)) {
      const [first, rest] = abbr.split(/\+(.+)/);
      return `<${first}></${first}>\n${expandEmmet(rest)}`;
    }

    // テキスト: tag{text}
    if (/^[a-z]+\{[^}]*\}$/.test(abbr)) {
      const match = abbr.match(/^([a-z]+)\{([^}]*)\}$/);
      if (match) return `<${match[1]}>${match[2]}</${match[1]}>`;
    }

    // 属性: tag[attr=value]
    if (/^[a-z]+\[[^\]]+\]$/.test(abbr)) {
      const match = abbr.match(/^([a-z]+)\[([^\]]+)\]$/);
      if (match) return `<${match[1]} ${match[2]}></${match[1]}>`;
    }

    // 連番: li.item$*3
    if (/^[a-z]+\.[a-zA-Z0-9_-]+\$\*\d+$/.test(abbr)) {
      const match = abbr.match(/^([a-z]+)\.([a-zA-Z0-9_-]+)\$\*(\d+)$/);
      if (match) {
        const [, tag, className, count] = match;
        return Array(parseInt(count)).fill(0).map((_, i) => 
          `<${tag} class="${className}${i + 1}"></${tag}>`
        ).join('\n');
      }
    }

    // 連番ID: div#item$*3
    if (/^[a-z]+#[a-zA-Z0-9_-]+\$\*\d+$/.test(abbr)) {
      const match = abbr.match(/^([a-z]+)#([a-zA-Z0-9_-]+)\$\*(\d+)$/);
      if (match) {
        const [, tag, idBase, count] = match;
        return Array(parseInt(count)).fill(0).map((_, i) => 
          `<${tag} id="${idBase}${i + 1}"></${tag}>`
        ).join('\n');
      }
    }

    // グループ化: (div>p)+footer
    if (/^\([^)]+\)\+[a-z]+$/.test(abbr)) {
      const match = abbr.match(/^\(([^)]+)\)\+([a-z]+)$/);
      if (match) {
        return `${expandEmmet(match[1])}\n<${match[2]}></${match[2]}>`;
      }
    }

    // CSS数値: m10, p20, w100, etc.
    const cssNumMatch = abbr.match(/^(m|mt|mr|mb|ml|p|pt|pr|pb|pl|w|h|maw|mah|miw|mih|fz|fw|lh|lts|bdrs|op|z|g|t|r|b|l)(-?\d+)(p)?$/);
    if (cssNumMatch) {
      const [, prop, val, isPercent] = cssNumMatch;
      const cssProps: Record<string, string> = {
        'm': 'margin', 'mt': 'margin-top', 'mr': 'margin-right', 'mb': 'margin-bottom', 'ml': 'margin-left',
        'p': 'padding', 'pt': 'padding-top', 'pr': 'padding-right', 'pb': 'padding-bottom', 'pl': 'padding-left',
        'w': 'width', 'h': 'height', 'maw': 'max-width', 'mah': 'max-height', 'miw': 'min-width', 'mih': 'min-height',
        'fz': 'font-size', 'fw': 'font-weight', 'lh': 'line-height', 'lts': 'letter-spacing',
        'bdrs': 'border-radius', 'op': 'opacity', 'z': 'z-index', 'g': 'gap',
        't': 'top', 'r': 'right', 'b': 'bottom', 'l': 'left',
      };
      const noUnit = ['op', 'lh', 'fw', 'z'];
      const unit = isPercent ? '%' : (noUnit.includes(prop) ? '' : 'px');
      return `${cssProps[prop]}: ${val}${unit};`;
    }

    // CSS margin/padding 複数値: m10-20, p10-20-30-40
    const cssMultiMatch = abbr.match(/^(m|p)(\d+)-(\d+)(?:-(\d+))?(?:-(\d+))?$/);
    if (cssMultiMatch) {
      const [, prop, v1, v2, v3, v4] = cssMultiMatch;
      const propName = prop === 'm' ? 'margin' : 'padding';
      if (v4) return `${propName}: ${v1}px ${v2}px ${v3}px ${v4}px;`;
      if (v3) return `${propName}: ${v1}px ${v2}px ${v3}px;`;
      return `${propName}: ${v1}px ${v2}px;`;
    }

    // CSS keywords
    const cssKeywords: Record<string, string> = {
      'df': 'display: flex;', 'dg': 'display: grid;', 'db': 'display: block;',
      'dib': 'display: inline-block;', 'di': 'display: inline;', 'dn': 'display: none;', 'dif': 'display: inline-flex;',
      'pos': 'position: relative;', 'poa': 'position: absolute;', 'pof': 'position: fixed;', 'pos:s': 'position: sticky;',
      'fxdc': 'flex-direction: column;', 'fxdr': 'flex-direction: row;', 'fxdrr': 'flex-direction: row-reverse;',
      'fxww': 'flex-wrap: wrap;', 'fxwn': 'flex-wrap: nowrap;',
      'jcc': 'justify-content: center;', 'jcsb': 'justify-content: space-between;', 'jcsa': 'justify-content: space-around;',
      'jcse': 'justify-content: space-evenly;', 'jcfs': 'justify-content: flex-start;', 'jcfe': 'justify-content: flex-end;',
      'aic': 'align-items: center;', 'aifs': 'align-items: flex-start;', 'aife': 'align-items: flex-end;', 'ais': 'align-items: stretch;',
      'plai:c': 'place-items: center;', 'fx1': 'flex: 1;',
      'tac': 'text-align: center;', 'tar': 'text-align: right;', 'tal': 'text-align: left;',
      'tdn': 'text-decoration: none;', 'tdu': 'text-decoration: underline;',
      'fwb': 'font-weight: bold;', 'fwn': 'font-weight: normal;', 'fsi': 'font-style: italic;',
      'whs': 'white-space: nowrap;', 'tov': 'text-overflow: ellipsis;',
      'bgn': 'background: none;', 'bdn': 'border: none;',
      'bgsz:cv': 'background-size: cover;', 'bgsz:ct': 'background-size: contain;',
      'cup': 'cursor: pointer;', 'cud': 'cursor: default;', 'bxz': 'box-sizing: border-box;',
      'ov': 'overflow: hidden;', 'ova': 'overflow: auto;', 'ovs': 'overflow: scroll;', 'ovv': 'overflow: visible;',
      'v': 'visibility: hidden;', 'vv': 'visibility: visible;',
      'us': 'user-select: none;', 'pe': 'pointer-events: none;', 'ct': 'content: "";',
    };
    if (cssKeywords[abbr]) return cssKeywords[abbr];

    // 単純なタグ
    if (/^[a-z]+$/.test(abbr)) {
      const selfClosing = ['br', 'hr', 'img', 'input', 'meta', 'link', 'source'];
      if (selfClosing.includes(abbr)) {
        if (abbr === 'img') return '<img src="" alt="">';
        if (abbr === 'input') return '<input type="text">';
        if (abbr === 'link') return '<link rel="stylesheet" href="">';
        if (abbr === 'meta') return '<meta name="" content="">';
        return `<${abbr}>`;
      }
      return `<${abbr}></${abbr}>`;
    }

    // ========== エラー理由の表示（完全に間違っている場合のみ） ==========
    
    // スペースが含まれている
    if (/\s/.test(abbr)) {
      const suggestion = abbr.replace(/\s+/g, '');
      return `${t.errorSpace}\n\n${t.errorSpaceDesc}\n\n修正: ${suggestion}`;
    }

    // 大文字で始まる
    if (/^[A-Z]/.test(abbr)) {
      return `${t.errorLower}\n\n${t.errorLowerDesc}\n\n修正: ${abbr.toLowerCase()}`;
    }

    // セミコロン
    if (/;/.test(abbr)) {
      return `${t.errorSemi}\n\n${t.errorSemiDesc}\n\n修正: ${abbr.replace(/;/g, '')}`;
    }

    // 数字で始まる
    if (/^\d/.test(abbr)) {
      return `${t.errorNumber}\n\n${t.errorNumberDesc}\n例: m10, p20, w100`;
    }

    // その他
    return `${t.errorUnknown}
\n【HTML】
  Tag: div, ul, li, p, a
  Class: .card, div.container
  ID: #main, div#header
  Child: ul>li, nav>ul>li
  Repeat: li*5, ul>li*3
  Sibling: div+p+span
  Numbering: li.item$*3
\n【CSS】
  Value: m10, p20, w100p
  Multi: m10-20, p10-20-30
  Keyword: df, jcc, aic`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setOutput(expandEmmet(value));
  };

  return (
    <div className={`slide-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <span className="panel-title">{t.tryPanelTitle}</span>
        <button className="panel-close" onClick={onClose}>×</button>
      </div>
      <div className="panel-body">
        <input 
          type="text" 
          className="preview-input"
          placeholder={t.tryInputPlaceholder}
          value={input}
          onChange={handleInputChange}
        />
        <div className="preview-output">{output}</div>
        <button 
          className="preview-copy"
          onClick={() => onCopy(output)}
        >
          {t.tryCopy}
        </button>
      </div>
    </div>
  );
}
