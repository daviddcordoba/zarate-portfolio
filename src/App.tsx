import './App.css'
import Nav from './components/Nav'
import Presentation from './components/Presentation'
import About from './components/About'
import UGC from './components/UGC'
import Projects from './components/Projects';
import Contact from './components/Contact';
import CommunityManager from './components/CommunityManager'
import BrandCollaboration from './components/BrandCollaboration'

function App() {
  return (
    <main id='inicio' translate='no'>
      <Nav/>
    
      <section  className='w-auto mx-auto mt-10 gap-5 lg:gap-[10rem] h-[75vh] md:h-[80vh] flex items-center'>
        <Presentation/>
      </section>

      <section id='sobremi' className='my-20 flex flex-col' >
        <About/>
      </section>

      <section className='my-20 flex flex-col'>
        <BrandCollaboration/>
      </section>

      <section className='my-20 flex flex-col' id='ugc'>
        <UGC/>
      </section>

      <section  className='my-20 flex flex-col' id='cm'>
        <CommunityManager/>
      </section>

      <section className='my-20' id='trabajos'>
        <Projects/>       
      </section>

      <footer className='my-20' id='contacto'>
        <Contact/>
      </footer>
    </main>
  )
}

export default App
