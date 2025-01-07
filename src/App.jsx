
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
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
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
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
