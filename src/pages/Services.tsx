
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Check, FileEdit, Database, Target, Share2, Shield } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'content',
      title: 'AI Content Creation Assistant',
      description: 'A powerful GPT-driven AI that learns your unique tone of voice and creates compelling content for all your business needs.',
      icon: FileEdit,
      color: 'bg-blue-500',
      benefits: [
        'A powerful GPT-driven AI that learns your unique tone of voice',
        'Automatically generates blog posts, emails, website content, and marketing copy',
        'Saves thousands on hiring copywriters while maintaining brand consistency',
        'Seamless integration with your existing content workflows'
      ]
    },
    {
      id: 'knowledge',
      title: 'AI-Powered Knowledge Base & Digital Business Card',
      description: 'A smart AI-driven repository containing everything about your company, acting as an interactive business card that answers questions instantly.',
      icon: Database,
      color: 'bg-purple-500',
      benefits: [
        'A smart AI-driven repository containing everything about your company',
        'Acts as a dynamic, interactive business card that answers sales and customer questions instantly',
        'Helps prospects understand your products/services without human intervention',
        'Reduces response time and boosts customer engagement'
      ]
    },
    {
      id: 'leads',
      title: 'AI-Generated Lead Creation',
      description: 'Generate thousands of high-quality leads with verified business email addresses and AI-powered research on each company.',
      icon: Target,
      color: 'bg-green-500',
      benefits: [
        'Generate thousands of high-quality leads with verified business email addresses',
        'AI-powered research on each company to provide key insights and context',
        'Ready-to-send, automated, and personalized email campaigns in just two clicks',
        'A game-changer for sales teams looking to scale outreach effortlessly'
      ]
    },
    {
      id: 'social',
      title: 'Automated Social Media Management',
      description: 'Instantly generate and schedule engaging social media posts with AI-created customized images and captions tailored to your brand.',
      icon: Share2,
      color: 'bg-yellow-500',
      benefits: [
        'Instantly generate and schedule engaging social media posts',
        'AI creates customized images and captions tailored to your brand',
        'Saves hours of manual work, ensuring a consistent online presence',
        'Increases engagement and streamlines social media marketing'
      ]
    },
    {
      id: 'dashboard',
      title: 'All-in-One Secure AI Dashboard',
      description: 'A centralized, user-friendly dashboard accessible via secure login, combining all AI features into a single, easy-to-navigate interface.',
      icon: Shield,
      color: 'bg-red-500',
      benefits: [
        'A centralized, user-friendly dashboard accessible via secure login',
        'Combines all AI features into a single, easy-to-navigate interface',
        'Designed for business owners, marketers, and sales teams to boost efficiency',
        'Ensures data security while offering a seamless automation experience'
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
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Advanced AI Features for Your Business
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-balance">
                  Our comprehensive suite of AI-powered solutions designed to streamline operations and boost growth
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-24">
              {services.map((service, index) => (
                <ScrollAnimation 
                  key={service.id} 
                  id={service.id} 
                  animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
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
                      to="/book-demo"
                      className="inline-flex items-center px-5 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                    >
                      Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
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
                          {service.id === 'content' && "A marketing agency saved £4,000 monthly by using our AI Content Assistant instead of freelance writers."}
                          {service.id === 'knowledge' && "An IT consulting firm increased sales conversion by 45% with our AI Knowledge Base answering prospect questions 24/7."}
                          {service.id === 'leads' && "A SaaS startup generated 2,500 qualified leads in 3 weeks, resulting in 12 new enterprise clients."}
                          {service.id === 'social' && "A small e-commerce business reduced social media management time from 15 hours to 2 hours weekly."}
                          {service.id === 'dashboard' && "A professional services firm streamlined operations by 35% after implementing our AI Dashboard."}
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
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Ready to transform your business with AI?
                </h2>
                <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                  Schedule a free 20-minute discovery demo to discuss your specific needs and challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/book-demo"
                    className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                  >
                    Book Your Free Demo
                  </Link>
                  <Link
                    to="/pricing"
                    className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    View Pricing <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
