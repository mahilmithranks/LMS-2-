import React, { useState } from 'react';
import { User, Settings, BookOpen, Trophy, Target, Calendar, Mail, Edit3, Camera, Shield, Bell, Palette, Globe } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, updatePreferences } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Redirect if not authenticated
  if (!isAuthenticated || !user) {
    return (
      <div className="container mx-auto px-6 py-8 text-center">
        <p className="text-gray-600">Please sign in to view your profile.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'learning', label: 'Learning Progress', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 mb-8">
        <div className="flex items-start gap-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              {user.avatar || user.name.charAt(0).toUpperCase()}
            </div>
            <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <button className="btn btn-secondary">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
            </div>

            <p className="text-gray-600 text-lg mb-6 max-w-2xl">
              Welcome to your CodeSphere Academy profile! Track your learning progress and manage your account settings.
            </p>

            <div className="grid grid-2 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Joined {new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{user.preferences?.darkMode ? '🌙' : '☀️'}</div>
                <div className="text-sm text-gray-600">Theme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{user.preferences?.notifications ? '🔔' : '🔕'}</div>
                <div className="text-sm text-gray-600">Notifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">📚</div>
                <div className="text-sm text-gray-600">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 mb-8">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Overview</h2>

            {/* Recent Activity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
              <div className="grid grid-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-900">Account Type</span>
                  </div>
                  <p className="text-gray-600">Student Account</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-900">Member Since</span>
                  </div>
                  <p className="text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Bell className="w-5 h-5 text-purple-500" />
                    <span className="font-medium text-gray-900">Notifications</span>
                  </div>
                  <p className="text-gray-600">
                    {user.preferences?.notifications ? 'Enabled' : 'Disabled'}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Palette className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-gray-900">Theme</span>
                  </div>
                  <p className="text-gray-600">
                    {user.preferences?.darkMode ? 'Dark Mode' : 'Light Mode'}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-3 gap-4">
                <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors text-center">
                  <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-blue-900">Continue Learning</div>
                </button>

                <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-center">
                  <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-purple-900">View Achievements</div>
                </button>

                <button className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors text-center">
                  <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-900">Set Goals</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'learning' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Progress</h2>

            {/* Progress Overview */}
            <div className="grid grid-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Learning Streak</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-600 mb-2">7</div>
                  <div className="text-blue-700">Days in a row!</div>
                  <div className="text-sm text-blue-600 mt-2">🔥 Keep it up!</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Courses Completed</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">12</div>
                  <div className="text-green-700">Courses finished</div>
                  <div className="text-sm text-green-600 mt-2">Great progress! 🎉</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Completed "React Hooks Masterclass"</h4>
                    <p className="text-gray-600">2 days ago • Earned 150 XP</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Started "Node.js API Development"</h4>
                    <p className="text-gray-600">5 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>

            <div className="grid grid-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-2xl border border-yellow-200 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-semibold text-yellow-900 mb-2">First Course Completed</h3>
                <p className="text-sm text-yellow-700">Earned on {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl border border-blue-200 text-center">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="font-semibold text-blue-900 mb-2">7-Day Streak</h3>
                <p className="text-sm text-blue-700">Current streak</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200 text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="font-semibold text-green-900 mb-2">React Expert</h3>
                <p className="text-sm text-green-700">Completed React course</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Unlock more achievements by completing courses and challenges!</p>
              <button className="btn btn-primary">
                View All Achievements
              </button>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>

            {/* Profile Settings */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
              <div className="grid grid-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue={user.name} className="input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue={user.email} className="input w-full" />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Email Notifications</div>
                      <div className="text-sm text-gray-600">Get notified about course updates and achievements</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={user.preferences?.notifications}
                      onChange={(e) => updatePreferences({ notifications: e.target.checked })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Dark Mode</div>
                      <div className="text-sm text-gray-600">Switch to dark theme</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={user.preferences?.darkMode}
                      onChange={(e) => updatePreferences({ darkMode: e.target.checked })}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="font-medium text-gray-900">Language</div>
                      <div className="text-sm text-gray-600">Choose your preferred language</div>
                    </div>
                  </div>
                  <select
                    className="input"
                    style={{ width: 'auto' }}
                    defaultValue={user.preferences?.language}
                    onChange={(e) => updatePreferences({ language: e.target.value })}
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-4">
                <button className="btn btn-secondary w-full justify-start">
                  <Shield className="w-5 h-5 mr-3" />
                  Change Password
                </button>
                <button className="btn btn-secondary w-full justify-start">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <h4 className="font-medium text-red-900 mb-2">Delete Account</h4>
                <p className="text-sm text-red-700 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="btn bg-red-600 text-white hover:bg-red-700">
                  Delete Account
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-between">
              <button className="btn btn-secondary">
                Reset to Defaults
              </button>
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
