import { useState } from "react";
import ReactPlayer from 'react-player'
import otraPuesta from '../assets/otrapuestaCM.png'
import salemVintage from '../assets/salemCM.png'
import unamordeco1 from '../assets/unamordeco1.mp4'
import unamordeco2 from '../assets/unamordeco2.mp4'
import feriaSolidaria from '../assets/feriaSolidaria.mp4'
import feriasolidariapost from '../assets/feriasolidariapost.jpg'
import franzmakeupinstagramfeed from '../assets/franzmakeupinstagramfeed.jpg'

const COMMUNITY_VIDEOS = [
    {name:'Feria Solidaria Trelew', data:feriaSolidaria,type:'video', link:'https://www.instagram.com/feriasolidariatrelew/?hl=es-la'},
    {name: 'Feria Solidaria Trelew', data: feriasolidariapost,type: 'imagen ', link : 'https://www.facebook.com/feriasolidariatrelew'},
    {name: 'Franzmakeup', data: franzmakeupinstagramfeed,type: 'imagen ', link : 'https://www.instagram.com/franzmakeup_/?hl=es-la'},
    
    {name: 'Otra puesta', data: otraPuesta,type: 'imagen ', link : ''},
    {name: 'Salem Vintage', data: salemVintage,type: 'imagen ', link : ''},
    {name:'Unamor Deco', data:unamordeco1,type:'video',link:''},
    {name:'Unamor Deco', data:unamordeco2,type:'video',link:''},
]

const CommunityManager  = () => {
    const [visibleVideos, setVisibleVideos] = useState(6); // Número inicial de videos visibles

    const loadMoreVideos = () => {
        setVisibleVideos(prev => prev + 3); // Aumentar el número de videos visibles en 4
    };
    const showFewerVideos = () => {
        setVisibleVideos(prev => Math.max(prev - 3, 6)); // Reducir el número de videos visibles en 4, mínimo 4
    };
  return (
    <>
        <h1 className='text-center text-5xl mb-12 text-white'>Community Manager</h1>

        <div className='flex flex-wrap justify-center gap-8'>
            {COMMUNITY_VIDEOS.slice(0, visibleVideos).map((video, index) => (
                <div key={index} className='px-10 flex flex-col items-center'>
                    <div className='relative h-[612px] w-[306px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black'>
                    <div className={`absolute ${video.type === 'video' ? 'inset-[-19.5px]': ''} h-full w-full object-cover`}>
                        {video.type === 'video' 
                        ?<ReactPlayer url={video.data} controls width={310} height={600}/>
                        : <img className='w-[310px] h-[600px]' src={video.data} />}
                        
                        </div>
                    </div>
                    {video?.link?.length > 0 
                    ? <a target='_blank' className='text-xl text-white max-w-[305px] text-center overflow-hidden hover:underline' href={video.link}>{video.name}</a> 
                    : <h2 className='text-xl text-white max-w-[305px] text-center overflow-hidden'>{video.name}</h2> 
                }
                </div>
            ))}
        </div>  

        {visibleVideos < COMMUNITY_VIDEOS.length && (
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