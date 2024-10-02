import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assests/images/LOGOSENSPA.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 2, text: 'Servicios', path: "/servicios" },
    { id: 3, text: 'Reservas', path: "/reservas" },
    { id: 4, text: 'Contacto', path: "/contacto" },
  ];

  return (
    <nav className="bg-zinc-600 dark:bg-gray-900 text-white w-full">
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <img src={logo} alt="Logo SenSpa" className="w-30 h-20" />

          {/* Navegación Desktop */}

          <ul className='hidden md:flex items-center'>
            <Link
              to="/"
              className='p-4 hover:bg-orange-500 dark:hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            >
              Inicio
            </Link>
            {navItems.map(item => (

              <li
                key={item.id}
                className='p-4 hover:bg-orange-500 dark:hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
              >
                {item.text}
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className='p-4 hover:bg-orange-500 dark:hover:bg-gray-200 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
              >
                Login
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </li>
          </ul>

          {/* Navegación Mobile Icono */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-4 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <div onClick={handleNav}>
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>

          {/* Navegación Mobile Menu */}
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 dark:bg-gray-800 ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            <img src={logo} alt="Logo" className="w-30 h-20" />

            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-orange-500 duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
            <li className='p-4 border-b rounded-xl hover:bg-orange-500 duration-300 hover:text-black cursor-pointer border-gray-600'>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
