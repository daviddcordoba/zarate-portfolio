import { useState } from "react";
import ReactPlayer from 'react-player'
import pedidosYa from '../assets/pedidosYa.mp4'
import firstLaser from '../assets/firstLaser.mp4'
import angelaCafe from '../assets/angelaCafe.mp4'
import serum from '../assets/serum.mp4'
import dove from '../assets/dove.mp4'
import doveHidratacion from '../assets/Dove Hidratación.mp4'
import geldelimpiezaloreal from '../assets/geldelimpiezaloreal.mp4'
import tiktok1 from '../assets/tiktok1.mp4'
import labialMaybelline from '../assets/labialMaybelline.mp4'
import meriendacba from '../assets/meriendacba.mp4'
import ondasSinCalor from '../assets/ondasSinCalor.mp4'

const UGC_VIDEOS = [{name:'Loreal',video:geldelimpiezaloreal},{name:'Dove',video:doveHidratacion},{name: 'Maybelline',video: labialMaybelline},{name:'Dove',video:dove},{name:'Cepage',video:serum},{name: 'NIC',video:tiktok1},{name:'PinkCafe',video:meriendacba},{name: 'NIC',video: ondasSinCalor},{name: 'PedidosYa',video: pedidosYa},{name: 'FirstLaser',video: firstLaser},{name: 'Angela Cafe',video: angelaCafe}]

const UGC = () => {
    const [visibleVideos, setVisibleVideos] = useState(6); // Número inicial de videos visibles

    const loadMoreVideos = () => {
        setVisibleVideos(prev => prev + 3); // Aumentar el número de videos visibles en 4
    };
    const showFewerVideos = () => {
        setVisibleVideos(prev => Math.max(prev - 3, 6)); // Reducir el número de videos visibles en 4, mínimo 4
    };
  return (
    <>
        <p className='text-center text-lg text-gray-400 '>UGC</p>
        <h1 className='text-center text-5xl mb-12 text-white'>Contenido Generado por el Usuario</h1>

        <div className='flex flex-wrap justify-center gap-8'>
            {UGC_VIDEOS.slice(0, visibleVideos).map((video, index) => (
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

        {visibleVideos < UGC_VIDEOS.length && (
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