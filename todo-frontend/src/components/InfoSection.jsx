import React from 'react';

const InfoSection = () => {
    return (
        <section className="flex justify-center p-8 bg-red-50 flex-col md:flex-row">
            <div className="md:w-1/2 p-2 mt-10 ">
                <h2 className=" text-2xl font-bold text-yellow-700 md:text-4xl lg:text-5xl">Renueva tu cuerpo, equilibra tu mente</h2>
                <p className='text-base text-yellow-700 mt-10 md:text-2xl'>En nuestro Health Spa, combinamos tecnologías avanzadas como saunas infrarrojos y terapias de luz para brindarte una experiencia de bienestar total. Alivia dolores crónicos, mejora tu sistema inmunológico, quema calorías sin esfuerzo, y rejuvenece tu piel, mientras desintoxicas tu cuerpo y reduces el estrés, mejorando tu salud mental y calidad de vida.</p>
            </div>
            <div className='max-w-lg flex items-center justify-center p-5 md:w-1/2 '>
                <img src="/src/assets/img/relax.png" alt="Imagen que muestra una persona relajandose"  />
            </div>
        </section>
    );
};

export default InfoSection;