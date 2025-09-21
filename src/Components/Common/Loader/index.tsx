import { memo } from 'react';
import { useThemeStore } from '../../../Store/themeStore';
import './loader.css';

const Loader = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className="loader"
      style={
        {
          '--ball-color': theme.text,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default memo(Loader);
