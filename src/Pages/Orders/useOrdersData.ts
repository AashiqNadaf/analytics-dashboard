import { useState, useMemo, useEffect } from 'react';
import { DUMMY_ORDERS } from './constant';
import type { Order } from './interface';
import type { Dayjs } from 'dayjs';

interface FilterSortOptions {
  dateRange?: [Dayjs, Dayjs];
}

export const useOrdersData = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterSortOptions>({});

  const memoizedOrders = useMemo(() => {
    let filteredOrders = [...orders];

    if (filters.dateRange && filters.dateRange[0] && filters.dateRange[1]) {
      const [startDate, endDate] = filters.dateRange;
      filteredOrders = filteredOrders.filter((order) => {
        const orderDate = new Date(order.date);
        const start = startDate.toDate();
        const end = endDate.toDate();
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        return orderDate >= start && orderDate <= end;
      });
    }

    return filteredOrders;
  }, [orders, filters]);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOrders(DUMMY_ORDERS);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const addOrder = (newOrder: Omit<Order, 'id'>) => {
    const order: Order = {
      ...newOrder,
      id: `ORD-${Date.now()}`,
    };
    setOrders((prevOrders) => [order, ...prevOrders]);
  };

  const applyFilters = (newFilters: FilterSortOptions) => {
    setFilters(newFilters);
  };

  const sortByDate = (ascending: boolean = false) => {
    setOrders((prevOrders) => {
      const sorted = [...prevOrders].sort((a, b) => {
        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();
        return ascending ? aTime - bTime : bTime - aTime;
      });
      return sorted;
    });
  };

  return {
    orders: memoizedOrders,
    loading,
    addOrder,
    applyFilters,
    sortByDate,
    refetch: () => {
      setLoading(true);
      setOrders(DUMMY_ORDERS);
      setLoading(false);
    },
  };
};

export const usePaginatedOrdersData = (
  orders: Order[],
  loading: boolean,
  page: number = 1,
  pageSize: number = 10
) => {
  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedOrders = orders.slice(startIndex, endIndex);

    return {
      data: paginatedOrders,
      total: orders.length,
      current: page,
      pageSize,
    };
  }, [orders, page, pageSize]);

  return {
    ...paginatedData,
    loading,
  };
};
