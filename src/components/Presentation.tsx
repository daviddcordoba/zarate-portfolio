import { LiaLinkedin } from "react-icons/lia"
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
//import resume from "../assets/gabrielazarateCv.pdf"

const Presentation = () => {
  return (
    <div className="flex flex-col  gap-10  rounded-lg  container mx-auto p-2 ">
      {/* Imagen de perfil */}
      <div className="relative w-[375px] h-[375px] overflow-hidden rounded-full border-4 border-white mx-auto">
        <img 
          src={"https://res.cloudinary.com/drz6ltx2z/image/upload/v1746661745/videos/bt3wcuhcpxmvwzrpoqdu.jpg"} 
          alt="Foto de perfil" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información y botones */}
      <div className="flex flex-col items-center  gap-6">
        <div className="text-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-serif text-[#120222]">Gabriela Zárate</span>
          </h1>
          <p className="text-xl md:text-2xl my-4">Lic. en Com. Social | Creadora de Contenido | Community Manager</p>
          <div className="flex flex-wrap gap-2 pt-2 justify-center">
                  <span className="px-3 py-1 rounded-full text-base font-semibold bg-[#d9b6fc] text-[#120222]">
                    Comunicación
                  </span>
                  <span className="px-3 py-1 rounded-full text-base font-semibold bg-[#d9b6fc] text-[#120222]">
                    Redes Sociales
                  </span>
                  <span className="px-3 py-1 rounded-full text-base font-semibold bg-[#d9b6fc] text-[#120222]">
                    Creación de Contenido
                  </span>
                  <span className="px-3 py-1 rounded-full text-base font-semibold bg-[#d9b6fc] text-[#120222]">Radio</span>
                  <span className="px-3 py-1 rounded-full text-base font-semibold bg-[#d9b6fc] text-[#120222]">
                    Marketing Digital
                  </span>
                </div>
        </div>

        

        {/* Redes sociales */}
        <div className="flex gap-4 mt-2 items-center">
          <a
            href="https://www.instagram.com/gabizarate._/?hl=es-la"
            target="_blank"
            className="text-[#120222] hover:text-[#120222]/80 transition duration-300"
            rel="noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.tiktok.com/@gabizarate"
            target="_blank"
            className="text-[#120222] hover:text-[#120222]/80 transition duration-300"
            rel="noreferrer"
          >
            <FaTiktok className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriela-zarate-35748328b/"
            target="_blank"
            className="text-[#120222] hover:text-[#120222]/80 transition duration-300"
            rel="noreferrer"
          >
            <LiaLinkedin className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Presentation
