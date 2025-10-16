import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, Star, Clock, User } from 'lucide-react';

const WishlistPage: React.FC = () => {
  const wishlistItems = [
    {
      id: '1',
      title: 'Advanced React Patterns',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 15420,
      duration: '8h 30m',
      price: 89,
      originalPrice: 199,
      image: '⚛️',
      level: 'Advanced',
      category: 'Web Development'
    },
    {
      id: '2',
      title: 'Python Machine Learning',
      instructor: 'Dr. Michael Chen',
      rating: 4.8,
      students: 12890,
      duration: '12h 15m',
      price: 99,
      originalPrice: 249,
      image: '🤖',
      level: 'Intermediate',
      category: 'Data Science'
    },
    {
      id: '3',
      title: 'Docker & Kubernetes Mastery',
      instructor: 'Alex Rodriguez',
      rating: 4.9,
      students: 9870,
      duration: '6h 45m',
      price: 79,
      originalPrice: 179,
      image: '🐳',
      level: 'Advanced',
      category: 'DevOps'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
        </div>
        <p className="text-xl text-gray-600">
          {wishlistItems.length} saved course{wishlistItems.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Wishlist Items */}
      <div className="grid gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex gap-6">
              {/* Course Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                  {item.image}
                </div>
              </div>

              {/* Course Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                        {item.level}
                      </span>
                      <span className="text-sm text-gray-500">{item.category}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {item.instructor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {item.rating} ({item.students.toLocaleString()} students)
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.duration}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right ml-6">
                    <div className="text-2xl font-bold text-gray-900 mb-1">${item.price}</div>
                    <div className="text-sm text-gray-500 line-through">${item.originalPrice}</div>
                    <div className="text-sm text-green-600 font-medium">
                      Save ${item.originalPrice - item.price}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                  <Link
                    to={`/courses/${item.id}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    View Details
                  </Link>

                  <div className="flex gap-3">
                    <button className="btn btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <button className="btn btn-secondary">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {wishlistItems.length === 0 && (
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-8">Start exploring courses and save your favorites here</p>
          <Link to="/catalog" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
      )}

      {/* Continue Shopping */}
      <div className="mt-12 text-center">
        <Link to="/catalog" className="btn btn-secondary">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
