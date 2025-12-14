'use client';

import React from 'react';
import { EmmetCategory } from '@/data/emmet';

interface SidebarProps {
  categories: EmmetCategory[];
  currentSection: string;
  currentTab: 'html' | 'css';
  onSectionClick: (sectionId: string) => void;
  onTabChange: (tab: 'html' | 'css') => void;
  htmlCategories: EmmetCategory[];
  cssCategories: EmmetCategory[];
}

export default function Sidebar({
  categories,
  currentSection,
  currentTab,
  onSectionClick,
  onTabChange,
  htmlCategories,
  cssCategories,
}: SidebarProps) {
  // const categories = currentTab === 'html' ? htmlCategories : cssCategories;


  return (
    <aside className="sidebar">
      {/* Tab Switch */}
      <div className="sidebar-tabs">
        <button
          className={`sidebar-tab ${currentTab === 'html' ? 'active' : ''}`}
          onClick={() => onTabChange('html')}
        >
          HTML
        </button>
        <button
          className={`sidebar-tab ${currentTab === 'css' ? 'active' : ''}`}
          onClick={() => onTabChange('css')}
        >
          CSS
        </button>
      </div>

      <div className="sidebar-divider"></div>

      {/* Categories */}
      <div className="sidebar-section">
        {categories.map((cat) => (
          <div 
            key={cat.id}
            className={`sidebar-item ${currentSection === cat.id ? 'active' : ''}`}
            onClick={() => onSectionClick(cat.id)}
          >
            <span className="sidebar-item-icon">{cat.icon}</span>
            <span>{cat.title}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
