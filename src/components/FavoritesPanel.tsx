'use client';

import React from 'react';

interface FavoriteItem {
  cmd: string;
  output: string;
  type: 'html' | 'css';
}

interface FavoritesPanelProps {
  isOpen: boolean;
  favorites: FavoriteItem[];
  onClose: () => void;
  onFavoriteClick: (cmd: string, type: 'html' | 'css') => void;
  onRemoveFavorite: (cmd: string) => void;
}

export default function FavoritesPanel({
  isOpen,
  favorites,
  onClose,
  onFavoriteClick,
  onRemoveFavorite,
}: FavoritesPanelProps) {
  return (
    <div className={`slide-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <span className="panel-title">お気に入り</span>
        <button className="panel-close" onClick={onClose}>×</button>
      </div>
      <div className="panel-body">
        {favorites.length === 0 ? (
          <div className="fav-empty">
            お気に入りはまだありません<br/>
            コマンドをクリック → ⭐ で追加できます
          </div>
        ) : (
          favorites.map((fav, idx) => (
            <div 
              key={idx}
              className="fav-item"
              onClick={() => onFavoriteClick(fav.cmd, fav.type)}
            >
              <span className="fav-cmd">{fav.cmd}</span>
              <span className="fav-output">{fav.output}</span>
              <span 
                className="fav-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFavorite(fav.cmd);
                }}
              >
                ✕
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

