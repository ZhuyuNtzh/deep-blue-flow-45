
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Workflow, MessageSquare, Bot, BarChart3, GitMerge, Zap, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'workflow',
      title: 'AI-Driven Workflow Automation',
      description: 'Eliminate repetitive tasks and streamline processes with intelligent workflows that adapt to your business needs.',
      icon: Workflow,
      color: 'bg-blue-500',
      benefits: [
        'Reduce manual data entry by up to 90%',
        'Automate document processing and approvals',
        'Create conditional workflows that adapt to different scenarios',
        'Integrate with your existing tools and software',
        'Free up your team to focus on high-value work'
      ]
    },
    {
      id: 'crm',
      title: 'CRM & Marketing Automation',
      description: 'Build stronger customer relationships and generate more leads with AI-powered marketing automation.',
      icon: MessageSquare,
      color: 'bg-purple-500',
      benefits: [
        'Automate lead nurturing and follow-ups',
        'Segment customers based on behavior patterns',
        'Personalize communications at scale',
        'Optimize email campaigns with AI-driven timing',
        'Track and analyze customer engagement automatically'
      ]
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot Integration',
      description: 'Provide instant support and engage with customers 24/7 through intelligent conversational AI.',
      icon: Bot,
      color: 'bg-green-500',
      benefits: [
        'Handle common customer inquiries automatically',
        'Qualify leads before routing to sales teams',
        'Provide instant responses at any time of day',
        'Continuously improve with machine learning',
        'Seamless handoff to human agents when needed'
      ]
    },
    {
      id: 'data',
      title: 'Data-Driven Decision Making',
      description: 'Transform your business data into actionable insights with AI-powered analytics and reporting.',
      icon: BarChart3,
      color: 'bg-yellow-500',
      benefits: [
        'Automated data collection and consolidation',
        'Real-time dashboards and visualization',
        'Predictive analytics to forecast trends',
        'Anomaly detection to identify issues early',
        'Automated reporting and insights delivery'
      ]
    },
    {
      id: 'process',
      title: 'Process Optimization',
      description: 'Identify inefficiencies and streamline operations with AI-powered process analysis and improvement.',
      icon: GitMerge,
      color: 'bg-red-500',
      benefits: [
        'Identify bottlenecks in your current workflows',
        'Model process improvements before implementation',
        'Automate complex multi-step processes',
        'Measure and track performance improvements',
        'Continuous optimization based on real data'
      ]
    },
    {
      id: 'custom',
      title: 'Custom AI Solutions',
      description: 'Tailored automation solutions designed specifically for your unique business challenges and goals.',
      icon: Zap,
      color: 'bg-indigo-500',
      benefits: [
        'Custom AI models trained on your business data',
        'Bespoke solutions for industry-specific challenges',
        'Integration with proprietary systems',
        'Scalable architecture to grow with your business',
        'Ongoing support and enhancement'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                AI Automation Services for Small Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Our comprehensive suite of AI-powered automation solutions designed to streamline operations and boost growth
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                    <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <h3 className="text-lg font-semibold">Key Benefits:</h3>
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to="/book-call"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                    >
                      Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-flux-100 to-flux-50 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
                      <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="aspect-w-16 aspect-h-9 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                          <div className="bg-flux-800/10 w-full h-full flex items-center justify-center">
                            <service.icon className="w-16 h-16 text-flux-800/40" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Case Example</h3>
                        <p className="text-gray-600 mb-4">
                          {index === 0 && "A retail business reduced order processing time from 2 hours to 15 minutes with our workflow automation."}
                          {index === 1 && "A service company increased customer retention by 35% through automated, personalized follow-ups."}
                          {index === 2 && "An e-commerce store handled 78% of customer inquiries automatically, saving 30 hours per week."}
                          {index === 3 && "A manufacturing firm identified $50,000 in annual savings using our data analysis automation."}
                          {index === 4 && "A healthcare provider reduced administrative workload by 40% through process optimization."}
                          {index === 5 && "A specialized consulting firm automated client reporting, reducing preparation time by 85%."}
                        </p>
                        <Link 
                          to="/case-studies"
                          className="inline-flex items-center text-flux-700 font-medium hover:text-flux-800 transition-colors"
                        >
                          View full case study <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to automate your business?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                Schedule a free 20-minute discovery call to discuss your specific needs and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-call"
                  className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                >
                  Book Your Free Call
                </Link>
                <Link
                  to="/pricing"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Pricing <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
