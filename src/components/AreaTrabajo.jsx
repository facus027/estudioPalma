import React from 'react'

export default function AreaTrabajo() {
  return (
    <section id="area" className='bg-whitelight max-w-full h-auto pt-1'>
      <div className='flex flex-col items-center justify-center'>
        
           <h2 className='md:text-4xl text-3xl md:my-5 my-1 font-bold font-cambria md:mb-10 mb-5'>
           Áreas de trabajo       
           </h2>      
        
        <div className='felx flex-row uppercase md:w-1/2 w-10/12 mx-auto'>
            <ul className='md:space-y-4 space-y-2'>
                <li className='area-item bg-graylight'>derecho civil y comercial</li>
                <li className='area-item bg-graylight'>derecho tributario y penal tributario</li>
                <li className='area-item bg-graylight'>derecho empresarial y societario</li>
                <li className='area-item bg-graylight'>derecho administrativo</li>
                <li className='area-item bg-graylight'>derecho de familia</li>
                <li className='area-item bg-graylight'>relaciones laborales</li>
            </ul>  
        </div>      
      </div>
    </section>
  )
}
