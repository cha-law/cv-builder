import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import CVBuilder from './CVBuilder.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVBuilder />
    <Footer />
  </StrictMode>,
)
