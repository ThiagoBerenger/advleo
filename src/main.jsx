import React from 'react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// importando páginas
import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Extravio from './Routes/Extravio.jsx'
import Atraso from './Routes/Atraso.jsx'
import CancelamentoComponent from './Components/CancelamentoComponent/CancelamentoComponent.jsx'
import Overbooking from './Routes/Overbooking.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/extravio-de-bagagem',
        element: <Extravio />
      },
      {
        path: '/atraso-de-voo',
        element: <Atraso />
      },
      {
        path: '/cancelamento-de-voo',
        element: <CancelamentoComponent />
      },
      {
        path: '/overbooking',
        element: <Overbooking />
      },
      {
        path: 'contato',
        element: <Contact />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
