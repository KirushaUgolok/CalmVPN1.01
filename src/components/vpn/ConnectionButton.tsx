import React from 'react';
import { Power } from 'lucide-react';

// Большая кнопка подключения VPN
export const ConnectionButton: React.FC<{
  isConnected: boolean;
  onToggle: () => void;
}> = ({ isConnected, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        w-40 h-40 rounded-full flex items-center justify-center
        transition-all duration-500 relative
        ${isConnected 
          ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
          : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'}
      `}
    >
      <Power size={48} />
      {isConnected && (
        <div className="absolute inset-0 rounded-full animate-ping bg-amber-500/30" />
      )}
    </button>
  );
};