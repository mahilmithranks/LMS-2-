import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">
              CodeSphere Academy
            </h1>
            <p className="text-muted-foreground mt-2">
              Your journey to coding mastery starts here
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
