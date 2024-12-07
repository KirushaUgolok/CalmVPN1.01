import React from 'react';
import Select from 'react-select';
import { Server } from '../../types';
import { strings } from '../../constants/strings';
import { GB, US, RU, JP, SG } from 'country-flag-icons/react/3x2';

const FlagIcon: React.FC<{ country: string }> = ({ country }) => {
  const flags: Record<string, React.ComponentType> = {
    'Россия': RU,
    'США': US,
    'Япония': JP,
    'Германия': GB,
    'Сингапур': SG
  };
  
  const Flag = flags[country];
  return Flag ? <Flag className="w-6 h-4" /> : null;
};

export const ServerSelect: React.FC<{
  servers: Server[];
  selectedId?: string;
  onSelect: (server: Server) => void;
}> = ({ servers, selectedId, onSelect }) => {
  const options = servers.map(server => ({
    value: server.id,
    label: (
      <div className="flex items-center gap-2">
        <FlagIcon country={server.country} />
        <span className="font-semibold">{server.country}, {server.city}</span>
        {server.isOffline && (
          <span className="text-red-500 text-sm font-medium">(недоступен)</span>
        )}
      </div>
    ),
    isDisabled: server.isOffline,
    data: server
  }));

  const selectedOption = options.find(opt => opt.value === selectedId);

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={(option) => option && onSelect(option.data)}
      isSearchable={false}
      placeholder={strings.connection.selectServer}
      className="server-select text-lg"
      classNamePrefix="server-select"
      menuPlacement="bottom"
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary: '#F59E0B',
          primary75: '#FCD34D',
          primary50: '#FDE68A',
          primary25: '#FEF3C7',
          neutral0: 'var(--tw-bg-opacity)',
          neutral80: 'currentColor'
        }
      })}
    />
  );
};