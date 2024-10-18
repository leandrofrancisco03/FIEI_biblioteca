import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Sun, Moon, Menu } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="w-8 h-8 text-accent-light dark:text-accent-dark" />
            <span className="text-2xl font-bold">Biblioteca FIEI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        <nav className={`mt-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
            <li><Link to="/" className="block hover:text-accent-light dark:hover:text-accent-dark">Inicio</Link></li>
            <li><Link to="/catalog" className="block hover:text-accent-light dark:hover:text-accent-dark">Catálogo</Link></li>
            <li><Link to="/my-loans" className="block hover:text-accent-light dark:hover:text-accent-dark">Mis Préstamos</Link></li>
            <li><Link to="/recommendations" className="block hover:text-accent-light dark:hover:text-accent-dark">Recomendaciones</Link></li>
            <li><Link to="/login" className="block hover:text-accent-light dark:hover:text-accent-dark">Iniciar Sesión</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;