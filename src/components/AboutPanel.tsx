'use client';

import React from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { uiTranslations } from '@/i18n/ui';

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPanel({ isOpen, onClose }: AboutPanelProps) {
  const { locale } = useLocale();
  const t = uiTranslations[locale];

  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    setEmail(['emmet', 'zitaan.com'].join('@'));
  }, []);

  return (
    <div className={`slide-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <span className="panel-title">{t.aboutPanelTitle}</span>
        <button className="panel-close" onClick={onClose}>×</button>
      </div>
      <div className="panel-body">
        {/* TODO: Translate content */}
        <div className="info-section">
          <h3>Emmetとは？</h3>
          <p>Emmet（エメット）は、HTML や CSS を高速に記述するためのツールキットです。短い省略記法（Abbreviation）を入力して Tab キーを押すだけで、複雑なコードが自動展開されます。</p>
          <p>例えば <code>ul&gt;li*3&gt;a</code> と入力して展開すると、3つのリンク付きリストアイテムを持つ ul 要素が一瞬で生成されます。</p>
          <p>Visual Studio Code、WebStorm、Sublime Text など、主要なエディタに標準搭載またはプラグインとして提供されています。</p>
          <p>公式サイト: <a href="https://emmet.io/" target="_blank" rel="noopener noreferrer">emmet.io</a></p>
        </div>

        <div className="info-section">
          <h3>このサイトについて</h3>
          <p>Emmetのコマンドは数多く存在しますが、このサイトでは制作現場でよく使われるものを中心にご紹介しています。</p>
          <p>「★ よく使う」フィルターでは、実務経験に基づいて厳選したコマンドのみを表示します。「すべて」に切り替えると全コマンドを確認できます。</p>
          <p><small>{t.footerUpdated}</small></p>
        </div>

        <div className="info-section">
          <h3>免責事項</h3>
          <ul>
            <li>当サイトに掲載している内容は、正確性・完全性を保証するものではありません。利用者が当サイトの情報を用いて行う一切の行為に関して、当方は一切の責任を負いません。</li>
            <li>{t.disclaimerSubjectivity}</li>
            <li>Emmetの仕様変更やバージョン差異により、展開結果が異なる場合がございます。</li>
            <li>当サイトに掲載されているHTML・CSSコードは自己責任にてご利用ください。</li>
            <li>当サイトの文章・画像・コードを無断転載・再配布することを禁止します。</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>Emmetについて</h3>
          <p>本サイトは Emmet（旧 Zen Coding）の紹介・チートシートを目的とした非公式ファンサイトです。Emmet は <a href="https://emmet.io/" target="_blank" rel="noopener noreferrer">emmet.io</a> にて公開されている、MITライセンスのオープンソースツールです。開発者は Sergey Chikuyonok 氏です。</p>
        </div>

        <div className="info-section">
          <h3>動作確認環境</h3>
          <p>{t.footerNote}</p>
        </div>

        <div className="info-section">
          <h3>{t.contactTitle}</h3>
          <p>{t.contactText}</p>
          <p>Mail: {email && <a href={`mailto:${email}`}>{email}</a>}</p>
        </div>
      </div>
    </div>
  );
}
