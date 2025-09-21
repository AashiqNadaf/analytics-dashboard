import { memo, useEffect, useState } from 'react';
import { useThemeStore } from '../../../Store/themeStore';
import Notification from './Notification';
import Activities from './Activities';
import Contacts from './Contacts';
import Icon from '../../Common/Icon';
import { ReactComponent as LightCloseIcon } from '../../../Icons/LightCloseIcon.svg';
import { ReactComponent as DarkCloseIcon } from '../../../Icons/DarkCloseIcon.svg';

interface RightSideBarProps {
  onClose?: () => void;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ onClose }) => {
  const { theme } = useThemeStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarContent = (
    <div
      className="w-[280px] min-h-screen max-h-screen overflow-y-auto flex flex-col p-5 gap-6 border-l relative"
      style={{ backgroundColor: theme.background, borderColor: theme.border }}
    >
      {isMobile && onClose && (
        <div className="absolute top-4 right-4 z-10">
          <Icon
            lightThemeIcon={LightCloseIcon}
            darkThemeIcon={DarkCloseIcon}
            className="w-6 h-6 cursor-pointer"
            onClick={onClose}
          />
        </div>
      )}
      <Notification />
      <Activities />
      <Contacts />
    </div>
  );

  if (isMobile && onClose) {
    return (
      <>
        {/* Mobile Backdrop */}
        <div
          className="fixed inset-0 z-[55]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
          onClick={onClose}
        />
        {/* Mobile Sidebar */}
        <div className="fixed top-0 right-0 w-[280px] h-screen z-[60]">
          {sidebarContent}
        </div>
      </>
    );
  }

  return sidebarContent;
};

export default memo(RightSideBar);
