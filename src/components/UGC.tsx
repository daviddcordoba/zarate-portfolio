import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import db from '../../firebase_config.ts'
import { collection, onSnapshot, query, where } from "firebase/firestore";


interface UGC_VIDEO {
  id:string;
  video?:string; 
  name?:string
}

const UGC = () => {
    const [visibleVideos, setVisibleVideos] = useState(6); // Número inicial de videos visibles
    const [ugcVideos, setUgcVideos] = useState<UGC_VIDEO[]>([])

    const loadMoreVideos = () => {
        setVisibleVideos(prev => prev + 3); // Aumentar el número de videos visibles en 4
    };
    const showFewerVideos = () => {
        setVisibleVideos(prev => Math.max(prev - 3, 6)); // Reducir el número de videos visibles en 4, mínimo 4
    };
    useEffect(() => {
        
      const q = query(collection(db, "assets"), where("section", "==", "ugc"));
      const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            setUgcVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
              
          },
          (err) => {
              console.log("Error al cargar los datos: " + err.message);
              
          }
      );
      return () => unsubscribe();
  }, []);
    
  return (
    <>
        <p className='text-center text-lg text-gray-400 '>UGC</p>
        <h1 className='text-center text-5xl mb-12 text-white'>Contenido Generado por el Usuario</h1>

        <div className='flex flex-wrap justify-center gap-8'>
            {ugcVideos.slice(0, visibleVideos).map((video, index) => (
                <div key={index} className='px-10 flex flex-col items-center'>
                    <div className='relative h-[612px] w-[306px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                        <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                            <ReactPlayer url={video.video} controls width={310} height={600} />
                        </div>
                    </div>
                    <h2 className='text-xl text-white max-w-[305px] text-center overflow-hidden'>{video.name}</h2>
                </div>
            ))}
        </div>  

        {visibleVideos < ugcVideos.length && (
            <button 
            onClick={loadMoreVideos} 
            className='mt-8 px-6 py-3 mx-auto w-[25%] bg-gray-200 text-black rounded-full'
            >
            <span className='text-lg'>Ver más</span>
            </button>
        )}  
        {visibleVideos > 6 && (
          <button 
            onClick={showFewerVideos} 
            className=' mt-4 px-6 py-3 mx-auto w-[25%] bg-gray-200 text-black  rounded-full'
          >
            <span className='text-lg'>Ver menos</span>
          </button>
        )}
    </>
  )
}

export default UGC