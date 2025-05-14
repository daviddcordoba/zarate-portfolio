import { useEffect } from 'react';

const navItems = [
  { title: "Inicio", label: "inicio", url: "/#inicio" },
  { title: "CM", label: "cm", url: "/#cm" },
  { title: "UGC", label: "ugc", url: "/#ugc" },
  { title: "Trabajos", label: "trabajos", url: "/#trabajos" },
  { title: "Contacto", label: "contacto", url: "/#contacto" },
];

const Nav = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("header nav a");

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("aria-label") === entry.target.id) {
              item.classList.add("text-yellow-500");
            } else {
              item.classList.remove("text-yellow-500");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-5">
      <nav className="flex  px-2 text-sm font-medium rounded-full text-gray-200 justify-center items-center bg-white/10 dark:bg-gray-800/90 backdrop-blur-md">
        {navItems.map((link) => (
          <a
            key={link.label}
            className="relative block px-2 py-2 transition hover:text-yellow-400 whitespace-nowrap"
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