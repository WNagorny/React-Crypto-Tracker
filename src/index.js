import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './Pages/Home'
import Crypto from './Pages/Crypto'
import Trending from  './Pages/Trending'
import Saved from  './Pages/Saved'
import CryptoDetails from './components/CryptoDetails'


const router = createBrowserRouter([
	{
    path: "/",
    element: <Home/>,
    children : [
      {
        path: "/",
        element: <Crypto/>,
        children:[
          {
            path: ":coinId",
            element: <CryptoDetails/>
          }
        ]
      },
      {
        path: "/trending",
        element: <Trending/>,
        children:[
          {
            path: ":coinId",
            element: <CryptoDetails/>
          }
        ]
      },
      {
        path: "/saved",
        element: <Saved/>
      },
    ]
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
