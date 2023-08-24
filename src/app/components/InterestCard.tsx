import React from 'react';

interface InterestCardProps {
  title: string;
  description: string;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-70 backdrop-blur-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InterestCard;