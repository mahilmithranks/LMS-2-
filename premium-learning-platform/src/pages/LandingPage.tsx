import React from 'react';
import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-200 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-gray-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-gray-200 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              🚀 Now Available - Advanced Learning Paths
            </div>

            <h1 className="hero-title mb-8 text-gray-900">
              Master Coding Through
              <span className="block mt-2 text-blue-600">
                Real Projects
              </span>
            </h1>

            <p className="hero-subtitle mb-12 text-lg lg:text-xl text-gray-600">
              Join the next generation of developers learning by building. Interactive coding challenges,
              portfolio-ready projects, and a supportive community await you.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn btn-primary text-lg px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl group">
                Start Learning Today
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn btn-secondary text-lg px-10 py-5 rounded-2xl border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600">
                Explore Courses
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-blue-600">50K+</div>
                <div className="text-sm opacity-90">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-blue-600">500+</div>
                <div className="text-sm opacity-90">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-blue-600">1000+</div>
                <div className="text-sm opacity-90">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-blue-600">95%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm bg-white">
        <div className="container">
          <div className="grid grid-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-gray-300/50 to-gray-400/50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Most Popular Courses
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Featured Courses
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our most popular courses designed by industry experts to accelerate your career in tech
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'React & Next.js Masterclass',
                instructor: 'Sarah Johnson',
                rating: 4.9,
                students: 15420,
                duration: '24h',
                level: 'Intermediate',
                price: 89,
                originalPrice: 199,
                image: '⚛️',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Python Data Science Bootcamp',
                instructor: 'Dr. Michael Chen',
                rating: 4.8,
                students: 12890,
                duration: '32h',
                level: 'Beginner',
                price: 79,
                originalPrice: 149,
                image: '🐍',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Full-Stack Web Development',
                instructor: 'Alex Rodriguez',
                rating: 4.9,
                students: 9870,
                duration: '48h',
                level: 'Advanced',
                price: 129,
                originalPrice: 299,
                image: '🚀',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((course, i) => (
              <div key={i} className="group relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Course Image */}
                  <div className={`w-full h-48 bg-gradient-to-br ${course.gradient} rounded-2xl mb-6 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500`}>
                    {course.image}
                  </div>

                  {/* Level Badge */}
                  <div className="flex gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn from industry experts and build real-world projects that matter to your career growth.
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center font-semibold text-gray-700">
                        {course.instructor.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{course.instructor}</div>
                        <div className="text-sm text-gray-500">Expert Instructor</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">({course.students.toLocaleString()} students)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      12 lessons
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                      <span className="text-3xl font-bold text-green-600">${course.price}</span>
                    </div>
                    <button className={`px-6 py-3 bg-gradient-to-r ${course.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths - Enhanced Section */}
      <section className="section bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-white rounded-2xl shadow-lg mb-6">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Choose Your Learning Path
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Structured learning paths designed to take you from beginner to professional.
              Each path includes curated courses, projects, and mentorship.
            </p>
          </div>

          <div className="grid grid-3 mb-16">
            {[
              {
                title: 'Frontend Development',
                subtitle: 'Master Modern Web Interfaces',
                description: 'Learn React, Vue, and advanced CSS frameworks. Build stunning user interfaces that scale.',
                courses: 15,
                duration: '6 months',
                level: 'Beginner to Advanced',
                icon: '🎨',
                color: 'from-blue-500 via-cyan-500 to-teal-500',
                features: ['React & Next.js', 'Advanced CSS', 'UI/UX Design', 'Performance Optimization'],
                students: '12,450+',
                rating: 4.9,
                price: '$299',
                originalPrice: '$599'
              },
              {
                title: 'Backend Development',
                subtitle: 'Build Scalable Systems',
                description: 'Master server-side development with Node.js, Python, databases, and API design.',
                courses: 18,
                duration: '8 months',
                level: 'Intermediate to Expert',
                icon: '⚙️',
                color: 'from-green-500 via-emerald-500 to-lime-500',
                features: ['Node.js & Express', 'Python & Django', 'Database Design', 'API Architecture'],
                students: '8,920+',
                rating: 4.8,
                price: '$349',
                originalPrice: '$699'
              },
              {
                title: 'Full-Stack Development',
                subtitle: 'Complete Developer Journey',
                description: 'Master both frontend and backend development. Deploy applications and build complete systems.',
                courses: 25,
                duration: '12 months',
                level: 'Comprehensive Program',
                icon: '🚀',
                color: 'from-purple-500 via-pink-500 to-red-500',
                features: ['Full-Stack Architecture', 'DevOps & Deployment', 'System Design', 'Team Leadership'],
                students: '15,680+',
                rating: 4.9,
                price: '$499',
                originalPrice: '$999'
              }
            ].map((path, i) => (
              <div key={i} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${path.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>

                <div className="relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-3 border border-gray-100 overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent opacity-50"></div>

                  {/* Header */}
                  <div className="text-center mb-10 relative z-10">
                    <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${path.color} mx-auto mb-8 flex items-center justify-center text-5xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {path.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{path.title}</h3>
                    <p className="text-xl font-semibold text-gray-600 mb-4">{path.subtitle}</p>

                    {/* Level Badge & Rating */}
                    <div className="flex items-center justify-center gap-6 mb-6">
                      <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full font-semibold text-sm">
                        {path.level}
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} className="text-yellow-400 text-lg">⭐</span>
                          ))}
                        </div>
                        <span className="font-bold text-lg">{path.rating}</span>
                        <span className="text-gray-500">({path.students} students)</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-10 relative z-10">
                    <p className="text-gray-600 text-lg text-center leading-relaxed mb-8">
                      {path.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-6 text-center text-lg">What You'll Master:</h4>
                      <div className="grid grid-2 gap-3">
                        {path.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3 text-gray-600">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center gap-12 mb-10 text-center">
                      <div>
                        <div className="font-bold text-2xl text-gray-900 mb-1">{path.courses}</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wide">Courses</div>
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-gray-900 mb-1">{path.duration}</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wide">Duration</div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-10">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-gray-400 line-through">${path.originalPrice}</span>
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${path.price}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-6">Limited time offer - Save ${parseInt(path.originalPrice.replace('$', '')) - parseInt(path.price.replace('$', ''))}</div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${path.color} text-white shadow-2xl hover:shadow-3xl group-hover:shadow-purple-500/25`}>
                      Start Learning Path
                      <span className="ml-3 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🎓</div>
            <h3 className="text-2xl font-bold mb-4">All Learning Paths Include:</h3>
            <div className="grid grid-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Portfolio Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Job Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Community Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CodeSphere Academy?</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We're different from traditional coding bootcamps. Here's what makes us special.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                icon: '🎯',
                title: 'Project-Based Learning',
                description: 'Build real applications that you can add to your portfolio and show employers.'
              },
              {
                icon: '👥',
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of real-world experience.'
              },
              {
                icon: '🏆',
                title: 'Career Support',
                description: 'Get help with resume building, interview preparation, and job placement.'
              },
              {
                icon: '🔥',
                title: 'Interactive Challenges',
                description: 'Engage with hands-on coding exercises that make learning fun and effective.'
              },
              {
                icon: '📚',
                title: 'Comprehensive Curriculum',
                description: 'From basics to advanced topics, structured to maximize your learning journey.'
              },
              {
                icon: '⚡',
                title: 'Fast-Track Your Career',
                description: 'Accelerated learning paths designed to get you job-ready in months, not years.'
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-muted text-lg">
              Join thousands of successful developers who started their journey with us
            </p>
          </div>

          <div className="grid grid-3">
            {[
              {
                name: 'Emily Rodriguez',
                role: 'Frontend Developer at Google',
                content: 'CodeSphere Academy transformed my career. The project-based approach helped me build a portfolio that landed me my dream job.',
                avatar: 'ER',
                rating: 5
              },
              {
                name: 'Marcus Thompson',
                role: 'Full-Stack Engineer at Netflix',
                content: 'The instructors are incredible. Real industry experience and practical knowledge that you can\'t get from textbooks.',
                avatar: 'MT',
                rating: 5
              },
              {
                name: 'Sarah Kim',
                role: 'Software Engineer at Microsoft',
                content: 'Best investment I ever made. The community support and mentorship program are absolutely invaluable.',
                avatar: 'SK',
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers who are building their future with CodeSphere Academy
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn bg-white text-primary hover:bg-gray-50 text-lg px-8 py-4">
              Get Started Free
            </button>
            <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              View Course Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
