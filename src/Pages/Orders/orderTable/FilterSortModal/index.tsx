import React, { useState, memo } from 'react';
import { Modal, Button, DatePicker } from 'antd';
import { useThemeStore } from '../../../../Store/themeStore';
import type { FilterSortModalProps } from './interface';
import { MODAL_CONFIG, DEFAULT_FILTERS } from './constants';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

const FilterSortModal: React.FC<FilterSortModalProps> = ({
  visible,
  onCancel,
  onApply,
}) => {
  const { theme } = useThemeStore();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const handleApply = () => {
    onApply(filters);
    onCancel();
  };

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return (
    <Modal
      title={MODAL_CONFIG.title}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="reset" onClick={handleReset}>
          Reset
        </Button>,
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="apply"
          type="primary"
          onClick={handleApply}
          style={{
            backgroundColor: theme.primary,
            borderColor: theme.primary,
            color: theme.text,
          }}
        >
          Apply
        </Button>,
      ]}
      style={{
        top: MODAL_CONFIG.top,
      }}
      bodyStyle={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
      width={MODAL_CONFIG.width}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label
            style={{ color: theme.text, marginBottom: '8px', display: 'block' }}
          >
            Filter by Date Range
          </label>
          <RangePicker
            style={{ width: '100%' }}
            onChange={(dates) =>
              setFilters({ ...filters, dateRange: dates as [Dayjs, Dayjs] })
            }
            value={filters.dateRange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default memo(FilterSortModal);
