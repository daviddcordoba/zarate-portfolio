const education = [
    {
      degree: "Licenciatura en Comunicación Social",
      institution: "Universidad Nacional de Córdoba ",
      year: "Actual",
    },
    {
      degree: "Certificación en Marketing Digital",
      institution: "CoderHouse",
      year: "",
    }
    ,
    {
      degree: "Certificación en Community Manager",
      institution: "CoderHouse",
      year: "",
    },
  ]
  
const experience = [
    {
      degree: "Coordinadora del equipo de Comunicación",
      institution: "Feria Solidaria Trelew",
      year: "Actual",

    },
    {
      degree: "Creadora de contenido",
      institution: "L'Oréal Paris Argentina",
      year: "Actual",

    },
  ]

const About = () => {
  return (
    <>
   
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 ">Sobre mí</h1>

        <div className="grid grid-cols-1  gap-8 ">
          
          {/* Columna de información */}
          <div className="md:col-span-8 space-y-8">
            <div className=" p-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed font-semibold">
                  Me encuentro finalizando la carrera de Comunicación social con orientación en radio, soy apasionada
                  por las redes sociales y creación de contenido. Busco experiencia laboral y desarrollarme en campos
                  que me permitan crecer profesional, creativa y personalmente.
                </p>

                
              </div>
            </div>

            {/* Educación */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Educación
              </h2>

              <div className="space-y-4">
                {education.map((e,key)=>(
                  <div key={key} className="bg-[#F8F0FE] rounded-lg shadow-md border  p-6">
                  <div className="border-l-4 border-[#9637e6] pl-4">
                    <h3 className="font-bold text-xl">{e.degree}</h3>
                    <p className=" text-gray-600 font-semibold">{e.institution} {e.year && `| ${e.year}`}</p>
                  </div>
                </div>
                ))}
              </div>
              
            </div>

            {/* Experiencia */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Experiencia
              </h2>

              <div className="space-y-4">

                {experience.map((e,key)=>(
                  <div key={key} className="bg-[#F8F0FE] rounded-lg shadow-md border b p-6">
                    <div className="border-l-4 border-[#9637e6] pl-4">
                      <h3 className="font-bold text-xl">{e.degree}</h3>
                      <p className="text-gray-600 font-semibold">{e.institution} | {e.year}</p>
                      
                    </div>
                  </div>
                ))}
              </div>              
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default About;