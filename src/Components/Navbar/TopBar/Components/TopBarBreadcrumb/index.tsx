import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { useThemeStore } from '../../../../../Store/themeStore';
import { getBreadcrumbItems } from '../utils';
import { routes } from '../../../../../Routes/constant';

const TopBarBreadcrumb = () => {
  const { theme } = useThemeStore();
  const location = useLocation();

  const currentRoute = location.pathname;
  const breadcrumbItems = getBreadcrumbItems(routes, currentRoute);

  return (
    <div className="w-full">
      <Breadcrumb
        items={breadcrumbItems.map((item, index) => ({
          title: (
            <span
              style={{
                color:
                  index === breadcrumbItems.length - 1
                    ? theme.text
                    : theme.secondaryText,
              }}
            >
              {item.title}
            </span>
          ),
        }))}
      />
    </div>
  );
};

export default memo(TopBarBreadcrumb);
