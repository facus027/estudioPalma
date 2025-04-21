import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const profiles = [
  {
    id: 1,
    name: "Fabian Enrique Palma",
    position: "Socio Administrador",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/v1744404044/Abogados/lkj4tiktlu8uf6ix1q84.png",
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
    name: "M. Monserrat Depetri",
    position: "Asociada",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/v1744404042/Abogados/dvswv6hkpoh2udueqsle.png",
    description: `M. Monserrat Depetri es abogada, graduada en febrero de 2020 en la Universidad Nacional de Cuyo. Actualmente, cursa la Especialización en Asesoramiento Jurídico de Empresas y la Maestría en Derecho Empresario en la Universidad de Mendoza.

Cuenta con experiencia en la Inspección General de Seguridad (IGS), donde se desempeñó como Instructora Sumariante, así como en diversos estudios jurídicos de Mendoza, brindando asistencia jurídica integral con especial enfoque en Derecho Civil y Derecho de las Familias.

En el ámbito académico, fue profesora de Derechos Humanos y Sociología en la Universidad de Congreso Z.E. y adscripta en la cátedra de Derecho de las Familias en la Universidad Nacional de Cuyo.

Ha participado en congresos, seminarios y jornadas sobre Derecho del Trabajo y Seguridad Social.

Ingresó a nuestro Estudio Jurídico en 2021 y actualmente forma parte del Área de Derecho Laboral y Relaciones Laborales y Derecho administrativo, Derecho de las Familias y Derecho Civil y Comercial.

Está matriculada en la provincia de Mendoza.

Domina los idiomas español e inglés.`
  },
  {
    id: 3,
    name: "Sabrina D. Maresca",
    position: "Asociada",
    image: "https://res.cloudinary.com/dwxwejuvu/image/upload/v1744404043/Abogados/uxa7wpizgtcn7wadefde.png",
    description: `Sabrina D. Maresca es abogada, graduada en agosto de 2022 en la Universidad de Mendoza. Actualmente, cursa la Especialización en Asesoramiento Jurídico de Empresas y la Maestría en Derecho Empresario en la misma universidad.

Se desempeña como Ayudante Meritoria de Trabajos Prácticos en la cátedra de Instituciones de Derecho Cambiario y Bancario "A" de la Universidad de Mendoza.

Ingresó a nuestro Estudio Jurídico en 2023 y forma parte del Área de Derecho Laboral,Derecho administrativo y Derecho Civil y Comercial.

Está matriculada en la provincia de Mendoza y en la matrícula federal.

Domina los idiomas español e inglés.`
  }
];

export default function ProfileSelector() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const openModal = (profile) => {
    setSelectedProfile(profile);
    document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
  };

  const closeModal = () => {
    setSelectedProfile(null);
    document.body.style.overflow = "auto"; // Restaura el scroll del fondo
  };

  return (
    <div className="relative min-h-screen flex flex-col mt-7 items-center justify-center">

      {/* Sección superior */}
      <div id="equipo" className="bg-graylight md:h-48 h-36 flex items-center justify-center w-full relative z-10">
        <div className="flex flex-col space-y-2 md:space-y-4 text-center">
          <h2 className="md:text-3xl text-2xl text-black font-bold">Equipo de Abogados</h2>
          <p className="md:text-lg text-base text-black italic md:w-2/3 w-11/12 mx-auto">
            Somos un equipo comprometido en brindar soluciones legales sólidas y efectivas.
          </p>
        </div>
      </div>

      {/* Botones de selección */}
      <div className="flex flex-col md:flex-row md:mt-10 gap-20 mx-auto md:gap-24 mt-12 z-10">
        {profiles.map((profile) => (
          <div key={profile.id} className="md;space-y-2 space-y-0.5 text-center">
            <img
              src={profile.image}
              alt={profile.name}
              className="md:w-64 w-44 h-auto rounded-lg mx-auto cursor-pointer -mt-16"
              onClick={() => openModal(profile)}
            />
            <button
              onClick={() => openModal(profile)}
              className="bg-ocre text-white w-full md:py-2 py-0.5 rounded-lg hover:bg-black transition"
            >
              {profile.name}
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selectedProfile && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="bg-white p-6 mt-10 rounded-lg shadow-lg md:w-3/4 w-11/12 relative flex flex-col items-center max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-red-500 hover:bg-red-800 text-white px-3 py-1 rounded-full"
        >
          X
        </button>
        <img
          src={selectedProfile.image}
          alt={selectedProfile.name}
          className="w-32 h-32 rounded-full border-4 border-white -mt-7"
        />
        <h2 className="md:text-2xl text-xl font-bold mt-1">{selectedProfile.name}</h2>
        <h3 className="text-base text-gray-700">{selectedProfile.position}</h3>
        <p className="text-black mt-2 text-center md:text-lg text-xs">{selectedProfile.description}</p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
      )
}
