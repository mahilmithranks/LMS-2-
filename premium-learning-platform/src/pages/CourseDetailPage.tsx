import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Star, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CourseDetailPage: React.FC = () => {
  const { id: _courseId } = useParams<{ id: string }>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Course Header */}
          <div className="mb-8">
            <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
              <Play className="w-16 h-16 text-muted-foreground" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                Intermediate
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                Web Development
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">
              Advanced React Patterns and Best Practices
            </h1>

            <p className="text-muted-foreground text-lg mb-6">
              Master advanced React concepts including custom hooks, context patterns,
              performance optimization, and modern state management techniques.
            </p>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground">(247 reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">1,234 students</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">12 hours</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <span className="font-semibold">JD</span>
              </div>
              <div>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Senior React Developer</p>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Custom hooks and reusable logic',
                'Advanced context patterns',
                'Performance optimization techniques',
                'State management with Zustand',
                'Testing React applications',
                'Server-side rendering with Next.js'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-lg p-6 sticky top-6">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary mb-2">$89</div>
              <div className="text-muted-foreground line-through">$129</div>
            </div>

            <Button className="w-full mb-4" size="lg">
              Enroll Now
            </Button>

            <Button variant="outline" className="w-full">
              Add to Wishlist
            </Button>

            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-3">This course includes:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 12 hours of on-demand video</li>
                <li>• 15 coding exercises</li>
                <li>• 3 downloadable resources</li>
                <li>• Full lifetime access</li>
                <li>• Access on mobile and TV</li>
                <li>• Certificate of completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
