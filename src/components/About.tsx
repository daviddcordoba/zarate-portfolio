import about_pic from '../assets/fotogrupalfcc.jpg'


const About = () => {
  return (
    <>
        <p className='text-center text-lg text-gray-400'>Vamos a conocer mas</p>
        <h1 className='text-center text-5xl text-white'>Sobre mi</h1>
        <div className='flex flex-col lg:flex-row  w-[90%] gap-5 mx-auto justify-center items-center my-10 text-white'>

          <div className="w-[350px] h-[500px] rounded-[2rem] overflow-hidden">
            <img
              src={about_pic}
              alt="Foto de perfil"
              className="w-full h-full object-cover "
            />
          </div>

          <div className='flex flex-col  w-[80%] lg:w-[50%]'>
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
              <p className='text-lg'>Me encuentro finalizando la carrera de Comunicacion social con orientacion en radio, soy pasionada por las redes sociales y creacion de contenido. Busco experiencia laboral y
                  desarrollarme en campos que me
                  permitan crecer profesional,
                  creativa y personalmente.
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default About