import './App.css'
import Nav from './components/Nav'
import Presentation from './components/Presentation'
import About from './components/About'
import UGC from './components/UGC'
import Projects from './components/Projects';
import Contact from './components/Contact';
import CommunityManager from './components/CommunityManager'

function App() {
  return (
    <main id='inicio' translate='no'>
      <header  className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-10 lg:mt-5'>
        <Nav/>
      </header>

      <section  className='w-[85%] mx-auto mt-10 gap-5 lg:gap-[10rem] h-[70vh] flex items-center'>
        <Presentation/>
      </section>

      <section id='sobremi' >
        <About/>
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
