import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import App from './App'
import './css/style.css'

const root = createRoot(document.getElementById('root')!, {
  onUncaughtError: (error, errorInfo) => {
    console.error('Uncaught error:', error, errorInfo);
  },
  onCaughtError: (error, errorInfo) => {
    console.warn('Caught error:', error, errorInfo);
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)