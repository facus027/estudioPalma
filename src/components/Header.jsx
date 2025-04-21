import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <header className="w-full mx-auto flex bg-blueheader h-20 fixed z-30 -mt-20">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuad" })}
          className="cursor-pointer flex items-center"
        >
          <img className="md:h-12 md:ml-5 h-10 mt-2 md:mt-0" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1744403232/Abogados/t2dd2d2jqq7ls6ekrxmr.png"
           alt="LogoEstudio" />
        </div>

        <nav className="text-white">
          <ul className="flex flex-row text-lg text-center md:mr-5 sm:mr-2 mr-0">
            {[
              { id: "quienes", label: "Quienes somos", offset: -80 },
              { id: "equipo", label: "Equipo", offset: -50 },
              { id: "area", label: "Áreas de trabajo", offset: -120 },
              { id: "contacto", label: "Contacto", offset: -90 },
            ].map((item) => (
              <li key={item.id} className="menu-item">
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={item.offset}
                  spy={true}
                  activeClass="text-ocre"
                  className="menu-item-a cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
