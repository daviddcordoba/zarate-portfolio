import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import db from "../../firebase_config";

interface CM_VIDEOS_INTERFACE {
  id:string
  name?:string
  data?:string
  type?:string
  link?:string
}

const CommunityManager  = () => {
    const [visibleVideos, setVisibleVideos] = useState(6); // Número inicial de videos visibles
    const [cmVideos,setCmVideos] = useState<CM_VIDEOS_INTERFACE[]>([])
    const loadMoreVideos = () => {
        setVisibleVideos(prev => prev + 3); // Aumentar el número de videos visibles en 4
    };
    const showFewerVideos = () => {
        setVisibleVideos(prev => Math.max(prev - 3, 6)); // Reducir el número de videos visibles en 4, mínimo 4
    };

    useEffect(() => {
        
      const q = query(collection(db, "assets"), where("section", "==", "cm"));
      const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            setCmVideos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
              
          },
          (err) => {
              console.log("Error al cargar los datos: " + err.message);
              
          }
      );
      return () => unsubscribe();
  }, []);
  return (
    <>
        <h1 className='text-center text-5xl mb-12 '>Community Manager</h1>

        <div className='flex flex-wrap justify-center gap-8'>
            {cmVideos.slice(0, visibleVideos).map((video, index) => (
                <div key={index} className='px-10 flex flex-col items-center'>
                    <div className='relative h-[612px] w-[306px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                    <div className={`absolute ${video.type === 'video' ? 'inset-[-19.5px]': ''} h-full w-full object-cover`}>
                        {video.type === 'video' 
                        ?<ReactPlayer url={video.data} controls width={310} height={600}/>
                        : <img className='w-[310px] h-[600px]' src={video.data} />}
                        
                        </div>
                    </div>
                    {video.link && video.link.length > 0
                    ? <a target='_blank' className='text-xl text-black max-w-[305px] text-center overflow-hidden hover:underline font-semibold' href={video.link}>{video.name}</a> 
                    : <h2 className='text-xl text-black max-w-[305px] font-semibold text-center overflow-hidden'>{video.name}</h2> 
                }
                </div>
            ))}
        </div>  

        {visibleVideos < cmVideos.length && (
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

export default CommunityManager 