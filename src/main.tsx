import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { checkWebsiteLoaded, setPageTitle } from './utils'

// Check if the website is loaded properly
if (checkWebsiteLoaded()) {
  console.log('SIG Solutions website loaded successfully')
  setPageTitle('Home')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
