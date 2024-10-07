import React from 'react';

const InfoSection = () => {
    return (
        <section className="flex justify-center items-center flex-col md:flex-row  bg-orange-200 p-6 md:p-12">
            <div className="md:w-1/2 p-4">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-yellow-700 mb-6">Renueva tu cuerpo, equilibra tu mente</h2>
                <p className="text-sm md:text-lg lg:text-xl text-yellow-700 leading-relaxed">
                    En nuestro Health Spa, combinamos tecnologías avanzadas como saunas infrarrojos y terapias de luz para brindarte una experiencia de bienestar total. Alivia dolores crónicos, mejora tu sistema inmunológico, quema calorías sin esfuerzo y rejuvenece tu piel, mientras desintoxicas tu cuerpo y reduces el estrés, mejorando tu salud mental y calidad de vida.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center p-4">
                <img src="/src/assets/img/relax.png" alt="Persona relajándose" className="w-3/3 md:w-1/2" />
            </div>
        </section>
    );
};

export default InfoSection;
