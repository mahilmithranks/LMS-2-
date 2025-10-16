import React from 'react';

const LessonViewPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lesson View</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <p className="text-muted-foreground">
            This is where the lesson content would be displayed.
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Code Editor</h2>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <span className="text-muted-foreground">Monaco Editor will be here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonViewPage;
