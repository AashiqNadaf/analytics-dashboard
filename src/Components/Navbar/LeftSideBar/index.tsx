import { memo, useEffect, useState } from 'react';
import { useThemeStore } from '../../../Store/themeStore';
import ProfileSection from './ProfileSection';
import QuickAccessSection from './QuickAccessSection';
import DashboardsSection from './DashboardsSection';
import PagesSection from './PagesSection';
import { useLocation } from 'react-router-dom';
import Icon from '../../Common/Icon';
import { ReactComponent as LightCloseIcon } from '../../../Icons/LightCloseIcon.svg';
import { ReactComponent as DarkCloseIcon } from '../../../Icons/DarkCloseIcon.svg';

interface LeftSideBarProps {
  onClose?: () => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ onClose }) => {
  const { theme } = useThemeStore();
  const [isActive, setIsActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname);
  }, []);

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
      className="w-[212px] min-h-screen max-h-screen overflow-y-auto max-w-[212px] flex flex-col px-4 py-5 gap-4 border-r relative"
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
      <ProfileSection />
      <QuickAccessSection />
      <DashboardsSection isActive={isActive} setIsActive={setIsActive} />
      <PagesSection isActive={isActive} setIsActive={setIsActive} />
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
        <div className="fixed top-0 left-0 w-[212px] h-screen z-[60]">
          {sidebarContent}
        </div>
      </>
    );
  }

  return sidebarContent;
};

export default memo(LeftSideBar);
