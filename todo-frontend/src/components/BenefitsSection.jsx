import React from 'react';

const BenefitsSection = () => {
    return (

        <section className="flex justify-center p-8 xl:p-32 bg-red-50 flex-col">
            <h2 className="text-xl font-bold text-yellow-700 mb-5 md:text-4xl">Beneficios</h2>
            <div className='flex justify-center flex-col md:flex-row'>
            
                <div className='flex items-center justify-center md:w-2/3'>
                    <img src="/src/assets/img/beneficios.png" alt="Imagen que muestra beneficios de la relajación" />
                </div>
            <div className="mt-5 md:w-1/3 md:ml-10 flex flex-col justify-center">
                <p className=' text-amber-600 font-extrabold md:text-3xl mb-5'>Alivia el dolor</p>
                <p className=' text-amber-600 font-extrabold md:text-3xl mb-5'>Quema calorías</p>
                <p className=' text-amber-600 font-extrabold md:text-3xl mb-5'>Fortalece la inmunidad</p>
                <p className=' text-amber-600 font-extrabold md:text-3xl mb-5'>Desintoxica</p>
                <p className=' text-amber-600 font-extrabold md:text-3xl mb-5'>Rejuvenece la piel</p>
                <p className=' text-amber-600 font-extrabold md:text-3xl '>Mejora mental</p>
            </div>
            </div>
            
            
            
        </section>
    );
};

export default BenefitsSection;