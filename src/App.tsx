
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
import resume from './assets/CV-ZarateG.pdf'
import { FaWhatsapp } from "react-icons/fa";  
import pedidosYa from './assets/pedidosYa.mp4'
import firstLaser from './assets/firstLaser.mp4'
import angelaCafe from './assets/angelaCafe.mp4'
import serum from './assets/serum.mp4'
import dove from './assets/dove.mp4'
import doveHidratacion from './assets/Dove Hidratación.mp4'
import geldelimpiezaloreal from './assets/geldelimpiezaloreal.mp4'


import ReactPlayer from 'react-player'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { useState } from 'react'/* 
import { ServiceCard } from './components/ServiceCard' */
export interface Service {
  title: string;
  price: number;
  features: string[];
}

const UGC_VIDEOS = [{name:'Loreal',video:geldelimpiezaloreal},{name:'Dove',video:doveHidratacion},{name: 'Maybelline',video: labialMaybelline},{name:'Dove',video:dove},{name:'Cepage',video:serum},{name: 'NIC',video:tiktok1},{name:'PinkCafe',video:meriendacba},{name: 'NIC',video: ondasSinCalor},{name: 'PedidosYa',video: pedidosYa},{name: 'FirstLaser',video: firstLaser},{name: 'Angela Cafe',video: angelaCafe}]




const TRABAJOS = [{name: 'Pieza sonora: Representacion de el silencio', data: ElSilencio,type: 'video'  ,link:'https://fzaratem24.wixsite.com/est-tica-radiof-nica'},
                  {name: 'Infografia: Seminario Comunicacion y salud', data: trabajoFomo,type: 'imagen', link : ''},
                  {name: 'Revista Bohem: Lenguaje y prod. Grafica', data: Bohem,type: 'imagen'  ,link:'https://issuu.com/revistabohem/docs/revistafinal_pico'},
                  {name: 'Pieza sonora: Homenaje a malvinas', data: Malvinas,type: 'video', link : '' },
                  {name: 'Otra puesta', data: otraPuesta,type: 'imagen ', link : ''},
                  {name: 'Salem Vintage', data: salemVintage,type: 'imagen ', link : ''}
                ]

/* const services : Service[]= [
                  {
                    title: 'Básico',
                    price: 9.99,
                    features: ['1 pantalla', 'Calidad SD', 'Acceso ilimitado'],
                  },
                  {
                    title: 'Estándar',
                    price: 13.99,
                    features: ['2 pantallas', 'Calidad HD', 'Acceso ilimitado'],
                  },
                  {
                    title: 'Premium',
                    price: 17.99,
                    features: ['4 pantallas', 'Calidad 4K', 'Acceso ilimitado'],
                  },
                ]; */

