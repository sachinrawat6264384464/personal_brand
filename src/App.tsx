import Router from './router';
import ErrorBoundary from './ErrorBoundary';

function App(){
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </div>
  );
}

export default App;
