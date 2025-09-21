import { memo, useEffect, useState, lazy, Suspense, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuickAccessStore } from '../../Store/quickAccessStore';
import { ORDERS_TAB } from './constant';
import Icon from '../../Components/Common/Icon';
import { ReactComponent as LightFilterIcon } from '../../Icons/LightFilterIcon.svg';
import { ReactComponent as DarkFilterIcon } from '../../Icons/DarkFilterIcon.svg';
import { ReactComponent as LightSortIcon } from '../../Icons/LightSortIcon.svg';
import { ReactComponent as DarkSortIcon } from '../../Icons/DarkSortIcon.svg';
import { ReactComponent as LightPlusIcon } from '../../Icons/LightPlusIcon.svg';
import { ReactComponent as DarkPlusIcon } from '../../Icons/DarkPlusIcon.svg';
import { useThemeStore } from '../../Store/themeStore';
import OrdersTable from './orderTable';
import { useOrdersData } from './useOrdersData';
import type { Order } from './interface';
import type { Dayjs } from 'dayjs';
import Input from '../../Components/Common/Input';
import { ReactComponent as LightSearchIcon } from '../../Icons/LightSearchIcon.svg';
import { ReactComponent as DarkSearchIcon } from '../../Icons/DarkSearchIcon.svg';
import { getInputBackgroundColor } from './utils';
const AddOrderModal = lazy(() => import('./orderTable/AddOrderModal'));
const FilterSortModal = lazy(() => import('./orderTable/FilterSortModal'));

const Orders = () => {
  const location = useLocation();
  const { theme } = useThemeStore();
  const [searchValue, setSearchValue] = useState('');
  const { addToRecentlyVisited } = useQuickAccessStore();
  const { orders, loading, addOrder, applyFilters, sortByDate } =
    useOrdersData();

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  useEffect(() => {
    if (location.pathname && location.pathname !== '/') {
      addToRecentlyVisited(location.pathname);
    }
  }, [location.pathname, addToRecentlyVisited]);

  const handleAddOrder = useCallback(() => {
    setAddModalVisible(true);
  }, []);

  const handleFilterChange = useCallback(() => {
    setFilterModalVisible(true);
  }, []);

  const handleSortChange = useCallback(() => {
    sortByDate(false);
  }, []);

  const handleAddOrderSubmit = useCallback((newOrder: Omit<Order, 'id'>) => {
    addOrder(newOrder);
  }, []);

  const handleFilterApply = useCallback(
    (filters: { dateRange?: [Dayjs, Dayjs] }) => {
      applyFilters(filters);
    },
    []
  );

  return (
    <div className="w-full flex flex-col gap-4 p-2">
      <div
        className="w-full h-[28px] flex justify-start items-center px-2 text-sm font-semibold"
        style={{ color: theme.text }}
      >
        {ORDERS_TAB}
      </div>
      <div
        className="w-full h-[44px] flex justify-between items-center px-2 rounded-lg"
        style={{ backgroundColor: theme.itemActiveBg }}
      >
        <div className="flex justify-start items-center gap-4">
          <Icon
            lightThemeIcon={LightPlusIcon}
            darkThemeIcon={DarkPlusIcon}
            className="cursor-pointer w-5 h-5"
            onClick={() => handleAddOrder()}
          />
          <Icon
            lightThemeIcon={LightFilterIcon}
            darkThemeIcon={DarkFilterIcon}
            className="cursor-pointer w-5 h-5"
            onClick={() => handleFilterChange()}
          />
          <Icon
            lightThemeIcon={LightSortIcon}
            darkThemeIcon={DarkSortIcon}
            className="cursor-pointer w-5 h-5"
            onClick={() => handleSortChange()}
          />
        </div>
        <div className="w-[160px]">
          <Input
            placeholder="Search"
            prefix={
              <Icon
                lightThemeIcon={DarkSearchIcon}
                darkThemeIcon={LightSearchIcon}
                className="w-5 h-5"
              />
            }
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
            backgroundColor={getInputBackgroundColor(theme)}
          />
        </div>
      </div>

      <div className="w-full">
        <OrdersTable orders={orders} loading={loading} />
      </div>

      <Suspense fallback={null}>
        <AddOrderModal
          visible={addModalVisible}
          onCancel={() => setAddModalVisible(false)}
          onAdd={handleAddOrderSubmit}
        />
      </Suspense>

      <Suspense fallback={null}>
        <FilterSortModal
          visible={filterModalVisible}
          onCancel={() => setFilterModalVisible(false)}
          onApply={handleFilterApply}
        />
      </Suspense>
    </div>
  );
};

export default memo(Orders);
