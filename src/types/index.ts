// Типы данных для VPN приложения
export interface Server {
  id: string;
  country: string;
  city: string;
  ping: number;
  load: number;
}

export interface UserProfile {
  username: string;
  subscription: 'Free' | 'Premium';
  dataUsed: number;
  dataLimit: number;
  expiryDate: Date;
}

export interface VPNStatus {
  isConnected: boolean;
  currentServer?: Server;
  uploadSpeed: number;
  downloadSpeed: number;
}