import { Component, useCallback } from 'react';
import { useThemeStore } from '../../../Store/themeStore';
import type { Props, State } from './interface';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback  />;
    }

    return this.props.children;
  }
}

const ErrorFallback = () => {
  const { theme } = useThemeStore();
  const onRefreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center p-2"
      style={{ backgroundColor: theme.background }}
    >
      <div
        className="w-full h-full max-w-[100px] max-h-[100px] p-2 rounded border text-center flex flex-col items-center justify-center"
        style={{
          backgroundColor: theme.primary,
          borderColor: theme.border,
          color: theme.text,
        }}
      >
        <div className="text-lg mb-1">⚠️</div>
        <p className="text-xs font-medium mb-1" style={{ color: theme.text }}>
          Error
        </p>
        <button
          onClick={onRefreshPage}
          className="px-2 py-1 rounded text-xs font-medium transition-colors"
          style={{
            backgroundColor: theme.text,
            color: theme.background,
          }}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;
