import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Search, Clock, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a la Biblioteca FIEI</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/catalog" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Book className="w-12 h-12 text-accent-light dark:text-accent-dark mb-4" />
          <h2 className="text-xl font-semibold mb-2">Catálogo</h2>
          <p className="text-center">Explora nuestra colección de libros tecnológicos</p>
        </Link>
        <Link to="/my-loans" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Clock className="w-12 h-12 text-accent-light dark:text-accent-dark mb-4" />
          <h2 className="text-xl font-semibold mb-2">Mis Préstamos</h2>
          <p className="text-center">Gestiona tus préstamos actuales y pasados</p>
        </Link>
        <Link to="/recommendations" className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Lightbulb className="w-12 h-12 text-accent-light dark:text-accent-dark mb-4" />
          <h2 className="text-xl font-semibold mb-2">Recomendaciones</h2>
          <p className="text-center">Descubre libros basados en tus intereses</p>
        </Link>
        <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <Search className="w-12 h-12 text-accent-light dark:text-accent-dark mb-4" />
          <h2 className="text-xl font-semibold mb-2">Búsqueda Avanzada</h2>
          <p className="text-center">Encuentra exactamente lo que necesitas</p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Novedades</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Nuevas Adquisiciones</h3>
          <ul className="list-disc list-inside">
            <li>Inteligencia Artificial: Una Aproximación Moderna</li>
            <li>Diseño de Interfaces de Usuario: Principios y Patrones</li>
            <li>Ciberseguridad: Protegiendo la Información en la Era Digital</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;