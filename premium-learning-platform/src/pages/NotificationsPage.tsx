import React from 'react';
import { Bell, Heart, ShoppingCart, Trophy, Star, Clock, X, Check } from 'lucide-react';

const NotificationsPage: React.FC = () => {
  const notifications = [
    {
      id: '1',
      type: 'achievement',
      title: 'Achievement Unlocked!',
      message: 'You completed "React Hooks Masterclass"',
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      time: '2 hours ago',
      unread: true
    },
    {
      id: '2',
      type: 'course',
      title: 'Course Added to Wishlist',
      message: 'You saved "Advanced TypeScript" to your wishlist',
      icon: Heart,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      time: '5 hours ago',
      unread: true
    },
    {
      id: '3',
      type: 'cart',
      title: 'Item Added to Cart',
      message: 'You added "Python Data Science" to your cart',
      icon: ShoppingCart,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      time: '1 day ago',
      unread: false
    },
    {
      id: '4',
      type: 'review',
      title: 'Course Review Reminder',
      message: 'How was your experience with "Node.js API Design"?',
      icon: Star,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      time: '2 days ago',
      unread: false
    },
    {
      id: '5',
      type: 'milestone',
      title: 'Learning Milestone Reached!',
      message: 'You\'ve completed 50 hours of learning this month',
      icon: Clock,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      time: '3 days ago',
      unread: false
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Bell className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
        </div>
        <p className="text-xl text-gray-600">
          Stay updated with your learning progress and platform updates
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4 mb-8">
        <button className="btn btn-primary">
          Mark All as Read
        </button>
        <button className="btn btn-secondary">
          Clear All
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
              notification.unread
                ? `${notification.bgColor} ${notification.borderColor} shadow-md`
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${notification.bgColor} flex items-center justify-center ${notification.color}`}>
                <notification.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {notification.title}
                      {notification.unread && (
                        <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                      )}
                    </h3>
                    <p className="text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 ml-4">
                    {!notification.unread && (
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Check className="w-4 h-4" />
                      </button>
                    )}
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {notifications.length === 0 && (
        <div className="text-center py-16">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No notifications yet</h3>
          <p className="text-gray-600 mb-8">We'll notify you about course updates, achievements, and more</p>
          <button className="btn btn-primary">
            Explore Courses
          </button>
        </div>
      )}

      {/* Notification Settings */}
      <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Course Updates</h4>
              <p className="text-sm text-gray-600">Get notified about new lessons and course updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Achievement Notifications</h4>
              <p className="text-sm text-gray-600">Celebrate your learning milestones and badges</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Marketing Updates</h4>
              <p className="text-sm text-gray-600">New courses, promotions, and platform news</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Community Interactions</h4>
              <p className="text-sm text-gray-600">Replies, mentions, and study group updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="btn btn-primary">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
