import React from 'react';

const BenefitsSection = () => {
    return (
        <section className="flex items-center justify-center p-8 bg-gray-100">
            <img src="/path/to/your/image.jpg" alt="Benefits" className="w-1/2" />
            <div className="ml-4">
                <h2 className="text-2xl font-bold">Benefits Title</h2>
                <p>Some text highlighting the benefits of your service.</p>
            </div>
        </section>
    );
};

export default BenefitsSection;