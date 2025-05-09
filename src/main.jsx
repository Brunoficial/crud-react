import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projetos from "./pages/Projetos.jsx"
import DetalhesProjetos from './pages/DetalhesProjetos.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/projetos",
    element: <Projetos />,
  },

  {
    path: "/projetos/projeto",
    element: <DetalhesProjetos />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } /> 
  </StrictMode>,
)
