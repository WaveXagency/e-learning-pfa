import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Empowering learners worldwide with quality education</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              We are dedicated to making quality education accessible to everyone, everywhere. 
              Our platform combines cutting-edge technology with expert instruction to create 
              an engaging and effective learning experience.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where anyone can learn anything, anywhere. By breaking down 
              barriers to education, we're helping to create a more knowledgeable and 
              empowered global community.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from course content to user experience.',
                icon: '⭐'
              },
              {
                title: 'Innovation',
                description: 'We continuously innovate to provide the best learning experience possible.',
                icon: '💡'
              },
              {
                title: 'Accessibility',
                description: 'We believe education should be accessible to everyone, regardless of their circumstances.',
                icon: '🌍'
              }
            ].map((value, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 