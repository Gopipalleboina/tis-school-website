import CustomCursor from './components/CustomCursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Stats from './sections/Stats.jsx';
import About from './sections/About.jsx';
import Campus from './sections/Campus.jsx';
import Academics from './sections/Academics.jsx';
import Activities from './sections/Activities.jsx';
import Testimonials from './sections/Testimonials.jsx';
import CTA from './sections/CTA.jsx';
import Footer from './sections/Footer.jsx';
import './App.css';
function App() {

  return (
    <>
      <CustomCursor/>
      <ScrollProgress/>
      <Navar/>
       <main>
        <Hero/>
        <Stats/>
        <About/>
        <Campus/>
        <Academics/>
        <Activities/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer/>
    </>
  )
}

export default App
