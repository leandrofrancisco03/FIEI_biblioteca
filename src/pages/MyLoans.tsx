import React, { useState } from 'react';

interface Loan {
  id: number;
  bookTitle: string;
  loanDate: string;
  dueDate: string;
  returned: boolean;
}

const initialLoans: Loan[] = [
  {
    id: 1,
    bookTitle: "Inteligencia Artificial: Una Aproximación Moderna",
    loanDate: "2024-03-01",
    dueDate: "2024-03-15",
    returned: false
  },
  {
    id: 2,
    bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
    loanDate: "2024-02-15",
    dueDate: "2024-03-01",
    returned: true
  },
  {
    id: 3,
    bookTitle: "Diseño de Interfaces de Usuario",
    loanDate: "2024-03-10",
    dueDate: "2024-03-24",
    returned: false
  }
];

const MyLoans: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>(initialLoans);

  const handleReturn = (id: number) => {
    setLoans(loans.map(loan =>
      loan.id === id ? { ...loan, returned: true } : loan
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mis Préstamos</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Título del Libro</th>
              <th className="px-4 py-2 text-left">Fecha de Préstamo</th>
              <th className="px-4 py-2 text-left">Fecha de Devolución</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Acción</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2">{loan.bookTitle}</td>
                <td className="px-4 py-2">{loan.loanDate}</td>
                <td className="px-4 py-2">{loan.dueDate}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${loan.returned ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {loan.returned ? 'Devuelto' : 'Prestado'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {!loan.returned && (
                    <button
                      onClick={() => handleReturn(loan.id)}
                      className="px-3 py-1 bg-accent-light dark:bg-accent-dark text-white rounded hover:bg-opacity-90"
                    >
                      Devolver
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLoans;