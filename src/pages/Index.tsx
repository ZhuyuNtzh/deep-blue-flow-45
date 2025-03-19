
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import PricingCard from '@/components/PricingCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, LineChart, Shield, Zap, Database } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      title: "Starter",
      description: "Perfect for individuals and small projects",
      price: "$49",
      features: [
        "Up to 5 data sources",
        "1 million rows per month",
        "Daily data syncs",
        "Standard support",
        "Basic analytics",
        "7 day data retention"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
      isPopular: false
    },
    {
      title: "Professional",
      description: "Ideal for growing teams and businesses",
      price: "$149",
      features: [
        "Up to 20 data sources",
        "10 million rows per month",
        "Hourly data syncs",
        "Priority support",
        "Advanced analytics",
        "30 day data retention",
        "Custom transformations"
      ],
      ctaText: "Get Started",
      ctaLink: "/contact",
      isPopular: true
    },
    {
      title: "Enterprise",
      description: "For organizations with advanced needs",
      price: "Custom",
      features: [
        "Unlimited data sources",
        "Customizable row limits",
        "Real-time data syncs",
        "Dedicated support",
        "AI-powered analytics",
        "Unlimited data retention",
        "Advanced security features",
        "Custom integrations"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      isPopular: false
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <Features />
        
        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                How Flux works
              </h2>
              <p className="text-xl text-gray-600 text-balance">
                A simple yet powerful workflow to handle all your data needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Connect</h3>
                <p className="text-gray-600">
                  Connect to your data sources with our pre-built connectors and start ingesting data in minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Transform</h3>
                <p className="text-gray-600">
                  Clean, validate, and transform your data with powerful yet simple transformation tools.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                  <LineChart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Analyze</h3>
                <p className="text-gray-600">
                  Gain insights from your data with advanced analytics and visualization capabilities.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/features" className="inline-flex items-center text-flux-700 font-medium hover:text-flux-800 transition-colors">
                Learn more about our workflow <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 text-balance">
                Choose the plan that's right for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  ctaText={plan.ctaText}
                  ctaLink={plan.ctaLink}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to transform your data workflow?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                Join thousands of data teams who have streamlined their operations with Flux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                >
                  Get Started Free
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
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

export default Index;
