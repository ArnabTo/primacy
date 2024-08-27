import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Contact from './component/Contact'


function App() {


  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Contact/>
    </div>
  )
}

export default App
