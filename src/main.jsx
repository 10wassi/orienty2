import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './orienty/App.tsx'
import './orienty/styles.css' // Importation du fichier CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
