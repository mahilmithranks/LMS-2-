import React from 'react';
import { Play, Trophy, Users, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, John! 👋
            </h1>
            <p className="text-primary-foreground/90 mb-4">
              You're on a 7-day learning streak! Keep it up!
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">Level 15</div>
                <div className="text-sm opacity-90">2,450 XP</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm opacity-90">Day Streak</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Trophy className="w-16 h-16 opacity-80" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Courses Completed</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Hours Learned</p>
              <p className="text-2xl font-bold">156</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Achievements</p>
              <p className="text-2xl font-bold">23</p>
            </div>
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Study Groups</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Continue Learning */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Advanced React Patterns',
                progress: 65,
                lesson: 'Custom Hooks Deep Dive',
                timeLeft: '25 min left'
              },
              {
                title: 'Node.js API Development',
                progress: 30,
                lesson: 'Authentication Middleware',
                timeLeft: '45 min left'
              }
            ].map((course, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.lesson}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{course.progress}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <Button size="sm">Continue</Button>
                  <p className="text-xs text-muted-foreground mt-1">{course.timeLeft}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
          <div className="space-y-4">
            {[
              {
                title: 'TypeScript Masterclass',
                category: 'Programming',
                rating: 4.9,
                students: 1250
              },
              {
                title: 'Docker for Developers',
                category: 'DevOps',
                rating: 4.8,
                students: 890
              }
            ].map((course, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-muted rounded-lg"></div>
                <div className="flex-1">
                  <h3 className="font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Daily Coding Challenge</h2>
            <p className="mb-4 opacity-90">
              Solve today's algorithm problem and earn bonus XP!
            </p>
            <p className="text-lg font-semibold">Two Sum Problem</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">+50 XP</div>
            <Button className="bg-white text-orange-500 hover:bg-white/90">
              Start Challenge
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
