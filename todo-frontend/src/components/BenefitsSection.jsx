import React from 'react';

const BenefitsSection = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-orange-200 p-6 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-lg md:text-3xl font-extrabold text-yellow-700 mb-8">Beneficios</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img src="/img/beneficios.png" alt="Beneficios de la relajación" className="w-full max-w-md rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:ml-10">
                    <ul className="space-y-4">
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Alivia el dolor
                        </li>
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Quema calorías
                        </li>
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Fortalece la inmunidad
                        </li>
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Desintoxica
                        </li>
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Rejuvenece la piel
                        </li>
                        <li className="text-amber-700 font-semibold text-lg md:text-2xl flex items-center">
                            <span className="inline-block w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
                            Mejora mental
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
