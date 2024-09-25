import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/header-img-1.png')" }}>
            <h1 className="text-4xl font-semibold text-black">Bienvenidos a Sen Spa.</h1>
            <h2 className="text-xl mt-5 font-light text-black">Un lugar para meditar</h2>
        </section>
    );
};

export default Hero;
