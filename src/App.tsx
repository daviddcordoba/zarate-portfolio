import { useState } from 'react'
import './App.css'
import profile_pic from './assets/profile_pic.jpeg'
import about_pic from './assets/356223726_832998341495275_5659792196220834236_n.jpg'
function App() {

  return (
    <main>
      <nav className='flex justify-around items-center h-[17vh]'>
        <div className='text-2xl'>Gabriela Zarate</div>
        <div>
          <ul className='flex gap-8 text-2xl'>
          <li><a href="#sobremi" target="_blank" rel="noopener noreferrer">Sobre mi </a></li>
          <li><a href="#experiencia" target="_blank" rel="noopener noreferrer">Experiencia</a></li>
          <li><a href="#proyectos" target="_blank" rel="noopener noreferrer">Proyectos</a></li>
          <li><a href="#contacto" target="_blank" rel="noopener noreferrer">Contacto</a></li>
          </ul>
        </div>
      </nav>


      <section className=' w-[70%] mx-auto my-0 gap-[10rem] h-[96vh]  flex justify-center items-center'>
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


      <section className='bg-red-200'>
        <p>Vamos a conocer mas</p>
        <h1>Sobre mi</h1>
        <div className='flex flex-col h-[96vh] w-full items-center'>

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

      
    </main>
  )
}

export default App
