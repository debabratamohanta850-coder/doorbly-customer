import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Immediately register Service Worker in production so mobile browsers enable direct app installation
if (import.meta.env.PROD && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch((err) => {
    console.warn('SW registration failed:', err);
  });
}

createRoot(document.getElementById('root')!).render(<App />);
