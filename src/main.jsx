import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { ShopStore } from './redux/ShopStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ShopStore}>
    <App />
    </Provider>
  </StrictMode>,
)
