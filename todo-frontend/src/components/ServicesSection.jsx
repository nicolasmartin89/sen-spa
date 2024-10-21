import React from 'react';

const ServicesSection = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-orange-200 p-6 md:p-12">
            <h3 className="text-lg md:text-3xl font-extrabold text-yellow-700 mb-8">Servicios</h3>
            <div className="flex flex-wrap justify-center">
                <div className="m-4 bg-yellow-100 p-4 w-60 flex flex-col items-center justify-center rounded-lg shadow-md">
                    <img src="/img/sauna.png" alt="Sauna infrarrojo" className="w-24 h-24 mb-4 rounded-full" />
                    <p className="text-lg font-semibold text-gray-800 text-center">Sauna infrarrojo</p>
                </div>
                <div className="m-4 bg-yellow-100 p-4 w-60 flex flex-col items-center justify-center rounded-lg shadow-md">
                    <img src="/img/aromaterapia.png" alt="Aromaterapia" className="w-24 h-24 mb-4 rounded-full" />
                    <p className="text-lg font-semibold text-gray-800 text-center">Aromaterapia</p>
                </div>
                <div className="m-4 bg-yellow-100 p-4 w-60 flex flex-col items-center justify-center rounded-lg shadow-md">
                    <img src="/img/terapiaSal.png" alt="Terapia con sal" className="w-24 h-24 mb-4 rounded-full" />
                    <p className="text-lg font-semibold text-gray-800 text-center">Terapia con sal</p>
                </div>
                <div className="m-4 bg-yellow-100 p-4 w-60 flex flex-col items-center justify-center rounded-lg shadow-md">
                    <img src="/img/saunaVapor.png" alt="Sauna vapor" className="w-24 h-24 mb-4 rounded-full" />
                    <p className="text-lg font-semibold text-gray-800 text-center">Sauna Vapor</p>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
