import { memo, useState, useEffect, Suspense, lazy } from 'react';
import { useUserStore } from '../../../Store/userStore';
import type { TopBarProps } from './types';
import TopBarSkeleton from './Components/TopBarSkeleton';
import TopBarMobileSkeleton from './Components/TopBarMobileSkeleton';

const TopBarDesktop = lazy(() => import('./Components/TopBarDesktop'));
const TopBarMobile = lazy(() => import('./Components/TopBarMobile'));

const TopBar: React.FC<TopBarProps> = ({
  handleLeftSideBarOpen,
  handleRightSideBarOpen,
}) => {
  const { isLoading } = useUserStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isLoading) {
    return isMobile ? <TopBarMobileSkeleton /> : <TopBarSkeleton />;
  }

  const TopBarComponent = isMobile ? TopBarMobile : TopBarDesktop;
  const SkeletonComponent = isMobile ? TopBarMobileSkeleton : TopBarSkeleton;

  return (
    <Suspense fallback={<SkeletonComponent />}>
      <TopBarComponent
        handleLeftSideBarOpen={handleLeftSideBarOpen}
        handleRightSideBarOpen={handleRightSideBarOpen}
      />
    </Suspense>
  );
};

export default memo(TopBar);
