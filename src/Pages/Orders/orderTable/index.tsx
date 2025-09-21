import React, { memo, useState, useCallback, useMemo } from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableRowSelection } from 'antd/es/table/interface';
import { usePaginatedOrdersData } from '../useOrdersData';
import StatusComponent from '../StatusComponent';
import { useThemeStore } from '../../../Store/themeStore';
import type { Order } from '../interface';
import TableSkeleton from './TableSkeleton';
import { ReactComponent as DarkCalenderIcon } from '../../../Icons/DarkCalenderIcon.svg';
import { ReactComponent as LightCalenderIcon } from '../../../Icons/LightCalenderIcon.svg';
import './style.scss';
import Icon from '../../../Components/Common/Icon';
import UserAvatar from '../../../Components/Common/UserAvatar';
import { formatRelativeTime } from '../utils';

interface OrdersTableProps {
  orders: Order[];
  loading: boolean;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orders: allOrders,
  loading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const { theme } = useThemeStore();

  const { data: orders, total } = usePaginatedOrdersData(
    allOrders,
    loading,
    currentPage,
    pageSize
  );

  const handleTableChange = (pagination: {
    current?: number;
    pageSize?: number;
  }) => {
    if (pagination.current) {
      setCurrentPage(pagination.current);
    }
    if (pagination.pageSize) {
      setPageSize(pagination.pageSize);
    }
  };

  const handleSelectionChange = useCallback((selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  }, []);

  const columns: ColumnsType<Order> = useMemo(
    () => [
      {
        title: 'Order ID',
        dataIndex: 'id',
        key: 'id',
        width: 120,
        fixed: 'left',
      },
      {
        title: 'User',
        key: 'user',
        width: 200,
        render: (_, record) => (
          <div className="flex items-center gap-3">
            <UserAvatar userProfile={record.userProfile} />
            <div className="font-medium text-sm">{record.user}</div>
          </div>
        ),
      },
      {
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 150,
        render: (date: Date) => (
          <div className="flex items-center gap-2">
            <Icon
              lightThemeIcon={LightCalenderIcon}
              darkThemeIcon={DarkCalenderIcon}
              className="w-4 h-4"
            />
            <span className="text-sm">{formatRelativeTime(date)}</span>
          </div>
        ),
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 120,
        render: (status: string) => <StatusComponent status={status} />,
      },
    ],
    []
  );

  const rowSelection: TableRowSelection<Order> = useMemo(
    () => ({
      selectedRowKeys,
      onChange: handleSelectionChange,
    }),
    [selectedRowKeys, handleSelectionChange]
  );

  const pagination = useMemo(
    () => ({
      current: currentPage,
      pageSize: pageSize,
      total: total,
      showSizeChanger: false,
      showQuickJumper: false,
      className: 'custom-pagination',
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px',
      },
    }),
    [currentPage, pageSize, total]
  );

  return (
    <div className="w-full">
      {loading ? (
        <TableSkeleton />
      ) : (
        <div
          className="rounded-lg overflow-hidden"
          style={
            {
              backgroundColor: theme.background,
              border: `1px solid ${theme.border}`,
              '--border-color': theme.border,
              '--background-color': theme.background,
              '--text-color': theme.text,
              '--primary-color': theme.primary,
            } as React.CSSProperties
          }
        >
          <Table
            columns={columns}
            dataSource={orders}
            rowKey="id"
            rowSelection={rowSelection}
            pagination={pagination}
            onChange={handleTableChange}
            scroll={{ x: 1000 }}
            size="middle"
            className="w-full"
            style={{
              backgroundColor: theme.background,
              color: theme.text,
            }}
            components={{
              header: {
                cell: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
                  <th
                    {...props}
                    style={{
                      ...props.style,
                      backgroundColor: theme.background,
                      color: theme.secondaryText,
                      border: 'none',
                    }}
                  />
                ),
              },
              body: {
                row: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
                  <tr
                    {...props}
                    style={{
                      ...props.style,
                      backgroundColor: theme.background,
                      color: theme.text,
                      borderColor: theme.border,
                    }}
                  />
                ),
                cell: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
                  <td
                    {...props}
                    style={{
                      ...props.style,
                      backgroundColor: theme.background,
                      color: theme.text,
                      borderColor: theme.border,
                    }}
                  />
                ),
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default memo(OrdersTable);
