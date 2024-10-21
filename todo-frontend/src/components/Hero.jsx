import React from 'react';

const Hero = () => {
    return (
        <section className='altoHero md:h-screen relative bg-cover bg-center' style={{ backgroundImage: "url('/img/header-img-1.png')" }} >
            <div className='flex justify-center p-5'>
                <img src="/img/spaSen.png" alt="Logo Sen Spa" />
            </div>
            <div className="flex justify-center absolute inset-x-0 bottom-20 md:bottom-40" >
                <button className="bg-orange-500 px-4 py-2 rounded text-white w-48 text-2xl md:w-64 ">Reservas</button>
            </div>
        </section>
    );
};

export default Hero;
