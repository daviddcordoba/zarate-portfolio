
const Nav = () => {
  return (
    <nav className='border border-black rounded-full px-3 py-1 flex flex-row items-center backdrop-blur-2xl'> 
          <div>
            <ul className='flex gap-3 lg:gap-8 text-lg lg:text-xl text-white'>
            <li><a href="#inicio">Inicio </a></li>
            <li><a href="#sobremi">Sobre mi </a></li>
            <li><a href="#cm">Community Manager </a></li>
            <li><a href="#ugc">UGC</a></li>
            <li><a href="#trabajos">Trabajos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>
  )
}

export default Nav