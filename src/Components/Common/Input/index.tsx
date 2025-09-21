import { memo } from 'react';
import { Input as AntdInput } from 'antd';
import { useThemeStore } from '../../../Store/themeStore';
import type { InputProps } from './interface';

const Input: React.FC<InputProps> = ({
  placeholder,
  prefix,
  suffix,
  onChange,
  value,
  backgroundColor,
}) => {
  const { theme } = useThemeStore();
  return (
    <AntdInput
      style={
        {
          backgroundColor:
            backgroundColor || (theme.currentTheme === 'dark' ? '#FFFFFF1A' : '#1C1C1C0D'),
          border: 'none',
          color: theme.text,
          '--placeholder-color': theme.placeholder,
        } as React.CSSProperties
      }
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
      placeholder={placeholder}
      prefix={prefix}
      className="custom-input"
      suffix={suffix}
    />
  );
};

export default memo(Input);
