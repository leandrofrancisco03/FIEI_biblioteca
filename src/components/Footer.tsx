import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Email: ocii.fiei.unfv@gmail.com</p>
            <p>Teléfono: (+51) 748-0888 Anexo: 9871 - 9866</p>
            <p>Dirección: Jr. Iquique Nº 127 - Breña - Lima</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  to="/my-loans"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Mis Préstamos
                </Link>
              </li>
              <li>
                <Link
                  to="/recommendations"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Recomendaciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Políticas</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Política de Préstamos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Términos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-light dark:hover:text-accent-dark"
                >
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Biblioteca FIEI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
