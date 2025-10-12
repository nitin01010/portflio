import { createRoot } from 'react-dom/client'
import './style/index.css';
import App from './pages/app';
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics />
  </>
)
