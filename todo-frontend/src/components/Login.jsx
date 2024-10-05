import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logologin.png';

const Login = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Contraseña predefinida
    if (password === 'SenSpa2024') {
      navigate('/dashboard');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-200">
      <div className="w-full max-w-xl"> {/* Cambiado de max-w-md a max-w-xl */}
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6 text-center">
            {/* Logo centrado */}
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Logo SenSpa" className="w-80 h-70" />
            </div>
            <h2 className="text-2xl font-bold text-gray-500">Usuario Empleado</h2>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;