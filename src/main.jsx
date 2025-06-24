import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProjetosPagina from "./pages/ProjetosPagina.jsx"
import DetalhesProjetos from './pages/DetalhesProjetos.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CategoriasPagina from './pages/CategoriasPagina.jsx'
import AuthPagina from './pages/AuthPagina.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <AuthPagina />,
  },

  {
    path: "/home",
    element: <App />
  },

  {
    path: "/projetos",
    element: <ProjetosPagina />,
  },

  {
    path: "/projetos/projeto",
    element: <DetalhesProjetos />
  },
  {
    path: "/categorias",
    element: <CategoriasPagina />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } /> 
  </StrictMode>,
)
