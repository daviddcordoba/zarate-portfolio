import { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";  

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
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    };
  return (
    <>
    <p className='text-center text-lg '>Colaboremos</p>
        <h1 className='text-center text-5xl '>Contactate conmigo</h1>

        <div className=' flex flex-col w-[400px] h-[180px] gap-4 lg:flex-row  mt-5  mx-auto lg:w-[600px] lg:h-[100px]   items-center justify-center lg:gap-3 border-[0.12rem] rounded-[2rem] border-black'>
        
            
            <button className='flex gap-1' onClick={copyToClipboard}>
              {copied 
                ? <div className='flex gap-1.5'><MdOutlineMarkEmailRead className='text-[24px] '/>Email Copiado!</div>
                : <div className='flex gap-1.5'><IoMailOutline className='text-[24px] '/> {email}</div> }
              
            </button>
        

        <a href="https://www.linkedin.com/in/gabriela-zarate-35748328b/" className='flex gap-1 items-center' target='_blank'>
          <LiaLinkedin className='text-3xl' />
          Linkedin
        </a>

        <a href="https://api.whatsapp.com/send?phone=2804806333" className='flex gap-1' target='_blank'>
          <FaWhatsapp className='text-2xl' />
          WhatsApp
        </a>

        <a href="https://linktr.ee/gabizarate" className='flex gap-1' target='_blank'>
          <MdOutlineLink className='text-2xl' />
          Linktree
        </a>
        </div>
    </>
  )
}

export default Contact