import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Services from './component/Services'
import Testimonials from './component/Testimonial'

function App() {


  return (
    <div>
      <Navbar />
      <Hero/>
      <Services/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
