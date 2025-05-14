import about_pic from '../assets/fotogrupalfcc.jpg';
import { IoSchoolSharp } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

import { GrUserManager } from "react-icons/gr";

 const education = [
    {
      degree: "Licenciatura en Comunicación Social",
      institution: "Universidad Nacional",
      year: "2020",
    },
    {
      degree: "Certificación en Marketing Digital",
      institution: "Google Digital Garage",
      year: "2021",
    },
  ]

  const experience = [
    {
      degree: "Coordinadora del equipo de Comunicacion",
      institution: "Feria Solidaria Trelew",
      year: "Actual",
    },
    {
      degree: "Certificación en Marketing Digital",
      institution: "Google Digital Garage",
      year: "2021",
    },
  ]

const About = () => {
  return (
    <>
      <p className='text-center text-lg text-gray-400'>Vamos a conocer más</p>
      <h1 className='text-center text-5xl text-white'>Sobre mí</h1>

      <div className='flex flex-col lg:flex-row w-[90%] gap-5 mx-auto justify-center items-center my-10 text-white'>
        <div className='w-[350px] h-[500px] rounded-[2rem] overflow-hidden'>
          <img
            src={about_pic}
            alt='Foto de perfil'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex flex-col gap-6 w-[80%] lg:w-[50%]'>
        
          <div>
            <p className='text-lg'>
              Me encuentro finalizando la carrera de Comunicación social con orientación en radio, soy apasionada por las redes sociales y creación de contenido. Busco experiencia laboral y desarrollarme en campos que me permitan crecer profesional, creativa y personalmente.
            </p>
          </div>

          <div>
                <h3 className="text-xl font-bold  mb-4">Educación</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-[#8e5a9a] pl-4">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="">
                        {edu.institution} | {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
          </div>

          <div>
                <h3 className="text-xl font-bold  mb-4">Experiencia</h3>
                <div className="space-y-4">
                  {experience.map((edu, index) => (
                    <div key={index} className="border-l-4 border-[#8e5a9a] pl-4">
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="">
                        {edu.institution} | {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
          </div>
      </div>
          
        </div>

        {/* <div className='flex flex-col gap-5 p-5 w-[90%] mx-auto'>
        <div className='flex items-center  p-4 border-[0.12rem] rounded-[2rem] border-white'>
          <div className='text-2xl mr-4 bg-purple-800 rounded-full w-10 h-10 flex items-center justify-center'>
            <IoSchoolSharp />
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-bold text-white mb-2'>Educación</h3>
            <p className='text-base text-white'>
              Lic. en Comunicación Social (Finalizando carrera)
            </p>
          </div>
        </div>
        <div className='p-[1.5rem] flex-3 border-[0.12rem] rounded-[2rem] border-white'>
          <h3 className='text-xl font-bold text-white mb-2'>Certificaciones Adicionales</h3>
          <div className='flex items-center mb-2'>
            <span className='text-2xl mr-2'><BiMessageRoundedDetail /></span>
            <p className='text-base text-white'>Community Manager - CoderHouse</p>
          </div>
          <div className='flex items-center'>
            <span className='text-2xl mr-2'><GrUserManager /></span>
            <p className='text-base text-white'>Product Manager - CoderHouse</p>
          </div>
        </div>
      </div> */}

      

    
    </>
  );
};

export default About;