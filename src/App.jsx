import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Services from './component/Services'
import Testimonials from './component/Testimonial'

function App() {


  return (
    <div className='bg-white'>
      <Navbar />
      <Hero/>
      <Services/>
      <About/>
      <Testimonials/>
    </div>
  )
}

export default App
