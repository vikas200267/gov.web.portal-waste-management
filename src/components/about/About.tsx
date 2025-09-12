import React from 'react';
import { Recycle, Leaf, Globe, BarChart3, Zap, Shield, Users, Target } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Advanced sensor technology continuously monitors waste levels in both organic and inorganic containers.',
    },
    {
      icon: BarChart3,
      title: 'ML-Powered Analytics',
      description: 'Machine learning algorithms analyze waste data to predict pollution levels and global warming impact.',
    },
    {
      icon: Globe,
      title: 'Environmental Impact',
      description: 'Track and visualize the environmental consequences of waste generation patterns.',
    },
    {
      icon: Shield,
      title: 'Cloud Integration',
      description: 'Secure Firebase cloud storage ensures data reliability and accessibility from anywhere.',
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Reduced Environmental Impact',
      description: 'By monitoring and analyzing waste patterns, we help reduce pollution and greenhouse gas emissions.',
    },
    {
      icon: Target,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions about waste management strategies based on real data and analytics.',
    },
    {
      icon: Users,
      title: 'Community Awareness',
      description: 'Raise awareness about environmental impact and encourage sustainable practices.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl">
            <Recycle className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Smart Waste Management System
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          An intelligent environmental monitoring solution that uses IoT sensors and machine learning 
          to track waste generation, calculate pollution levels, and assess global warming impact.
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Real-time Monitoring</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>ML Analytics</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Cloud Integration</span>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sensor Data Collection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              IoT sensors in separate containers continuously monitor organic and inorganic waste weights, 
              sending real-time data to our Firebase cloud database.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">ML Model Processing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced machine learning algorithms analyze the waste data to calculate pollution levels 
              and predict global warming impact based on waste composition and volume.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analytics & Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The processed data is presented through intuitive dashboards and analytics, 
              helping users understand environmental impact and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Environmental Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sensor Technology</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• High-precision weight sensors</li>
              <li>• Real-time data transmission</li>
              <li>• IoT connectivity</li>
              <li>• Weather-resistant design</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Processing</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Machine learning algorithms</li>
              <li>• Real-time analytics</li>
              <li>• Predictive modeling</li>
              <li>• Historical data analysis</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Infrastructure</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Firebase cloud storage</li>
              <li>• RESTful API architecture</li>
              <li>• Secure data transmission</li>
              <li>• Scalable infrastructure</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Environmental Revolution</h2>
        <p className="text-xl mb-8 text-green-100">
          Help us create a sustainable future through intelligent waste management and environmental monitoring.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-green-100">Monitoring</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">Real-time</div>
            <div className="text-sm text-green-100">Analytics</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">Cloud</div>
            <div className="text-sm text-green-100">Storage</div>
          </div>
        </div>
      </div>
    </div>
  );
};