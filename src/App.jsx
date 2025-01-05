
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
])
function App() {
  return (
    <>
    <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
