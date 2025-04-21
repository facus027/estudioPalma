import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const profiles = [
  {
    id: 1,
    name: "Fabian Enrique Palma",
    position: "Socio Administrador",
    image: "/fabiPalma.png",
    description: `Abogado, graduado en la Facultad de Ciencias Jurídicas y Sociales de la Universidad
de Mendoza el 29 de mayo de 1992. Prestó juramento ante la Excma. Suprema Corte
de Justicia de la Provincia el 11 de junio del mismo año.

Se desempeñó como abogado de planta en la Administración Federal de Ingresos
Públicos, Región Mendoza (actual Agencia de Recaudación y Control Aduanero),
cargo al que renunció el 31 de mayo de 1996.

Durante su gestión en la AFIP, se especializó en Derecho Penal Tributario y Previsional, clausuras de establecimientos, sumarios materiales y formales, contencioso administrativo, procesos de determinaciones de oficio de impuestos, dictámenes, regímenes de promoción industrial y diferimientos impositivos. Desde 1996, ejerce de
manera independiente en estas áreas.

Ha participado en congresos, seminarios y jornadas sobre Derecho Tributario y
Aduanero, abordando temas como Régimen de Facturación y Registración, Ley Penal
Tributaria y Previsional, Retenciones y Percepciones en el IVA, Impuestos Internos,
Procedimiento Tributario y reintegro de IVA por exportación. Asimismo, participó en
el seminario dictado por el Dr. Carlos Alberto Parellada titulado "Obligaciones de Dar
Sumas de Dinero" y en el congreso "La Inflación como Enfermedad del Sistema Monetario y Jurídico".

Está matriculado en la provincia de Mendoza, en la matrícula federal y en el Colegio
Público de Abogados de la Capital Federal.`
  },
  {
    id: 2,
    name: "M. Monserrat Depetr",
    position: "Asociada",
    image: "/mariMonse.png",
    description: `M. Monserrat Depetri es abogada, graduada en febrero de 2020 en la Universidad Nacional de Cuyo. Actualmente, cursa la Especialización en Asesoramiento Jurídico de Empresas y la Maestría en Derecho Empresario en la Universidad de Mendoza.

Cuenta con experiencia en la Inspección General de Seguridad (IGS), donde se desempeñó como Instructora Sumarianta, así como en diversos estudios jurídicos de Mendoza, brindando asistencia jurídica integral con especial enfoque en Derecho Civil y Derecho de las Familias.

En el ámbito académico, fue profesora de Derechos Humanos y Sociología en la Universidad de Congreso Z.E. y adscripta en la cátedra de Derecho de las Familias en la Universidad Nacional de Cuyo.

Ha participado en congresos, seminarios y jornadas sobre Derecho del Trabajo y Seguridad Social.

Ingresó a nuestro Estudio Jurídico en 2021 y actualmente forma parte del Área de Derecho Laboral y Relaciones Laborales, Derecho de las Familias y Derecho Civil y Comercial.

Está matriculada en la provincia de Mendoza.

Domina los idiomas español e inglés.`
  },
  {
    id: 3,
    name: "Sabrina D. Maresca",
    position: "Asociada",
    image: "/sabriDani.png",
    description: `Sabrina D. Maresca es abogada, graduada en agosto de 2022 en la Universidad de Mendoza. Actualmente, cursa la Especialización en Asesoramiento Jurídico de Empresas y la Maestría en Derecho Empresario en la misma universidad.

Se desempeña como Ayudante Meritoria de Trabajos Prácticos en la cátedra de Instituciones de Derecho Cambiario y Bancario "A" de la Universidad de Mendoza.

Ingresó a nuestro Estudio Jurídico en 2023 y forma parte del Área de Derecho Laboral y Derecho Civil y Comercial.

Está matriculada en la provincia de Mendoza y en la matrícula federal.

Domina los idiomas español e inglés.`
  }
];

export default function ProfileSelection() {
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  return (
    <div className=" h-screen bg-cover bg-center bg-whitelight flex flex-col items-center justify-center mt-96 ">
       <div id="equipo" className=" bg-graylight h-64 flex items-center justify-center  ">
              <div className="flex flex-col space-y-4">
              <h2 className="text-3xl text-center text-black font-cambria font-bold">
                Equipo de Abogados
              </h2>
              <p className=" text-lg text-center text-black font-roboto italic w-2/3 ml-36 flex items-center justify-center">
              Somos un equipo comprometido en brindar soluciones legales sólidas y efectivas, con profesionalismo y dedicación.
              </p>
              </div>
            </div>
      {/* Botones de selección */}
      <div className="flex gap-20 mb-6">
        {profiles.map((profile) => (
          <div className=" space-y-2"
          key={profile.id}>
            <img src={profile.image} alt={profile.name} className="w-auto h-80 mt-12 mx-auto flex justify-center items-center rounded-md" />
          <button
            key={profile.id}
            onClick={() => setSelectedProfile(profile)}
            className="flex flex-col items-center p-1 border rounded-lg bg-ocre group transition w-full"
          >
            <span className="mt-2 font-semibold font-cambria text-lg tracking-wide text-white group-hover:text-black">{profile.name}</span>
          </button>
          </div>
        ))}
      </div>
          <div className="bg-profiles-present max-h-max pb-10 w-full bg-cover bg-center flex">
              
     {/* Ventana emergente con animaciones */}
             <AnimatePresence>
               {selectedProfile && (
            <div
              className="flex flex-col items-center justify-center w-full "
            key={selectedProfile.id}
            >
              <img src={selectedProfile.image} alt={selectedProfile.name}
                className="w-52 h-52 -mb-20 mt-7 z-10 flex justify-center items-center rounded-full border-8 border-white"
              />
              <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                   className="relative flex justify-center items-center  bg-white p-6 rounded-lg shadow-lg w-1/2"
                 >
                   <div className="flex flex-col items-center mt-16">
                     <h2 className="text-3xl font-extrabold font-cambria text-ocre uppercase tracking-wide">{selectedProfile.name}</h2>
                     <h3 className="text-black text-xl font-cambria font-bold uppercase">{selectedProfile.position}</h3>
                     <p className="text-black font-roboto mt-2 text-start whitespace-pre-line text-base">{selectedProfile.description}</p>
                   </div>
                 </motion.div>
                 </div>
               )}
             </AnimatePresence>
      </div>
    </div>
  );
}
