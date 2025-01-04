import Navbar from './components/ui/shared/Navbar'
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'
import { createBrowserRouter } from 'react-router-dom'
const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/LOGIN',
    element:<Login/>
  },
  {
    path:'/',
    element:<Signup/>
  },
])
function App() {
  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