function App() {

  const email = 'gabzm240@gmail.com';

  const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(!copied);
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };

  return (
    <main id='inicio' translate='no'>

      <header  className='flex justify-center items-center mx-auto py-5 sticky top-0 w-full xl:w-[1120px] z-10'>
        <nav className='border border-black rounded-full px-3 py-1 flex flex-row items-center backdrop-blur-2xl'> 
          <div>
            <ul className='flex gap-5 lg:gap-8 text-2xl text-white'>
            <li><a href="#inicio">Inicio </a></li>
            <li><a href="#sobremi">Sobre mi </a></li>
            <li><a href="#ugc">UGC</a></li>
            <li><a href="#trabajos">Trabajos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section  className='w-[85%] mx-auto my-0 gap-8 lg:gap-[10rem] h-[96vh] flex items-center'>
      <div className="w-[500px] h-[500px] rounded-full overflow-hidden">
        <img
          src={profile_pic}
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>
          
        <div className='flex flex-col m-2 gap-5'>
          <p className='font-semibold text-white text-4xl pt-2'>Hola, soy <span className='text-black text-5xl font-bold'>Gabriela Zarate</span></p>
          <p className='text-2xl font-semibold text-white '> Lic. en Com. Social | Creadora de Contenido | Community Manager</p>
          
          <div className='flex gap-[1rem] justify-center '>
            <button  className='bg-gray-200 font-semibold p-3 w-[8rem]  rounded-[2rem]'><a href={resume} download='zarate-gabrielaCV'>Descargar CV</a></button>
            

          </div>
        <div className='flex gap-2 justify-center items-center'>
          <a href='https://www.instagram.com/gabizarate._/?hl=es-la'  target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><FaInstagram className='text-3xl'/></a>
          <a href='https://www.tiktok.com/@gabizarate' target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><FaTiktok className='text-2xl'/></a>
          <a href='https://www.linkedin.com/in/gabriela-zarate-35748328b/' target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><LiaLinkedin className = 'text-4xl'/></a>
        </div>
        </div>

      </section>


      <section id='sobremi' >
        <p className='text-center text-lg text-gray-400'>Vamos a conocer mas</p>
        <h1 className='text-center text-5xl text-white'>Sobre mi</h1>
        <div className='flex flex-col lg:flex-row  w-[90%] gap-5 mx-auto justify-center items-center my-5 text-white'>

          <div className="w-[350px] h-[500px] rounded-[2rem] overflow-hidden">
            <img
              src={about_pic}
              alt="Foto de perfil"
              className="w-full h-full object-cover "
            />
          </div>

          <div className='flex flex-col  w-[70%] lg:w-[50%]'>
            <div className=' flex justify-center gap-[2rem] my-[2rem]'>
              <div className='p-[1.5rem] flex-3 border-[0.12rem] rounded-[2rem] border-white '> 
                <img src="" alt="" />
                <h3 className='text-xl'>Otros estudios</h3>
                <p>Community Manager - CoderHouse</p>
                <p>Product Manager - CoderHouse</p>

              </div>

              <div className='p-[1.5rem] flex-1 border-[0.12rem] rounded-[2rem] border-white '>
              <img src="" alt="" />
                <h3 className='text-xl'>Educacion</h3>
                <p>Lic. en Comunicacion Social</p>
                <p>(En proceso de tesis)</p>
              </div>
            </div>

            <div >
              <p>Me encuentro finalizando la carrera de Comunicacion social con orientacion en radio, soy pasionada por las redes sociales y creacion de contenido. Busco experiencia laboral y
                  desarrollarme en campos que me
                  permitan crecer profesional,
                  creativa y personalmente.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className='my-20' id='ugc'>
        <p className='text-center text-lg text-gray-400 '>UGC</p>
        <h1 className='text-center text-5xl mb-12 text-white'>Contenido Generado por el Usuario</h1>

        <div className='flex flex-wrap justify-center gap-8'>
          {UGC_VIDEOS.map((video, index) => (
            <div key={index} className='px-10 flex flex-col items-center'>
              <div className='relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                  <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                      <ReactPlayer url={video.video} controls width={310} height={600} />
                  </div>
              </div>
              <h2  className='text-xl text-white max-w-[305px] text-center  overflow-hidden'>{video.name}</h2>
            </div>
        ))}
        </div>       
      </section>

      <section className='my-20' id='trabajos'>
        <p className='text-center text-2xl text-gray-400'>Mas trabajos</p>
        <h2 className='text-center text-4xl mb-12 text-white'>Produccion de contenido gráfico | Arte sonoro | Podcast</h2>

          <div className='flex flex-wrap justify-center gap-8'>
          {TRABAJOS.map((trabajo,id) => 
            <div key={id} className='px-10 flex flex-col items-center'>
              <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                <div className={`absolute ${trabajo.type === 'video' ? 'inset-[-19.5px]': ''} h-full w-full object-cover`}>
                  {trabajo.type === 'video' 
                  ?<ReactPlayer url={trabajo.data} controls width={310} height={600}/>
                  : <img className='w-[310px] h-[600px]' src={trabajo.data} />}
                  
                </div>
              </div>
              {trabajo?.link?.length > 0 ? <a target='_blank' className='text-xl text-white max-w-[305px] text-center overflow-hidden hover:underline' href={trabajo.link}>{trabajo.name}</a> : <h2 className='text-xl text-white max-w-[305px] text-center overflow-hidden'>{trabajo.name}</h2> }
              
              
            </div>)}
          </div>        
      </section>

      {/* <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Planes</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service= {service}
          />
        ))}
      </div>
    </div> */}

      <section className='my-20' id='contacto'>
        <p className='text-center text-lg text-gray-400'>Colaboremos</p>
        <h1 className='text-center text-5xl text-white'>Contactate conmigo</h1>

        <div className=' flex flex-col w-[400px] h-[180px] gap-4 lg:flex-row  mt-5  mx-auto lg:w-[600px] lg:h-[100px]  text-white items-center justify-center lg:gap-3 border-[0.12rem] rounded-[2rem] border-white'>
        
            
            <button className='flex gap-1' onClick={copyToClipboard}>
              {copied 
                ? <div className='flex gap-1.5'><MdOutlineMarkEmailRead className='text-[24px] '/>Email Copiado!</div>
                : <div className='flex gap-1.5'><IoMailOutline className='text-[24px] '/> {email}</div> }
              
            </button>
        

        <a href="https://www.linkedin.com/in/gabriela-zarate-35748328b/" className='flex gap-1 items-center' target='_blank'>
          <LiaLinkedin className='text-3xl' />
          Linkedin
        </a>

        <a href="https://api.whatsapp.com/send?phone=2804806333" className='flex gap-1' target='_blank'>
          <FaWhatsapp className='text-2xl' />
          WhatsApp
        </a>

        <a href="https://linktr.ee/gabizarate" className='flex gap-1' target='_blank'>
          <MdOutlineLink className='text-2xl' />
          Linktree
        </a>
        </div>
      </section>
    </main>
  )
}

export default App
