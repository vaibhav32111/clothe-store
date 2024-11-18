import React from 'react'
import ReactDom from "react-dom/client"
import App from './App.jsx'
import { ProductProvider } from './components/Context/ProductContext.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <App />
  </ProductProvider>
)
