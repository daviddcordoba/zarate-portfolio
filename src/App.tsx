import { useState } from 'react'
import './App.css'
import profile_pic from './assets/profile_pic.jpeg'
import phoneMockup from './assets/ahorasi.png'
import about_pic from './assets/356223726_832998341495275_5659792196220834236_n.jpg'
import tiktok1 from './assets/tiktok1.mp4'
import labialMaybelline from './assets/labialMaybelline.mp4'
import meriendacba from './assets/meriendacba.mp4'
import ondasSinCalor from './assets/ondasSinCalor.mp4'


import ReactPlayer from 'react-player'
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";

const UGC_VIDEOS = [tiktok1,labialMaybelline,meriendacba,ondasSinCalor]
function App() {

  return (
    <main id='inicio'>
      <header  className='flex justify-center items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10'>
        <nav className='border border-black rounded-full
      px-3 py-1
      flex flex-row items-center
      bg-neutral-200 dark:bg-grey/50
      backdrop-blur-2xl'>
          
          <div>
            <ul className='flex gap-8 text-2xl'>
            <li><a href="#inicio">Inicio </a></li>
            <li><a href="#sobremi">Sobre mi </a></li>
            <li><a href="#experiencia">UGC</a></li>
            <li><a href="#proyectos">Trabajos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section  className='w-[70%] mx-auto my-0 gap-[10rem] h-[96vh]  flex justify-center items-center'>
      <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
        <img
          src={profile_pic}
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
          
        <div className='flex flex-col items-center m-2 gap-5'>
          <p className='font-semibold text-gray-500 text-2xl pt-2'>Hola, soy</p>
          <h1 className='text-4xl font-bold'>Gabriela Zarate</h1>
          <p className='text-2xl font-semibold text-gray-400 '>Communiy Manager</p>
          
          <div className='flex gap-[1rem] justify-center '>
            <button className='bg-gray-200 font-semibold p-4 w-[8rem]  rounded-[2rem]'>Descargar CV</button>
            <button className='bg-gray-200 font-semibold p-4 w-[8rem]  rounded-[2rem]'>Contacto</button>

          </div>
        <div className='flex gap-2 justify-center'>
          <button className='p-2'><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          <button className='p-2'><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#000000" stroke-width="1.5"></path><path d="M17.5 6.51L17.51 6.49889" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          <button className='p-2'><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
        </div>
        </div>

      </section>


      <section id='sobremi' >
        <p className='text-center text-lg text-slate-500'>Vamos a conocer mas</p>
        <h1 className='text-center text-4xl'>Sobre mi</h1>
        <div className='flex flex-col h-[96vh] w-full items-center my-5'>

          <div className="w-[400px] h-[350px] rounded-[2rem] overflow-hidden">
            <img
              src={about_pic}
              alt="Foto de perfil"
              className="w-full h-full "
            />
          </div>

          <div className='flex justify-center flex-col w-[90%]'>
            <div className=' flex gap-[2rem] my-[2rem]'>
              <div className='p-[1.5rem] flex-1 border-[0.12rem] rounded-[2rem] border-gray-600 '> 
                <img src="" alt="" />
                <h3>Experiencia</h3>
                <p>2+ Anios </p>
                <p>Community Manager</p>
              </div>

              <div className='p-[1.5rem] flex-1 border-[0.12rem] rounded-[2rem] border-gray-600 '>
              <img src="" alt="" />
                <h3>Educacion</h3>
                <p>Lic. en Comunicacion Social</p>
                <p>...</p>
              </div>
            </div>

            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic, molestias corrupti quaerat nam veniam repudiandae earum quibusdam, consequuntur nihil dolor accusamus sed minima voluptatum perferendis obcaecati facilis! Dolorum inventore dolores reprehenderit pariatur magnam quasi ea eaque ut maxime nemo unde voluptatum praesentium quas, nam expedita veritatis doloribus repellendus. Impedit.</p>
            </div>
          </div>
        </div>

      </section>

      <section className='my-20'>
        <p className='text-center text-lg text-slate-500'>UGC</p>
        <h1 className='text-center text-4xl mb-12'>Contenido Generado por el Usuario</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {UGC_VIDEOS.map(video => 
            <div className='px-10 flex flex-col justify-end items-center'>
              <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                  <ReactPlayer url={video} controls width={310} height={600}/>
                </div>
              </div>
              <h2>Tiktok1</h2>
            </div>)}
          </div>        
      </section>

      <section className='my-20'>
        <p className='text-center text-lg text-slate-500'>Trabajos</p>
        <h1 className='text-center text-4xl mb-12'>Creacion de contenido y Manejo de Redes</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {UGC_VIDEOS.map(video => 
            <div className='px-10 flex flex-col justify-end items-center'>
              <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                  <ReactPlayer url={video} controls width={310} height={600}/>
                </div>
              </div>
              <h2>Tiktok1</h2>
            </div>)}
          </div>        
      </section>

      <section className='my-20'>
        <p className='text-center text-lg text-slate-500'>Get in touch</p>
        <h1 className='text-center text-4xl'>Contact me</h1>

        <div className=' flex mt-5 h-[75px] mx-auto w-[500px] items-center justify-center gap-2 border-[0.12rem] rounded-[2rem] border-gray-600'>
          <div className='flex gap-1'>
            <IoMailOutline  className = 'text-[21px] h-6 '/>
            <p><a href="">gabzm240@gmail.com</a></p>
          </div>

          <div className='flex gap-1'>
            <LiaLinkedin className = 'text-2xl'/>
            <p><a href="">Linkedin</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
