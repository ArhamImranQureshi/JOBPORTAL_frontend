import './App.css'
import Navbar from './components/ui/shared/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <h1>Counter</h1>
    </>
  )
}

export default App
