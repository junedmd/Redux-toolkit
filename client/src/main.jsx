import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Practise from "./pages/Practise.jsx"
// import { CounterProvider } from './context/Counter'
import Home from './pages/Home/Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Home/>
  </StrictMode>,
)
