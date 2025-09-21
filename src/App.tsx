import { memo, useCallback, useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import { useThemeStore } from './Store/themeStore';
import { useUserStore } from './Store/userStore';
import { getCSSVariables } from './Store/cssVariables';
import TopBar from './Components/Navbar/TopBar';
import Loader from './Components/Common/Loader';
import RouteLoader from './Components/Common/RouteLoader';
import ErrorBoundary from './Components/Common/ErrorBoundary';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { routes } from './Routes/constant';

const LeftSideBar = lazy(() => import('./Components/Navbar/LeftSideBar'));
const RightSideBar = lazy(() => import('./Components/Navbar/RightSideBar'));

function App() {
  const { theme } = useThemeStore();
  const { initializeUser, isLoading } = useUserStore();
  const [isLeftSideBarOpen, setIsLeftSideBarOpen] = useState(false);
  const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(false);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  const handleLeftSideBarOpen = useCallback(() => {
    setIsLeftSideBarOpen((prev) => !prev);
  }, []);

  const handleRightSideBarOpen = useCallback(() => {
    setIsRightSideBarOpen((prev) => !prev);
  }, []);

  return (
    <div
      className="flex flex-row"
      style={
        {
          backgroundColor: theme.background,
          ...getCSSVariables(theme),
        } as React.CSSProperties
      }
    >
      {isLeftSideBarOpen && (
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                className="w-[212px] h-screen animate-pulse border-r md:relative fixed top-0 left-0 z-[60]"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                }}
              />
            }
          >
            <LeftSideBar onClose={() => setIsLeftSideBarOpen(false)} />
          </Suspense>
        </ErrorBoundary>
      )}
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        <TopBar
          handleLeftSideBarOpen={handleLeftSideBarOpen}
          handleRightSideBarOpen={handleRightSideBarOpen}
        />
        <div className="flex-1 flex items-center justify-center overflow-y-auto">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="w-full h-full p-6">
              <ErrorBoundary>
                <Suspense fallback={<RouteLoader />}>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </div>
          )}
        </div>
      </div>
      {isRightSideBarOpen && (
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                className="w-[280px] h-screen animate-pulse border-l md:relative fixed top-0 right-0 z-[60]"
                style={{
                  backgroundColor: theme.background,
                  borderColor: theme.border,
                }}
              />
            }
          >
            <RightSideBar onClose={() => setIsRightSideBarOpen(false)} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default memo(App);
