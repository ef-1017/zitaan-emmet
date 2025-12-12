'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { htmlData, cssData, htmlCategories, cssCategories, EmmetItem } from '@/data/emmet';
import CommandCard from '@/components/CommandCard';
import DetailModal from '@/components/DetailModal';
import Sidebar from '@/components/Sidebar';
import FavoritesPanel from '@/components/FavoritesPanel';
import LivePreviewPanel from '@/components/LivePreviewPanel';
import AboutPanel from '@/components/AboutPanel';

interface FavoriteItem {
  cmd: string;
  output: string;
  type: 'html' | 'css';
}

export default function Home() {
  // State
  const [currentTab, setCurrentTab] = useState<'html' | 'css'>('html');
  const [currentSection, setCurrentSection] = useState('all');
  const [currentFilter, setCurrentFilter] = useState<'recommended' | 'all'>('recommended');
  const [isReverseMode, setIsReverseMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  
  // Modal/Panel state
  const [selectedItem, setSelectedItem] = useState<EmmetItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewPanelOpen, setIsPreviewPanelOpen] = useState(false);
  const [isFavoritesPanelOpen, setIsFavoritesPanelOpen] = useState(false);
  const [isAboutPanelOpen, setIsAboutPanelOpen] = useState(false);
  
  // Toast
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('emmet-fav');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Show toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 2000);
  }, []);

  // Copy to clipboard
  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    showToast('コピーしました: ' + text);
  }, [showToast]);

  // Get current data
  const currentData = currentTab === 'html' ? htmlData : cssData;
  const currentCategories = currentTab === 'html' ? htmlCategories : cssCategories;

  // Filter data
  const filteredData = useMemo(() => {
    let data = currentData;
    const query = searchQuery.toLowerCase().trim();

    // Filter by recommended
    if (currentFilter === 'recommended' && !query) {
      data = data.filter(item => item.recommended);
    }

    // Filter by section
    if (currentSection !== 'all') {
      data = data.filter(item => item.category === currentSection);
    }

    // Filter by search
    if (query) {
      if (isReverseMode) {
        data = data.filter(item =>
          item.desc.toLowerCase().includes(query) ||
          item.output.toLowerCase().includes(query) ||
          (item.keywords && item.keywords.toLowerCase().includes(query))
        );
      } else {
        data = data.filter(item =>
          item.cmd.toLowerCase().includes(query) ||
          item.output.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          (item.keywords && item.keywords.toLowerCase().includes(query))
        );
      }
    }

    return data;
  }, [currentData, currentFilter, currentSection, searchQuery, isReverseMode]);

  // Get section title
  const getSectionTitle = () => {
    if (currentSection === 'all') return 'すべてのコマンド';
    const cat = currentCategories.find(c => c.id === currentSection);
    return cat ? cat.title : 'コマンド一覧';
  };

  // Handle tab change
  const handleTabChange = (tab: 'html' | 'css') => {
    setCurrentTab(tab);
    setCurrentSection('all');
    setSearchQuery('');
  };

  // Handle card click
  const handleCardClick = (item: EmmetItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Handle favorite toggle
  const handleToggleFavorite = useCallback((item: EmmetItem) => {
    setFavorites(prev => {
      const idx = prev.findIndex(f => f.cmd === item.cmd);
      let newFavorites: FavoriteItem[];
      
      if (idx > -1) {
        newFavorites = prev.filter(f => f.cmd !== item.cmd);
        showToast('お気に入りから削除しました');
      } else {
        newFavorites = [{ cmd: item.cmd, output: item.output, type: currentTab }, ...prev];
        showToast('お気に入りに追加しました');
      }
      
      localStorage.setItem('emmet-fav', JSON.stringify(newFavorites));
      return newFavorites;
    });
  }, [currentTab, showToast]);

  // Check if favorite
  const isFavorite = useCallback((cmd: string) => {
    return favorites.some(f => f.cmd === cmd);
  }, [favorites]);

  // Handle favorite click from panel
  const handleFavoriteClick = useCallback((cmd: string, type: 'html' | 'css') => {
    const data = type === 'html' ? htmlData : cssData;
    const item = data.find(i => i.cmd === cmd);
    if (item) {
      if (type !== currentTab) {
        setCurrentTab(type);
      }
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  }, [currentTab]);

  // Handle remove favorite
  const handleRemoveFavorite = useCallback((cmd: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(f => f.cmd !== cmd);
      localStorage.setItem('emmet-fav', JSON.stringify(newFavorites));
      return newFavorites;
    });
    showToast('お気に入りから削除しました');
  }, [showToast]);

  // Close all panels
  const closeAllPanels = useCallback(() => {
    setIsPreviewPanelOpen(false);
    setIsFavoritesPanelOpen(false);
    setIsAboutPanelOpen(false);
  }, []);

  // Handle related click
  const handleRelatedClick = useCallback((item: EmmetItem) => {
    setSelectedItem(item);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            <span className="logo-main">Emmet Cheatsheet</span>
          </div>
        </div>

        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="コマンドまたはCSSプロパティで検索（例: m10, 中央寄せ）"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="header-controls">
          <div className="filter-toggle">
            <button
              className={`filter-btn ${currentFilter === 'recommended' ? 'active' : ''}`}
              onClick={() => setCurrentFilter('recommended')}
            >
              ★ よく使う
            </button>
            <button
              className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
              onClick={() => setCurrentFilter('all')}
            >
              すべて
            </button>
          </div>

          <button
            className="nav-btn"
            onClick={() => {
              closeAllPanels();
              setIsAboutPanelOpen(true);
            }}
          >
            Emmetとは？
          </button>
        </div>
      </header>

      <div className="app-container">
        {/* Sidebar */}
        <Sidebar
          categories={currentCategories}
          currentSection={currentSection}
          currentTab={currentTab}
          onSectionClick={setCurrentSection}
          onTabChange={handleTabChange}
          htmlCategories={htmlCategories}
          cssCategories={cssCategories}
        />

        {/* Main Content */}
        <main className="main-content">
          {/* Hero Banner */}
          <div className="hero-banner">
            <div className="hero-icon">🎯</div>
            <div className="hero-content">
              <div className="hero-title">制作現場で本当に使うものだけを厳選</div>
              <div className="hero-desc">現役のWeb制作者が実務で頻繁に使用するコマンドに絞ってご紹介しています。</div>
            </div>
          </div>

          <div className="section">
            <div className="section-header">
              <span className="section-title">{getSectionTitle()}</span>
              {currentFilter === 'recommended' && !searchQuery && (
                <span className="section-note">★ = 制作現場でよく使用</span>
              )}
              <span className="section-count">{filteredData.length}件</span>
            </div>
            
            {filteredData.length > 0 ? (
              <div className="cards-grid">
                {filteredData.map((item, idx) => (
                  <CommandCard
                    key={`${item.cmd}-${idx}`}
                    item={item}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <div className="no-results-text">該当するコマンドが見つかりません</div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>© 2025 <a href="https://zitaan.com" target="_blank" rel="noopener noreferrer">zitaan.com</a> | 最終更新: 2025年12月</span>
        <span>Emmetのコマンド確認は VSCode にて行っています</span>
      </footer>

      {/* Side Buttons */}
      <div className="side-buttons">
        <button
          className="side-btn"
          onClick={() => {
            closeAllPanels();
            setIsPreviewPanelOpen(true);
          }}
        >
          <span className="side-btn-icon">▶</span>
          <span>試してみる</span>
        </button>
        <button
          className={`side-btn ${favorites.length > 0 ? 'has-items' : ''}`}
          onClick={() => {
            closeAllPanels();
            setIsFavoritesPanelOpen(true);
          }}
        >
          <span className="side-btn-icon">⭐</span>
          <span>お気に入り</span>
        </button>
      </div>

      {/* Panels */}
      <LivePreviewPanel
        isOpen={isPreviewPanelOpen}
        onClose={() => setIsPreviewPanelOpen(false)}
        onCopy={copyToClipboard}
      />

      <FavoritesPanel
        isOpen={isFavoritesPanelOpen}
        favorites={favorites}
        onClose={() => setIsFavoritesPanelOpen(false)}
        onFavoriteClick={handleFavoriteClick}
        onRemoveFavorite={handleRemoveFavorite}
      />

      <AboutPanel
        isOpen={isAboutPanelOpen}
        onClose={() => setIsAboutPanelOpen(false)}
      />

      {/* Detail Modal */}
      <DetailModal
        item={selectedItem}
        currentTab={currentTab}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onToggleFavorite={handleToggleFavorite}
        onRelatedClick={handleRelatedClick}
        isFavorite={isFavorite}
      />

      {/* Toast */}
      <div className={`toast ${isToastVisible ? 'show' : ''}`}>
        <span>✓</span>
        <span>{toastMessage}</span>
      </div>
    </>
  );
}
