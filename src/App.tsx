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
    <main id='inicio' translate='no' className='px-2'>
      <Nav/>
    
      <section  className='mt-32 '>
        <Presentation/>
      </section>

      <section id='sobremi' className='my-20  ' >
        <About/>
      </section>

      <section className='my-20'>
        <BrandCollaboration/>
      </section>

      <section className='my-10 flex flex-col' id='ugc'>
        <UGC/>
      </section>

      <section  className='my-10 ' id='cm'>
        <CommunityManager/>
      </section>

      <section className='my-10' id='trabajos'>
        <Projects/>       
      </section>

      <footer className='my-10 text-center ' id='contacto'>
        <Contact/>
      </footer>
    </main>
  )
}

export default App
