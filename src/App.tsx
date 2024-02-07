
import './App.css'
import profile_pic from './assets/profile_pic.jpeg'
import about_pic from './assets/fotogrupalfcc.jpg'
import tiktok1 from './assets/tiktok1.mp4'
import labialMaybelline from './assets/labialMaybelline.mp4'
import meriendacba from './assets/meriendacba.mp4'
import ondasSinCalor from './assets/ondasSinCalor.mp4'
import Malvinas from './assets/MALVINAS.mp4'
import trabajoFomo from './assets/trabajoFOMO.jpeg'
import ElSilencio from './assets/ElSilencio.mp4'
import Bohem from './assets/bohem.jpeg'
import otraPuesta from './assets/otrapuestaCM.png'
import salemVintage from './assets/salemCM.png'


import ReactPlayer from 'react-player'
import { CiLink } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const UGC_VIDEOS = [{name: 'NIC',video:tiktok1},{name: 'Maybelline',video: labialMaybelline},{name:'Merienda',video:meriendacba},{name: 'Ondas',video: ondasSinCalor}]
const TRABAJOS = [{name: 'Pieza sonora: Representacion de el silencio', data: ElSilencio,type: 'video'},{name: 'Infografia: Seminario Com. y salud', data: trabajoFomo,type: 'imagen'},{name: 'Revista Bohem: Lenguaje y prod. Grafica', data: Bohem,type: 'imagen'},{name: 'Pieza sonora: Homenaje a malvinas', data: Malvinas,type: 'video'},{name: 'Otra puesta', data: otraPuesta,type: 'imagen'},{name: 'Salem Vintage', data: salemVintage,type: 'imagen'}]

function App() {

  const email = 'gabzm240@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                console.log('¡Correo electrónico copiado al portapapeles!'); 
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };

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
      
      backdrop-blur-2xl'>
          
          <div>
            <ul className='flex gap-8 text-2xl text-white'>
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
          <p className='font-semibold text-white text-2xl pt-2'>Hola, soy</p>
          <h1 className='text-4xl font-bold'>Gabriela Zarate</h1>
          <p className='text-2xl font-semibold text-white '>Communiy Manager</p>
          
          <div className='flex gap-[1rem] justify-center '>
            <button className='bg-gray-200 font-semibold p-4 w-[8rem]  rounded-[2rem]'>Descargar CV</button>
            <button className='bg-gray-200 font-semibold p-4 w-[8rem]  rounded-[2rem]'>Contacto</button>

          </div>
        <div className='flex gap-2 justify-center'>
          <button className='p-2'><FaInstagram className='text-3xl'/></button>
          <button className='p-2'><FaTiktok className='text-2xl'/></button>
          <button className='p-2'><LiaLinkedin className = 'text-4xl'/></button>
        </div>
        </div>

      </section>


      <section id='sobremi' >
        <p className='text-center text-lg text-gray-400'>Vamos a conocer mas</p>
        <h1 className='text-center text-5xl text-white'>Sobre mi</h1>
        <div className='flex  w-[90%] gap-5 mx-auto justify-center items-center my-5 text-white'>

          <div className="w-[350px] h-[500px] rounded-[2rem] overflow-hidden">
            <img
              src={about_pic}
              alt="Foto de perfil"
              className="w-full h-full object-cover "
            />
          </div>

          <div className='flex justify-center flex-col w-[50%]'>
            <div className=' flex gap-[2rem] my-[2rem]'>
              <div className='p-[1.5rem] flex-1 border-[0.12rem] rounded-[2rem] border-white '> 
                <img src="" alt="" />
                <h3>Experiencia</h3>
                <p>+2 Años </p>
                <p>Community Manager</p>
              </div>

              <div className='p-[1.5rem] flex-1 border-[0.12rem] rounded-[2rem] border-white '>
              <img src="" alt="" />
                <h3>Educacion</h3>
                <p>Lic. en Comunicacion Social</p>
                <p>En proceso de tesis</p>
              </div>
            </div>

            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic, molestias corrupti quaerat nam veniam repudiandae earum quibusdam, consequuntur nihil dolor accusamus sed minima voluptatum perferendis obcaecati facilis! Dolorum inventore dolores reprehenderit pariatur magnam quasi ea eaque ut maxime nemo unde voluptatum praesentium quas, nam expedita veritatis doloribus repellendus. Impedit.</p>
            </div>
          </div>
        </div>

      </section>

      <section className='my-20'>
        <p className='text-center text-lg text-gray-400 '>UGC</p>
        <h1 className='text-center text-5xl mb-12 text-white'>Contenido Generado por el Usuario</h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {UGC_VIDEOS.map(video => 
            <div className='px-10 flex flex-col justify-end items-center'>
              <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                  <ReactPlayer url={video.video} controls width={310} height={600}/>
                </div>
              </div>
              <h2 className='text-xl text-white'>{video.name}</h2>
            </div>)}
          </div>        
      </section>

      <section className='my-20'>
        <p className='text-center text-2xl text-gray-400'>Mas trabajos</p>
        <h2 className='text-center text-4xl mb-12 text-white'>Produccion de contenido gráfico | Arte sonoro | Podcast</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {TRABAJOS.map(trabajo => 
            <div className='px-10 flex flex-col justify-end items-center'>
              <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                <div className={`absolute ${trabajo.type === 'video' ? 'inset-[-19.5px]': ''} h-full w-full object-cover`}>
                  {trabajo.type === 'video' 
                  ?<ReactPlayer url={trabajo.data} controls width={310} height={600}/>
                  : <img className='w-[310px] h-[600px]' src={trabajo.data} />}
                  
                </div>
              </div>
              <div className='flex gap-2 items-center'><h2 className='text-xl text-white '>{trabajo.name} <a href="https://issuu.com/revistabohem/docs/revistafinal_pico"><CiLink className='text-2xl text-white' /></a></h2></div>
              
            </div>)}
          </div>        
      </section>

      <section className='my-20'>
        <p className='text-center text-lg text-gray-400'>Get in touch</p>
        <h1 className='text-center text-5xl text-white'>Contact me</h1>

        <div className=' flex mt-5 h-[75px] mx-auto w-[500px] text-white items-center justify-center gap-2 border-[0.12rem] rounded-[2rem] border-white'>
        <div className='flex gap-1'>
            <IoMailOutline className='text-[21px] h-6' />
            <p><a href="#" onClick={copyToClipboard}>{email}</a></p>
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
