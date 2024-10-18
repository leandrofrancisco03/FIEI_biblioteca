import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  category: string;
  available: boolean;
  image: string;
  rating: number;
}

const initialBooks: Book[] = [
  {
    id: 1,
    title: "Inteligencia Artificial: Una Aproximación Moderna",
    author: "Stuart Russell y Peter Norvig",
    isbn: "978-0134610993",
    category: "Inteligencia Artificial",
    available: true,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 4
  },
  {
    id: 2,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    isbn: "978-0132350884",
    category: "Programación",
    available: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    title: "Diseño de Interfaces de Usuario",
    author: "Ben Shneiderman",
    isbn: "978-0321537355",
    category: "Diseño Web",
    available: true,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 3
  },
];

const Catalog: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<keyof Book>('title');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredBooks = initialBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  const handleSort = (key: keyof Book) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }

    const sortedBooks = [...books].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setBooks(sortedBooks);
  };

  const handleRating = (id: number, rating: number) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, rating } : book
    ));
  };

  const StarRating: React.FC<{ rating: number; onRate: (rating: number) => void }> = ({ rating, onRate }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            onClick={() => onRate(star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Libros</h1>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Buscar por título, autor, ISBN o categoría"
            className="flex-grow px-4 py-2 rounded-l-md border-t border-b border-l text-gray-800 border-gray-200 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="px-4 py-2 rounded-r-md bg-accent-light dark:bg-accent-dark text-white">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{book.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">ISBN: {book.isbn}</p>
              <p className="text-sm text-accent-light dark:text-accent-dark mb-2">{book.category}</p>
              <div className="flex justify-between items-center mb-2">
                <span className={`px-2 py-1 rounded-full text-xs ${book.available ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                  {book.available ? 'Disponible' : 'No disponible'}
                </span>
                <StarRating rating={book.rating} onRate={(rating) => handleRating(book.id, rating)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;