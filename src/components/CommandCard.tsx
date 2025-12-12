'use client';

import React from 'react';
import { EmmetItem } from '@/data/emmet';

interface CommandCardProps {
  item: EmmetItem;
  onClick: (item: EmmetItem) => void;
}

export default function CommandCard({ item, onClick }: CommandCardProps) {
  return (
    <div 
      className={`command-card ${item.recommended ? 'recommended' : ''}`}
      onClick={() => onClick(item)}
    >
      <span className="card-command">{item.cmd}</span>
      <span className="card-output">{item.output}</span>
      {item.recommended && <span className="card-star">★</span>}
    </div>
  );
}
