import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">Logo</div>
            <button className="bg-orange-500 px-4 py-2 rounded">Login</button>
        </nav>
    );
};

export default Navbar;
