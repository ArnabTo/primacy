import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Services from './component/Services'

function App() {


  return (
    <div className='bg-bgColor'>
      <Navbar />
      <Hero/>
      <Services/>
      <About/>
    </div>
  )
}

export default App
