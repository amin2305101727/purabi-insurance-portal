import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.css';

export function Root() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Root />);
}

export default Root;
