import React from 'react';

const CommunityHubPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Community Hub</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Discussions</h2>
          <p className="text-muted-foreground">Join conversations with fellow learners</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Study Groups</h2>
          <p className="text-muted-foreground">Find or create study groups</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          <p className="text-muted-foreground">Upcoming community events</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityHubPage;
