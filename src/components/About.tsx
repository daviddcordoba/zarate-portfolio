
const About = () => {
  return (
    <>
        <p className='text-center text-lg text-gray-400'>Vamos a conocer más</p>
        <h1 className='text-center text-5xl text-white'>Sobre mí</h1>
        <div className='flex flex-col lg:flex-row  w-[90%] gap-5 mx-auto justify-center items-center my-10 text-white'>

          <div className="w-[350px] h-[500px] rounded-[2rem] overflow-hidden">
            <img
              src='https://res.cloudinary.com/drz6ltx2z/image/upload/f_auto,q_auto/v1/videos/wfsfrej69rgymcr8rjpd'
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
                  <h3 className='text-xl'>Educación</h3>
                <p>Lic. en Comunicación Social</p>
                <p>(Finalizando carrera)</p>
              </div>
            </div>

            <div >
              <p className='text-lg'>Me encuentro finalizando la carrera de Comunicación social con orientación en radio, soy apasionada por las redes sociales y creación de contenido. Busco experiencia laboral y
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