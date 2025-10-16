import React from 'react';

const CareerCenterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Career Center</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Builder</h2>
          <p className="text-muted-foreground">Create a stunning portfolio to showcase your projects</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Interview Prep</h2>
          <p className="text-muted-foreground">Practice with mock interviews and coding challenges</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Job Board</h2>
          <p className="text-muted-foreground">Find opportunities that match your skills</p>
        </div>
      </div>
    </div>
  );
};

export default CareerCenterPage;
