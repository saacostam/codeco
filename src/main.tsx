import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import './index.css'
import { Navbar } from './modules/core'
import { router } from './modules/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <div className="max-w-7xl bg-base-200 rounded-2xl p-8 m-8 mx-auto">
      <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
