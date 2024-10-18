import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  rating: number;
}

const initialRecommendations: Book[] = [
  {
    id: 1,
    title: "Machine Learning: A Probabilistic Perspective",
    author: "Kevin P. Murphy",
    category: "Inteligencia Artificial",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 4
  },
  {
    id: 2,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    category: "Programación",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    title: "Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
    author: "Steve Krug",
    category: "Diseño Web",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    rating: 3
  },
];

const Recommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Book[]>(initialRecommendations);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = Array.from(new Set(recommendations.map(book => book.category)));

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredRecommendations = selectedCategories.length > 0
    ? recommendations.filter(book => selectedCategories.includes(book.category))
    : recommendations;

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recomendaciones Personalizadas</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filtrar por categoría:</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategories.includes(category)
                  ? 'bg-accent-light dark:bg-accent-dark text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.map((book) => (
          <div key={book.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{book.author}</p>
              <p className="text-sm text-accent-light dark:text-accent-dark mb-2">{book.category}</p>
              <StarRating rating={book.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;