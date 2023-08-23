import React from 'react';

const YellowHeader: React.FC = () => {
  return (
    <header className="bg-yellow-500 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Yellow Header</h1>
        {/* Add navigation links or other content here */}
      </div>
    </header>
  );
};

export default YellowHeader;