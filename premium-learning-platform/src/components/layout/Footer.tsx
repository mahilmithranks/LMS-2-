import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Code, BookOpen, Users, Briefcase, Heart, Award, Shield, Zap } from 'lucide-react';

const footerNavigation = {
  learn: [
    { name: 'Courses', href: '/catalog', icon: BookOpen },
    { name: 'Learning Paths', href: '/paths', icon: Code },
    { name: 'Practice', href: '/practice', icon: BookOpen },
    { name: 'Assessments', href: '/assessments', icon: Award },
  ],
  community: [
    { name: 'Discussions', href: '/community/discussions', icon: Users },
    { name: 'Study Groups', href: '/community/groups', icon: Users },
    { name: 'Events', href: '/community/events', icon: Users },
    { name: 'Mentorship', href: '/community/mentorship', icon: Users },
  ],
  career: [
    { name: 'Portfolio', href: '/career/portfolio', icon: Briefcase },
    { name: 'Job Board', href: '/career/jobs', icon: Briefcase },
    { name: 'Interview Prep', href: '/career/interviews', icon: Briefcase },
    { name: 'Resume Builder', href: '/career/resume', icon: Briefcase },
  ],
  company: [
    { name: 'About', href: '/about', icon: Code },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'DMCA', href: '/dmca' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CodeSphere</span>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering the next generation of developers through project-based learning,
              interactive challenges, and a supportive community of learners and experts.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@codesphere.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {[
            { title: 'Learn', items: footerNavigation.learn },
            { title: 'Community', items: footerNavigation.community },
            { title: 'Career', items: footerNavigation.career },
          ].map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-lg mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <item.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Company Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>© 2024 CodeSphere Academy. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6">
                {footerNavigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Trusted by 50K+ learners</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with ❤️ for developers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
