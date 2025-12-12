'use client';

import React, { useState, useEffect } from 'react';
import { EmmetItem, emmetData } from '@/data/emmet';

interface DetailModalProps {
  item: EmmetItem | null;
  currentTab: 'html' | 'css';
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (item: EmmetItem) => void;
  onRelatedClick: (item: EmmetItem) => void;
  isFavorite: (cmd: string) => boolean;
}

// Simple Emmet expander for common patterns
function expandEmmet(cmd: string, output: string): string {
  // For HTML commands, try to generate proper multi-line output
  const htmlExpansions: Record<string, string> = {
    '!': `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`,
    'ul>li*3': `<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>`,
    'ul>li*5': `<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>`,
    'nav>ul>li': `<nav>
  <ul>
    <li></li>
  </ul>
</nav>`,
  };

  // Check for predefined expansions
  if (htmlExpansions[cmd]) {
    return htmlExpansions[cmd];
  }

  // Simple tag expansions
  if (/^[a-z]+$/.test(cmd) && output.includes('<')) {
    return output;
  }

  // For CSS, just return the output
  return output;
}

// Typing animation component
function EmmetAnimation({ cmd, output }: { cmd: string; output: string }) {
  const [phase, setPhase] = useState<'typing' | 'tab' | 'expand' | 'done'>('typing');
  const [displayedCmd, setDisplayedCmd] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [key, setKey] = useState(0);

  const expandedOutput = expandEmmet(cmd, output);

  useEffect(() => {
    // Reset animation when cmd changes
    setPhase('typing');
    setDisplayedCmd('');
    setShowOutput(false);

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < cmd.length) {
        setDisplayedCmd(cmd.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setPhase('tab');
        
        // Show Tab key after typing
        setTimeout(() => {
          setPhase('expand');
          setShowOutput(true);
          
          setTimeout(() => {
            setPhase('done');
          }, 400);
        }, 700);
      }
    }, 180);

    return () => clearInterval(typingInterval);
  }, [cmd, key]);

  const handleReplay = () => {
    setPhase('typing');
    setDisplayedCmd('');
    setShowOutput(false);
    setKey(prev => prev + 1);
  };

  return (
    <div className="emmet-animation">
      <div className="animation-editor">
        <div className="editor-line">
          <span className="line-number">1</span>
          <span className="editor-content">
            <span className="typed-cmd">{displayedCmd}</span>
            {(phase === 'typing' || phase === 'tab') && (
              <span className="cursor-blink">│</span>
            )}
            {phase === 'tab' && <span className="tab-key">Tab ↹</span>}
          </span>
        </div>
        {showOutput && (
          <div className={`editor-output-block ${phase === 'expand' || phase === 'done' ? 'visible' : ''}`}>
            {expandedOutput.split('\n').map((line, idx) => (
              <div key={idx} className="editor-line">
                <span className="line-number">{idx + 1}</span>
                <span className="editor-content output-text">{line}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <button 
        className="replay-btn"
        onClick={handleReplay}
      >
        🔄 リプレイ
      </button>
    </div>
  );
}

export default function DetailModal({
  item,
  currentTab,
  isOpen,
  onClose,
  onToggleFavorite,
  onRelatedClick,
  isFavorite,
}: DetailModalProps) {
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation when modal opens or item changes
  useEffect(() => {
    if (isOpen && item) {
      setAnimationKey(prev => prev + 1);
    }
  }, [isOpen, item]);

  if (!item) return null;

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRelatedClick = (cmd: string) => {
    const relatedItem = emmetData[currentTab].find((i: EmmetItem) => i.cmd === cmd);
    if (relatedItem) {
      onRelatedClick(relatedItem);
    }
  };

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <span className="modal-command">{item.cmd}</span>
          <div className="modal-actions">
            <button 
              className="modal-btn"
              onClick={() => onToggleFavorite(item)}
            >
              {isFavorite(item.cmd) ? '★ お気に入り済' : '☆ お気に入り'}
            </button>
            <button 
              className={`modal-btn primary ${isCopied ? 'copied' : ''}`}
              onClick={() => copyToClipboard(item.cmd)}
            >
              {isCopied ? '✓ コピーしました！' : '📋 コピー'}
            </button>
          </div>
        </div>
        <div className="modal-body">
          {/* Typing Animation */}
          <EmmetAnimation key={animationKey} cmd={item.cmd} output={item.output} />
          
          <div className="modal-section">
            <div className="modal-label">説明</div>
            <div className="modal-text">{item.desc}</div>
          </div>

          {item.examples && item.examples.length > 0 && (
            <div className="modal-section">
              <div className="modal-label">使用例</div>
              <div className="modal-examples">
                {item.examples.map((ex, idx) => {
                  const parts = ex.split(' → ');
                  return (
                    <div key={idx} className="modal-example">
                      <span className="input">{parts[0]}</span>
                      <span className="arrow">→</span>
                      <span className="output">{parts[1] || ''}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {item.related && item.related.length > 0 && (
            <div className="modal-section">
              <div className="modal-label">関連コマンド</div>
              <div className="modal-related">
                {item.related.map((r, idx) => (
                  <span 
                    key={idx}
                    className="modal-related-tag"
                    onClick={() => handleRelatedClick(r)}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
