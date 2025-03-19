
import React from 'react';
import { ArrowUpRight, MessageSquare, Workflow, BarChart3, GitMerge, Zap, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'AI-Driven Workflow Automation',
    description: 'Streamline repetitive tasks and processes with intelligent workflow automation that learns from your business.',
    icon: Workflow,
    color: 'bg-blue-500',
  },
  {
    title: 'CRM & Marketing Automation',
    description: 'Enhance customer relationships and marketing effectiveness with automated engagement strategies.',
    icon: MessageSquare,
    color: 'bg-purple-500',
  },
  {
    title: 'AI Chatbot Integration',
    description: 'Provide 24/7 customer support and streamline inquiries with intelligent conversational AI.',
    icon: Bot,
    color: 'bg-green-500',
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Transform raw data into actionable insights to guide strategic business decisions.',
    icon: BarChart3,
    color: 'bg-yellow-500',
  },
  {
    title: 'Process Optimization',
    description: 'Identify bottlenecks and inefficiencies in your operations with AI-powered process analysis.',
    icon: GitMerge,
    color: 'bg-red-500',
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored automation solutions designed specifically for your unique business challenges.',
    icon: Zap,
    color: 'bg-indigo-500',
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
