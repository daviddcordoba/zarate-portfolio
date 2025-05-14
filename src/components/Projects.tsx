import Malvinas from '../assets/MALVINAS.mp4'
import trabajoFomo from '../assets/trabajoFOMO.jpeg'
import ElSilencio from '../assets/ElSilencio.mp4'
import Bohem from '../assets/bohem.jpeg'
import ReactPlayer from 'react-player'

const TRABAJOS = [{name: 'Pieza sonora: Representación de el silencio', data: ElSilencio,type: 'video'  ,link:'https://fzaratem24.wixsite.com/est-tica-radiof-nica'},
    {name: 'Infografía: Seminario Comunicación y salud', data: trabajoFomo,type: 'imagen', link : ''},
    {name: 'Revista Bohem: Lenguaje y prod. Gráfica', data: Bohem,type: 'imagen'  ,link:'https://issuu.com/revistabohem/docs/revistafinal_pico'},
    {name: 'Pieza sonora: Homenaje a Malvinas', data: Malvinas,type: 'video', link : '' }
  ]

const Projects = () => {
  return (
    <>
        <p className='text-center text-2xl '>Más trabajos</p>
        <h2 className='text-center text-4xl mb-12 '>Producción de contenido gráfico | Arte sonoro | Podcast</h2>

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
                {trabajo?.link?.length > 0 
                    ? <a target='_blank' className='text-xl  max-w-[305px] text-center overflow-hidden hover:underline' href={trabajo.link}>{trabajo.name}</a> 
                    : <h2 className='text-xl  max-w-[305px] text-center overflow-hidden'>{trabajo.name}</h2> 
                }
                </div>
            )}
        </div>   
    </>
  )
}

export default Projects