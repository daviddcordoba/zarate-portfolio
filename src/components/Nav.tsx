
const navItems = [
  { title: "Inicio", label: "inicio", url: "/#inicio" },
  { title: "UGC", label: "ugc", url: "/#ugc" },
  { title: "CM", label: "cm", url: "/#cm" },
  { title: "Trabajos", label: "trabajos", url: "/#trabajos" },
  { title: "Contacto", label: "contacto", url: "/#contacto" },
];

const Nav = () => {

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-5">
      <nav className="flex  px-2 text-sm font-medium rounded-full text-gray-200 justify-center items-center bg-white/10 dark:bg-gray-800/90 backdrop-blur-md">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-gray-400 whitespace-nowrap"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
    
      </nav>
    </header>
  );
};

export default Nav;