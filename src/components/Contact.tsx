import { useState } from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineLink } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
    const email = 'gabzm240@gmail.com';
  
  const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(!copied);
            })
            .then(()=>{
              setTimeout(() => {
                
                setCopied(copied)
              }, 2000);
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };
  return (
    <section className='flex flex-col gap-4 '>
        <p className="inline-block mx-auto text-center font-bold   px-3 py-1 ">
          Colaboremos
        </p>
        <h2 className='text-center text-5xl '>Contactate conmigo</h2>

        <div className=' flex flex-col w-[400px] h-[180px] gap-4 lg:flex-row my-5   mx-auto lg:w-[600px] lg:h-[100px] items-center justify-center lg:gap-3'>
            
        

        <a href="https://www.linkedin.com/in/gabriela-zarate-35748328b/" className='flex gap-1 items-center text-[#120222] hover:text-[#120222]/80 transition duration-300' target='_blank'>
          <LiaLinkedin className='text-4xl' />

          <span className='text-base font-semibold ' >Linkedin</span>
        </a>

        

        <a href="https://linktr.ee/gabizarate" className='flex gap-1 text-[#120222] hover:text-[#120222]/80 transition duration-300 items-center' target='_blank'>
          <MdOutlineLink className='text-3xl' />
          <span className='text-base font-semibold '> Linktree</span>
        </a>

        <button className='flex gap-1' onClick={copyToClipboard}>
              {copied 
                ? <div className='flex gap-1.5  text-[#120222] hover:text-[#120222]/80 transition duration-300'><MdOutlineMarkEmailRead className='text-2xl '/> <span className='text-base font-semibold '>Email Copiado!</span></div>
                : <div className='flex gap-1.5 text-[#120222] hover:text-[#120222]/80 transition duration-300 items-center'><IoMailOutline className='text-3xl '/> <span className='text-base font-semibold '>Correo Electrónico</span> </div> }
              
            </button>
        </div>
    </section>
  )
}

export default Contact