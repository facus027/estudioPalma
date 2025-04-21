import React from 'react'

export default function Quienes() {
  return (
    <div className='flex flex-col gap-20'>
      <section id="quienes" className="max-w-full h-96 pl-10 mb-96 md:mb-0 bg-graylight pt-5">
        <div className=" flex md:flex-row flex-col w-11/12">
          <div className="flex-1 flex items-center justify-center">
            <img className="md:h-80 w-auto h-auto" src="https://res.cloudinary.com/dwxwejuvu/image/upload/v1744404045/Abogados/txkga3rf96nbuc7whmow.jpg"
             alt="Equipo" />
          </div>
          <div className="flex-1 flex flex-col space-y-5 w-full  mt-5 xs:mt-16 md:mt-0">
            <h2 className=" font-cambria text-black text-2xl md:text-4xl font-extrabold">
              ¿Cuándo comenzó?
            </h2>
            <div className="bg-ocre h-1"></div>
            <div className="font-roboto flex text-black flex-col space-y-7 w-full">
              <p className="text-justify">
              Nuestro estudio jurídico tiene una trayectoria de más de 30 años brindando
              asesoramiento legal integral. Fue fundado en 1992 por el Dr. Fabián Enrique
              Palma, egresado de la Universidad de Mendoza, con el firme compromiso de
              ofrecer soluciones jurídicas eficaces y personalizadas.
              </p>
              <p className="text-justify">
              En 2021 se sumó al equipo la Dra. Depetri, egresada de la Universidad Nacional
              de Cuyo, y en 2023 la Dra. Maresca, egresada de la Universidad de Mendoza.
              </p>
              <p className="text-justify">
              Juntos, combinamos experiencia y actualización constante
              para brindar un servicio legal de excelencia.
              </p>
            </div>
          </div>
        </div>
      </section >

      <section className="bg-whitelight h-full max-w-full md:-mt-20 xs:-mt-1 mt-7 md:py-10">
        <div className="felx flex-col md:w-1/2 w-11/12 mx-auto space-y-2 md:ml-80">
        <h2 className="text-3xl justify-start text-ocre font-cambria">
          Misión
        </h2>
        <p className="text-md text-black font-roboto text-justify ">
        En Estudio Jurídico Palma brindamos asesoramiento legal integral y de calidad a
        empresarios, comerciantes y empleadores. Ofrecemos soluciones en derecho
        laboral, civil, comercial y tributario, tanto en el ámbito preventivo, administrativo
        como judicial. También contamos con un área especializada en derecho de familia,
        liderada por la Dra. Depetri, para asesorar en cuestiones patrimoniales y familiares.
        </p>
        <div className="bg-ocre h-0.5"></div>
        <h2 className="text-3xl justify-start text-ocre font-cambria">
          Visión
        </h2>
        <p className="text-md text-black font-roboto text-justify ">
        Nuestro objetivo es diagnosticar y resolver problemas legales con un enfoque
        estratégico. Buscamos minimizar riesgos y maximizar oportunidades a través del
        asesoramiento preventivo. Además, defendemos los intereses de nuestros clientes
        con profesionalismo y compromiso, garantizando soluciones eficientes y a medida.
        </p>
          <div className="bg-ocre h-0.5"></div>
          <h2 className="text-3xl justify-start text-ocre font-cambria">
          Valores
        </h2>
        <p className="text-md text-black font-roboto text-justify ">
        Priorizamos la atención rápida y personalizada, con un enfoque humano en cada
        caso. Apostamos a la excelencia y mejora continua mediante actualización y
        capacitación constante. Nos comprometemos con la confianza y transparencia,
        asegurando un servicio de calidad y altos estándares éticos.
        </p>
        </div>
      </section>
    </div>
  )
}
