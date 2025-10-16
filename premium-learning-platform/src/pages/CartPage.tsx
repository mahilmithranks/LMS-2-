import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Shield, Truck, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Advanced React Patterns',
      instructor: 'Sarah Johnson',
      price: 89,
      originalPrice: 199,
      image: '⚛️',
      quantity: 1
    },
    {
      id: '2',
      title: 'Python Machine Learning',
      instructor: 'Dr. Michael Chen',
      price: 99,
      originalPrice: 249,
      image: '🤖',
      quantity: 2
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/catalog" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Courses</span>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Shopping Cart</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            <div className="w-32"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingCart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Cart Items</h2>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 hover:shadow-md transition-all duration-300">
                  <div className="flex gap-6">
                    {/* Course Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {item.image}
                      </div>
                    </div>

                    {/* Course Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">by {item.instructor}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-600 dark:text-red-500 dark:hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors shadow-sm"
                            >
                              <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                            <span className="w-12 text-center font-semibold text-gray-900 dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center justify-center transition-colors shadow-sm"
                            >
                              <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</div>
                          {item.quantity > 1 && (
                            <div className="text-sm text-gray-500 dark:text-gray-400">${item.price} each</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sticky top-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Order Summary</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal ({cartItems.length} items)</span>
                    <span className="font-semibold text-lg text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  {savings > 0 && (
                    <div className="flex justify-between items-center py-2 text-green-600 dark:text-green-400">
                      <span className="font-medium">Total Savings</span>
                      <span className="font-semibold">-${savings.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 dark:text-gray-400">Tax (8%)</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-600" />

                  <div className="flex justify-between items-center py-3">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 mb-6">
                  <CreditCard className="w-5 h-5 mr-3 inline" />
                  Proceed to Checkout
                </button>

                <Link
                  to="/catalog"
                  className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  ← Continue Shopping
                </Link>

                {/* Security Features */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>Instant course access after purchase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Your cart is empty</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">Add some amazing courses to get started on your learning journey!</p>
              <Link
                to="/catalog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105 inline-block"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
