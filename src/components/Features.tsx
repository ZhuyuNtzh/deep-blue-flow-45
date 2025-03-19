
import React from 'react';
import { ArrowUpRight, FileEdit, Database, Target, Share2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'AI Content Creation Assistant',
    description: 'A powerful GPT-driven AI that learns your unique tone of voice and creates compelling content for all your business needs.',
    icon: FileEdit,
    color: 'bg-blue-500',
  },
  {
    title: 'AI-Powered Knowledge Base & Digital Business Card',
    description: 'A smart AI-driven repository containing everything about your company, acting as an interactive business card that answers questions instantly.',
    icon: Database,
    color: 'bg-purple-500',
  },
  {
    title: 'AI-Generated Lead Creation',
    description: 'Generate thousands of high-quality leads with verified business email addresses and AI-powered research on each company.',
    icon: Target,
    color: 'bg-green-500',
  },
  {
    title: 'Automated Social Media Management',
    description: 'Instantly generate and schedule engaging social media posts with AI-created customized images and captions tailored to your brand.',
    icon: Share2,
    color: 'bg-yellow-500',
  },
  {
    title: 'All-in-One Secure AI Dashboard',
    description: 'A centralized, user-friendly dashboard accessible via secure login, combining all AI features into a single, easy-to-navigate interface.',
    icon: Shield,
    color: 'bg-red-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            AI-Powered Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 text-balance">
            Streamline operations, reduce costs, and scale smarter with our suite of AI automation services.
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
                to="/services"
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
