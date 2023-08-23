import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 mb-8">
          Hi there! I'm Nisarat, a passionate data analyst with a strong
          interest in financial investments and the banking sector. I love
          exploring data and uncovering insights that drive informed
          decisions.
        </p>
        <h3 className="text-xl font-semibold mb-2">My Interests</h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Financial markets and trends</li>
          <li>Data-driven decision-making</li>
          <li>Economic analysis</li>
          <li>Machine learning in finance</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">My Focus Areas</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Analyzing stock market performance</li>
          <li>Creating predictive models for investment outcomes</li>
          <li>Exploring customer behavior in banking</li>
          <li>Identifying risk factors in financial data</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
