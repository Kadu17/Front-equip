import './App.css'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router  = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/produtos",
      element: <Products />
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
