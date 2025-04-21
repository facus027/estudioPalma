import React from 'react'

export default function Contacto() {
  return (
    <section id="contacto" className='bg-whitelight max-w-full h-auto md:mb-16 mb-5 mx-auto mt-10 flex justify-center items-center'>
    <div className='w-11/12 flex flex-col justify-center items-center gap-10'>
     <div className='w-5/6 flex flex-col justify-center items-center mx-auto md:gap-6 gap-2'>
      <div className='flex flex-col justify-center items-center md:gap-3 gap-1'>
        <h2 className='font-cambria font-bold text-black md:text-4xl text-3xl'>Contactanos</h2>       
        <h3 className='font-roboto italic text-ocre md:text-3xl text-base text-justify'>Brindamos asesoramiento presencial y online</h3>        
      </div>
      <div className='flex flex-col space-y-1 md:w-4/6 md:text-justify md:text-base text-sm'>
        <p className='text-justify'>
        Nuestro estudio jurídico ofrece atención presencial en Mendoza, brindando asesoramiento
        integral a empresas y particulares.
        </p>
        <p className='text-justify'>
        Además, realizamos consultas online para clientes de otras provincias de Argentina y del
        exterior, garantizando un servicio accesible y eficiente sin importar la ubicación.
        </p>
        <p className='text-justify'>
        Asesoramos a empresas locales e internacionales, brindando soluciones legales estratégicas
        adaptadas a cada necesidad.
        </p>
        </div> 
      </div>
        <div className='flex flex-col md:flex-row md:gap-20 md:w-11/12 w-10/12 gap-0 mx-auto justify-center items-center'>
             
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.224514017745!2d-68.84820542524598!3d-32.89223176914067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091abb75df8d%3A0xecaec0818343ac19!2sAv.%20Bartolom%C3%A9%20Mitre%20870%2C%20M5500%20Mendoza!5e0!3m2!1ses!2sar!4v1742822567465!5m2!1ses!2sar"
                width="100%" height="300" className="rounded-lg flex-1" style={{ border: 0 }}
                loading="lazy" title="Google Maps Location"
            ></iframe>
              
              <div className=' flex flex-col space-y-3 flex-1 md:mt-16 mt-7'>
                  <a href='https://www.google.com/maps/place/Av.+Bartolom%C3%A9+Mitre+870,+M5500+Mendoza/@-32.892236,-68.84563,16z/data=!4m6!3m5!1s0x967e091abb75df8d:0xecaec0818343ac19!8m2!3d-32.8922363!4d-68.8456305!16s%2Fg%2F11jgxnw0tf?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  className='contat-botom text-sm'>
                  <span><img className='h-5 items-center flex justify-center' src="/elementos-08.png" alt="iconUbi" /></span>
                      <p className='text-xs'>Av. Mitre 870. Ciudad, Mendoza.
                      6° piso - oficina 5/6</p>
                  </a>
                  <a href='mailto:ejuridicocpc@gmail.com' 
                  target='_blank'
                  className='contat-botom'>
                  <span><img className='h-5 items-center flex justify-center' src="/elementos-07.png" alt="iconMail" /></span>
                      <p>ejuridicocpc@gmail.com</p>
                  </a>
                  <a href='tel:+54902614597661' 
                  target='_blank'
                  className='contat-botom'>
                      <span ><img className='h-5 items-center flex justify-center' src="/elementos-06.png" alt="iconPhone" /></span>
                      <p>(0261) 4597661/ 4597662</p>
                 </a>
              </div>
        </div>
      </div>
          
    </section>
  )
}
