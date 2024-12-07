import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { strings } from '../../constants/strings';

// Переключатель темы
export const ThemeToggle: React.FC<{
  theme: 'light' | 'dark' | 'system';
  onThemeChange: (theme: 'light' | 'dark' | 'system') => void;
}> = ({ theme, onThemeChange }) => {
  return (
    <div className="flex gap-2 p-4 bg-white/50 dark:bg-neutral-800/50 rounded-xl backdrop-blur-sm">
      <ThemeButton
        icon={<Sun size={20} />}
        label={strings.settings.theme.light}
        active={theme === 'light'}
        onClick={() => onThemeChange('light')}
      />
      <ThemeButton
        icon={<Moon size={20} />}
        label={strings.settings.theme.dark}
        active={theme === 'dark'}
        onClick={() => onThemeChange('dark')}
      />
      <ThemeButton
        icon={<Monitor size={20} />}
        label={strings.settings.theme.system}
        active={theme === 'system'}
        onClick={() => onThemeChange('system')}
      />
    </div>
  );
};

// Кнопка выбора темы
const ThemeButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
      ${active 
        ? 'bg-amber-500 text-white' 
        : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </button>
);