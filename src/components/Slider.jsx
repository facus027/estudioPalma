import { useState, useEffect } from "react";

const images = ["bg-hero-1", "bg-hero-2"]; // Clases de Tailwind

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${images[index]} bg-cover bg-center h-96 flex items-center justify-center transition-all duration-1000`}>
      <img className="md:h-48 h-36 w-auto "
           loading="eager"
           fetchpriority="high"
           src="https://res.cloudinary.com/dwxwejuvu/image/upload/f_auto,q_auto/v1744403232/Abogados/n5yjjcodoapzbsplks4c.png" 
           alt="LogoInicio" />
    </div>
  );
};

export default Slider;
