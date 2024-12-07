import React from 'react';
import type { Server } from '../../types';

// Список доступных серверов
export const ServerList: React.FC<{
  servers: Server[];
  onSelect: (server: Server) => void;
  selectedId?: string;
}> = ({ servers, onSelect, selectedId }) => {
  return (
    <div className="space-y-3">
      {servers.map((server) => (
        <ServerCard
          key={server.id}
          server={server}
          selected={server.id === selectedId}
          onSelect={() => onSelect(server)}
        />
      ))}
    </div>
  );
};

// Карточка сервера
const ServerCard: React.FC<{
  server: Server;
  selected: boolean;
  onSelect: () => void;
}> = ({ server, selected, onSelect }) => {
  // Определяем цвет индикатора пинга
  const getPingColor = (ping: number) => {
    if (ping < 50) return 'text-green-500';
    if (ping < 100) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <button
      onClick={onSelect}
      className={`
        w-full p-4 rounded-xl transition-all
        ${selected 
          ? 'bg-amber-500/10 border-amber-500' 
          : 'bg-white/50 dark:bg-neutral-800/50 hover:bg-white/80 dark:hover:bg-neutral-800/80'}
        border backdrop-blur-sm
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-700" />
          <div className="text-left">
            <div className="font-medium">{server.country}</div>
            <div className="text-sm text-neutral-500">{server.city}</div>
          </div>
        </div>
        <div className={`font-mono ${getPingColor(server.ping)}`}>
          {server.ping}ms
        </div>
      </div>
    </button>
  );
};