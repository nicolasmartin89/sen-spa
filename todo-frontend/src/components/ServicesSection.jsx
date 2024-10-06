import React from 'react';

const ServicesSection = () => {
    return (
        <section className=" flex justify-center p-8 xl:p-32 bg-red-50 flex-col ">
            <h3 className="text-xl md:text-4xl font-bold text-yellow-700 mb-1">Servicios</h3>
            <div className='flex items-center justify-center flex-col md:flex-row'>
                <div className='m-4 bg-yellow-100 lg:size-3/12'>
                    <div className='py-7 px-0 flex items-center justify-center flex-col'>
                        <img src="/src/assets/img/sauna.png" alt="Imagen servicio sauna infrarrojo" className="w-1/2" />
                        <p className='md:text-lg font-bold'>Sauna infrarrojo</p>
                    </div>
                </div>
                <div className='m-4 bg-yellow-100 lg:size-3/12'>
                    <div className='py-7 px-0 flex items-center justify-center flex-col'>
                        <img src="/src/assets/img/aromaterapia.png" alt="Imagen servicio aromaterapia" className="w-1/2" />
                        <p className='md:text-lg font-bold'>Aromaterapia</p>
                    </div>
                </div>
                <div className='m-4 bg-yellow-100 lg:size-3/12'>
                    <div className='py-7 px-0 flex items-center justify-center flex-col'>
                        <img src="/src/assets/img/terapiaSal.png" alt="Imagen servicio terapia con sal" className="w-1/2" />
                        <p className='md:text-lg font-bold'>Terapia con sal</p>
                    </div>
                </div>
                <div className='m-4 bg-yellow-100 lg:size-3/12'>
                    <div className='py-7 px-0 flex items-center justify-center flex-col'>
                        <img src="/src/assets/img/saunaVapor.png" alt="Imagen servicio sauna vapor" className="w-1/2" />
                        <p className='md:text-lg font-bold'>Sauna vapor</p>
                    </div>
                    
                </div>
                
            </div>
            
        </section>
    );
};

export default ServicesSection;