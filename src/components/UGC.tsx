import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import db from '../../firebase_config.ts'
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";


interface UGC_VIDEO {
  id:string;
  video?:string; 
  name?:string
  rank?:number
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
        
      const q = query(
        collection(db, "assets"), 
        where("section", "==", "ugc"),
        orderBy("rank","desc")
      );

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
        <p className="inline-block mx-auto text-center font-bold  px-3 py-1">
          UGC
        </p>


        <h1 className='text-center text-5xl mb-12 '>Contenido Generado por el Usuario</h1>

        <div className='flex flex-wrap justify-center gap-8'>
            {ugcVideos.slice(0, visibleVideos).map((video) => (
                <div key={video.id} className='px-10 flex flex-col items-center'>
                    <div className='relative h-[612px] w-[306px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                        <div className='absolute inset-[-19.5px] h-full w-full object-cover'>
                            <ReactPlayer url={video.video} controls width={310} height={600} />
                        </div>
                    </div>
                    <h2 className='text-xl font-semibold  max-w-[305px] text-center overflow-hidden'>{video.name}</h2>
                </div>
            ))}
        </div>  

        {visibleVideos < ugcVideos.length && (
          <button 
              onClick={loadMoreVideos} 
              className='mt-8 px-6 py-3 mx-auto w-[25%] '
            >
            <span className='text-lg font-semibold   hover:underline transition duration-200'>Ver más</span>
          </button>
        )}  
        {visibleVideos > 6 && (
          <button 
            onClick={showFewerVideos} 
            className=' mt-4 px-6 py-3 mx-auto w-[25%] '
          >
            <span className='text-lg font-semibold hover:underline transition duration-200'>Ver menos</span>
          </button>
        )}
    </>
  )
}

export default UGC