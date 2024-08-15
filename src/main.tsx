import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import './index.css'
import { Navbar } from './modules/core'
import { HomePage, HuffmanPage } from './modules/pages'

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/huffman',
    element: <HuffmanPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <div className="max-w-7xl bg-base-200 rounded-2xl p-8 m-8 mx-auto">
      <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
