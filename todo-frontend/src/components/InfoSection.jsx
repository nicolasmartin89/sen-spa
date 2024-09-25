import React from 'react';

const InfoSection = () => {
    return (
        <section className="flex items-center justify-center p-8">
            <img src="/path/to/your/image.jpg" alt="Info" className="w-1/2" />
            <div className="ml-4">
                <h2 className="text-2xl font-bold">Information Title</h2>
                <p>Some informative text about the landing page.</p>
            </div>
        </section>
    );
};

export default InfoSection;