import ReactPlayer from 'react-player'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import db from '../../firebase_config'

interface TRABAJO {
    id:string
    name?:string;
    data?:string;
    type?:string;
    link?:string;
    section?:string;
}

const Projects = () => {
    const [projectsVideos,setProjectsVideos] = useState<TRABAJO[]>([])

    useEffect(() => {
        
        const q = query(collection(db, "assets"), where("section", "==", "projects"));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                setProjectsVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                
            },
            (err) => {
                console.log("Error al cargar los datos: " + err.message);
                
            }
        );
        return () => unsubscribe();
    }, []);
  return (
    <>
        <p className='text-center text-2xl text-gray-400'>Más trabajos</p>
        <h2 className='text-center text-4xl mb-12 text-white'>Producción de contenido gráfico | Arte sonoro | Podcast</h2>

        <div className='flex flex-wrap justify-center gap-8'>
            {projectsVideos.map((trabajo,id) => 
                <div key={id} className='px-10 flex flex-col items-center'>
                    <div className=' relative h-[612px] w-[305px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                        <div className={`absolute ${trabajo.type === 'video' ? 'inset-[-19.5px]': ''} h-full w-full object-cover`}>
                        {trabajo.type === 'video' 
                        ?<ReactPlayer url={trabajo.data} controls width={310} height={600}/>
                        : <img className='w-[310px] h-[600px]' src={trabajo.data} />}
                        
                        </div>
                    </div>
                {trabajo.link && trabajo.link.length > 0
                    ? <a target='_blank' className='text-xl text-white max-w-[305px] text-center overflow-hidden hover:underline' href={trabajo.link}>{trabajo.name}</a> 
                    : <h2 className='text-xl text-white max-w-[305px] text-center overflow-hidden'>{trabajo.name}</h2> 
                }
                </div>
            )}
        </div>   
    </>
  )
}

export default Projects