import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import { FavoriteProvider } from './context/FavoriteContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoriteProvider>
  </StrictMode>,
)
