import React from 'react';

const CodePlaygroundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Code Playground</h1>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="bg-muted rounded-lg h-[600px] flex items-center justify-center">
          <span className="text-muted-foreground">Full-featured IDE will be here</span>
        </div>
      </div>
    </div>
  );
};

export default CodePlaygroundPage;
