import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CatalogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Course Catalog</h1>
        <p className="text-muted-foreground">
          Discover our comprehensive collection of coding courses and learning paths.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder course cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Course Thumbnail</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Beginner
                </span>
                <span className="text-sm text-muted-foreground">Web Development</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Introduction to React Development
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn the fundamentals of React and build modern web applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                  <span className="text-sm text-muted-foreground">John Doe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm">4.8 (120)</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold">$49</span>
                <Button className="ml-auto">Enroll Now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
