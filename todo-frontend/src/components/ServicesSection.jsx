import React from 'react';

const ServicesSection = () => {
    return (
        <section className="flex items-center justify-center p-8">
            <img src="/path/to/your/image.jpg" alt="Services" className="w-1/2" />
            <div className="ml-4">
                <h2 className="text-2xl font-bold">Services Title</h2>
                <p>Some text explaining the services you offer.</p>
            </div>
        </section>
    );
};

export default ServicesSection;