import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './app/styles/global.scss'
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);