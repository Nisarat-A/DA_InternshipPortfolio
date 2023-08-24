import React from 'react'
interface AboutMeProp {
  title: string;
  description: string;
}

const AboutMe: React.FC<AboutMeProp> = ({ title, description }) =>{
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-600">
          Hi there! I'm Nisarat, a passionate data enthusiast and aspiring data
          analyst. I have a strong curiosity about the world of data and how it
          can drive insights and decisions in various domains.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          My journey in the world of data began when I realized the power of
          analyzing information to extract meaningful patterns and trends. I
          enjoy transforming raw data into actionable insights that can guide
          strategies and solve real-world problems.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Whether it's diving into financial data to uncover market trends or
          using statistical methods to interpret economic indicators, I'm always
          excited to explore new datasets and discover hidden insights. My
          background in data analysis, combined with my curiosity and analytical
          mindset, drives my passion for making data-driven decisions.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Outside of data, I also have a creative side – I love graphic design
          and often find myself experimenting with design tools to create
          visually appealing content.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Feel free to connect with me and explore my portfolio to learn more
          about my projects and interests. Let's embark on this data-driven
          journey together!
        </p>
      </div>
    </section>
  )
}

export default AboutMe
