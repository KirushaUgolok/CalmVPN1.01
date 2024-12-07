import React from 'react';
import { BottomNav } from './components/navigation/BottomNav';
import { ConnectionButton } from './components/vpn/ConnectionButton';
import { ServerSelect } from './components/vpn/ServerSelect';
import { ThemeToggle } from './components/settings/ThemeToggle';
import { FAQSection } from './components/support/FAQSection';
import { useTheme } from './hooks/useTheme';
import type { Server, VPNStatus } from './types';
import { strings } from './constants/strings';

// Демо-данные для серверов
const DEMO_SERVERS: Server[] = [
  { id: '1', country: 'Россия', city: 'Москва', ping: 25, load: 45 },
  { id: '2', country: 'Германия', city: 'Берлин', ping: 80, load: 65 },
  { id: '3', country: 'США', city: 'Нью-Йорк', ping: 120, load: 30 },
  { id: '4', country: 'Япония', city: 'Токио', ping: 150, load: 40 },
  {
    id: '5',
    country: 'Сингапур',
    city: 'Сингапур',
    ping: -1,
    load: 0,
    isOffline: true,
  },
];

function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  const { theme, setTheme } = useTheme();
  const [vpnStatus, setVpnStatus] = React.useState<VPNStatus>({
    isConnected: false,
    uploadSpeed: 0,
    downloadSpeed: 0,
  });

  const handleToggleConnection = () => {
    setVpnStatus((prev) => ({
      ...prev,
      isConnected: !prev.isConnected,
    }));
  };

  // Рендерим содержимое в зависимости от активной вкладки
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-between min-h-[calc(100vh-5rem)] p-4">
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl">
              {/* Кнопка подключения/отключения VPN */}
              <ConnectionButton
                isConnected={vpnStatus.isConnected}
                onToggle={handleToggleConnection}
              />
              
              {/* Статус подключения */}
              <div className="text-center my-8">
                <h2 className="text-2xl font-bold mb-2">
                  {vpnStatus.isConnected
                    ? strings.connection.connected
                    : strings.connection.disconnected}
                </h2>
                {vpnStatus.currentServer && (
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    {strings.connection.serverInfo
                      .replace('{country}', vpnStatus.currentServer.country)
                      .replace('{city}', vpnStatus.currentServer.city)}
                  </p>
                )}
              </div>

              {/* Выпадающий список серверов */}
              <div className="w-full px-4">
                <ServerSelect
                  servers={DEMO_SERVERS}
                  selectedId={vpnStatus.currentServer?.id}
                  onSelect={(server) =>
                    setVpnStatus((prev) => ({
                      ...prev,
                      currentServer: server,
                    }))
                  }
                />
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {strings.settings.theme.title}
              </h3>
              {/* Смена темы */}
              <ThemeToggle theme={theme} onThemeChange={setTheme} />
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="p-4 space-y-6">
            <FAQSection />
          </div>
        );
      default:
        return null;
    }
  };

  // Основной рендер приложения
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      {/* Содержимое приложения */}
      <div className="pb-20">{renderContent()}</div>
      {/* Нижняя навигация */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;