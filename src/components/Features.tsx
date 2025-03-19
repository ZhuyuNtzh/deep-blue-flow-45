
import React from 'react';
import { ArrowUpRight, Database, Zap, Layers, GitMerge, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Real-time Data Processing',
    description: 'Process vast amounts of data in real-time with our optimized streaming architecture.',
    icon: Zap,
    color: 'bg-blue-500',
  },
  {
    title: 'Data Warehousing',
    description: 'Store, organize, and manage your data with scalable warehousing solutions.',
    icon: Database,
    color: 'bg-purple-500',
  },
  {
    title: 'Seamless Integrations',
    description: 'Connect with hundreds of data sources and destinations with pre-built connectors.',
    icon: GitMerge,
    color: 'bg-green-500',
  },
  {
    title: 'Advanced Analytics',
    description: 'Transform raw data into actionable insights with powerful analytics tools.',
    icon: BarChart3,
    color: 'bg-yellow-500',
  },
  {
    title: 'Enterprise Security',
    description: 'Protect sensitive data with industry-leading security and compliance features.',
    icon: Shield,
    color: 'bg-red-500',
  },
  {
    title: 'Data Orchestration',
    description: 'Build complex data pipelines and workflows with our visual orchestration tools.',
    icon: Layers,
    color: 'bg-indigo-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Powerful features for modern data teams
          </h2>
          <p className="text-xl text-gray-600 text-balance">
            Everything you need to build, manage, and scale your data infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link 
                to="/features"
                className="inline-flex items-center text-flux-700 font-medium hover:text-flux-800 transition-colors"
              >
                Learn more <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
