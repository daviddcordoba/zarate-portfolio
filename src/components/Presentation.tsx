import { LiaLinkedin } from "react-icons/lia"
import { FaInstagram } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import resume from "../assets/gabrielazarateCv.pdf"
import profile_pic from "../assets/profile_pic.jpeg"

const Presentation = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-4  rounded-lg  mx-auto">
      {/* Imagen de perfil */}
      <div className="relative w-64 h-64 overflow-hidden rounded-full border-4 border-white/20">
        <img src={profile_pic || "/placeholder.svg"} alt="Foto de perfil" className="w-full h-full object-cover" />
      </div>

      {/* Información y botones */}
      <div className="flex flex-col items-center  gap-6">
        <div className="text-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="font-serif">Gabriela Zárate</span>
          </h1>
          <p className="text-xl md:text-2xl">Lic. en Com. Social | Creadora de Contenido | Community Manager</p>
        </div>

        

        {/* Redes sociales */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.instagram.com/gabizarate._/?hl=es-la"
            target="_blank"
            className="text-warm-accent hover:text-warm-accent/80 transition duration-300"
            rel="noreferrer"
          >
            <FaInstagram className="text-3xl" />
          </a>
          <a
            href="https://www.tiktok.com/@gabizarate"
            target="_blank"
            className="text-warm-accent hover:text-warm-accent/80 transition duration-300"
            rel="noreferrer"
          >
            <FaTiktok className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriela-zarate-35748328b/"
            target="_blank"
            className="text-warm-accent hover:text-warm-accent/80 transition duration-300"
            rel="noreferrer"
          >
            <LiaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Presentation
