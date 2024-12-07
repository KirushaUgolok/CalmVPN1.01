import React from 'react';
import { Shield, Settings, User, HelpCircle, Flame } from 'lucide-react';

// Боковая панель навигации
export const Sidebar = () => {
  return (
    <aside className="w-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl border-r border-neutral-200 dark:border-neutral-700">
      <div className="flex flex-col items-center py-8 gap-8">
        <div className="text-amber-500">
          <Flame size={32} />
        </div>
        <nav className="flex flex-col gap-6">
          <SidebarIcon icon={<Shield />} active />
          <SidebarIcon icon={<Settings />} />
          <SidebarIcon icon={<User />} />
          <SidebarIcon icon={<HelpCircle />} />
        </nav>
      </div>
    </aside>
  );
};

// Иконка в боковой панели
const SidebarIcon: React.FC<{
  icon: React.ReactNode;
  active?: boolean;
}> = ({ icon, active }) => (
  <button
    className={`p-3 rounded-xl transition-all hover:bg-amber-500/10 hover:text-amber-500
      ${active ? 'text-amber-500 bg-amber-500/10' : 'text-neutral-600 dark:text-neutral-400'}`}
  >
    {icon}
  </button>
);