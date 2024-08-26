import './App.css'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Services from './component/Services'

function App() {


  return (
    <div className='bg-[#eff6ff]'>
      <Navbar />
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
