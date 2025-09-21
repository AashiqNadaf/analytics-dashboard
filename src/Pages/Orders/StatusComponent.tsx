import React, { memo } from 'react';
import { useThemeStore } from '../../Store/themeStore';

interface StatusComponentProps {
  status: string;
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
  const { theme } = useThemeStore();

  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return { color: '#59A8D4', text: 'Pending' };
      case 'approved':
        return { color: '#FFC555', text: 'Approved' };
      case 'in progress':
        return { color: '#8A8CD9', text: 'In progress' };
      case 'complete':
        return { color: '#4AA785', text: 'Complete' };
      case 'rejected':
        return {
          color: theme.currentTheme === 'dark' ? '#FFFFFF66' : '#1C1C1C66',
          text: 'Rejected',
        };
      default:
        return {
          color: theme.currentTheme === 'dark' ? '#FFFFFF66' : '#1C1C1C66',
          text: status,
        };
    }
  };

  const { color, text } = getStatusConfig(status);

  return (
    <div className="flex items-center gap-2">
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm" style={{ color }}>
        {text}
      </span>
    </div>
  );
};

export default memo(StatusComponent);
