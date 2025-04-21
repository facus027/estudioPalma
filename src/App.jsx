import AreaTrabajo from "./components/AreaTrabajo"
import Contacto from "./components/Contacto"
import Header from "./components/Header"
//import ProfileSelection from "./components/ProfileSelection"
import ProfileSelector from "./components/ProfileSelector"
import Quienes from "./components/Quienes"
import Slider from "./components/Slider"


function App() {


  return (
    <div className="">
      <div>
         <Header/>
      </div>
      
      <div className="mt-20">
        <Slider/>
      </div>
      <h1
        className="text-center animate-fadeIn transition-all font-cambria flex flex-col space-y-2 underline-offset-8 italic font-semibold tracking-wide text-2xl xs:text-3xl md:text-4xl text-ocre my-5 mt-7 mb-4 underline"
      >Estudio Palma & Asociados 
        <span className="mt-2  font-extralight animate-fadeIn2 transition-all"> Asesoramiento Legal</span>
      </h1>
      <div>  
        <Quienes/>
      </div>

      <div className=" md:mt-0">
        <ProfileSelector/>
      </div>

      <div className=" md:mt-0 mt-10">
        <AreaTrabajo/>
      </div>

      <div className=" md:mt-7 flex mx-auto">
        <Contacto/>
      </div>

<footer className="bg-blueheader md:h-20 h-16 py-2 relative flex items-center justify-center">
  <img className="md:h-16 h-12" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1744403232/Abogados/t2dd2d2jqq7ls6ekrxmr.png"
   alt="LogoEstudio" />
  <p className="absolute bottom-1 right-2 text-xs md:text-white text-blueheader flex items-center gap-1">
    Todos los derechos reservados &copy; {new Date().getFullYear()}
    <a href="https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA"
       target="_blank">
      <img className="h-5 md:h-7 w-auto" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1719490090/SerranoAndes/zsdorqdhpgcpg9tvbnxf.png" alt="VMKT" />
    </a>
  </p>
</footer>

    </div>
  )
}

export default App
