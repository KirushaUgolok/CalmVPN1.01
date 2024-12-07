import React from 'react';
import { Shield, Settings, HelpCircle } from 'lucide-react';
import { strings } from '../../constants/strings';

// Компонент нижней навигации
export const BottomNav: React.FC<{
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-700">
      <div className="flex justify-around items-center h-16">
        <NavButton
          icon={<Shield size={24} />}
          label={strings.navigation.home}
          active={activeTab === 'home'}
          onClick={() => onTabChange('home')}
        />
        <NavButton
          icon={<Settings size={24} />}
          label={strings.navigation.settings}
          active={activeTab === 'settings'}
          onClick={() => onTabChange('settings')}
        />
        <NavButton
          icon={<HelpCircle size={24} />}
          label={strings.navigation.support}
          active={activeTab === 'support'}
          onClick={() => onTabChange('support')}
        />
      </div>
    </nav>
  );
};

// Кнопка навигации
const NavButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center gap-1 p-2 transition-colors
      ${active 
        ? 'text-amber-500' 
        : 'text-neutral-600 dark:text-neutral-400'}`}
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </button>
);