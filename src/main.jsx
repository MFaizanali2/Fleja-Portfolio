import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Abuot from './pages/Abuot.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import Skill from './pages/Skill.jsx'
import Work from './pages/Work.jsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/", element: <Home />},
  {path: "/about", element: <Abuot />},
  {path: "/contact", element: <Contact />},
  {path: "/services", element: <Service />},
  {path: "/skills", element: <Skill />},
  {path: "/work", element: <Work />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
