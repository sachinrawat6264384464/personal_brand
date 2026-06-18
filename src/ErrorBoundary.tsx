import React from 'react';

type State = { hasError: boolean; message?: string };

export default class ErrorBoundary extends React.Component<Record<string, unknown>, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, message: error?.message || String(error) };
  }

  componentDidCatch(error: any, info: any) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, color: '#fff', fontFamily: 'Inter, sans-serif' }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#fca5a5' }}>{this.state.message}</pre>
          <div style={{ marginTop: 12 }}>
            Open the developer console and the terminal running the dev server for more details.
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
