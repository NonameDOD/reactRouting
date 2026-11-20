import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Public from './pages/Public'
import Admin from './pages/Admin'
import UjTermek from './pages/UjTermek'
import Kosar from './pages/Kosar'
import AdottTermek from './pages/AdottTermek'
import NoPage from './pages/NoPage'


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <Public/>},
      {path: 'admin', element: <Admin/>},
      {path: 'admin/uj-termek', element: <UjTermek/>},
      {path: 'kosar', element: <Kosar/>},
      {path: 'termek/:id', element: <AdottTermek/>},
      {path: '*', element: <NoPage/>},
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      return <RouterProvider router={router} />
    </>
  )
}

export default App
