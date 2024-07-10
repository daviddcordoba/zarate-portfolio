import { LiaLinkedin } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import resume from '../assets/CV-ZarateG.pdf'
import profile_pic from '../assets/profile_pic.jpeg'

const Presentation = () => {
  return (
    <>
    <div className="w-[500px] h-[500px] rounded-full overflow-hidden hidden md:block">
          <img
            src={profile_pic}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>
          
        <div className='flex flex-col m-2 gap-5'>
            <p className='font-semibold text-white text-4xl pt-2'>Hola, soy <span className='text-black text-5xl font-[800] '>Gabriela Zárate</span></p>
            <p className='text-2xl font-semibold text-white '> Lic. en Com. Social | Creadora de Contenido | Community Manager</p>
            
            <div className='flex gap-[1rem] justify-center '>
              <button  className='bg-gray-200 font-semibold p-3 w-[8rem]  rounded-[2rem]'><a href={resume} download='zarate-gabrielaCV'>Descargar CV</a></button>
              

            </div>
            <div className='flex gap-2 justify-center items-center '>
              <a href='https://www.instagram.com/gabizarate._/?hl=es-la'  target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><FaInstagram className='text-3xl'/></a>
              <a href='https://www.tiktok.com/@gabizarate' target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><FaTiktok className='text-2xl'/></a>
              <a href='https://www.linkedin.com/in/gabriela-zarate-35748328b/' target='_blank' className='p-2 hover:text-gray-400 transition duration-500 ease-in-out'><LiaLinkedin className = 'text-4xl'/></a>
            </div>
        </div>
    </>
  )
}

export default Presentation