import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingPlans = [
    {
      title: "Automation Strategy",
      description: "Professional consultation and planning",
      price: "£2,900",
      features: [
        "Process audit and analysis",
        "Automation opportunity mapping",
        "ROI calculation",
        "Software recommendations",
        "Implementation roadmap",
        "2 weeks of email support"
      ],
      ctaText: "Get Started",
      ctaLink: "/book-call",
      isPopular: false
    },
    {
      title: "Built-out Projects",
      description: "Full implementation of automation solutions",
      price: "£4,000",
      features: [
        "Complete setup of automation tools",
        "Workflow design and implementation",
        "Integration with existing systems",
        "Data migration (if needed)",
        "Testing and quality assurance",
        "Team training and documentation",
        "30 days of post-launch support"
      ],
      ctaText: "Get Started",
      ctaLink: "/book-call",
      isPopular: true
    },
    {
      title: "Ongoing Management",
      description: "Continuous optimisation and support",
      price: "£3,000",
      features: [
        "Annual AI automation review",
        "Quarterly optimisation sessions",
        "Continuous workflow improvements",
        "AI model retraining",
        "Priority technical support",
        "Monthly performance reports",
        "New feature implementation"
      ],
      ctaText: "Get Started",
      ctaLink: "/book-call",
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "What's included in the Automation Strategy package?",
      answer: "The Automation Strategy package includes a comprehensive analysis of your current workflows, identification of key automation opportunities, and a detailed implementation plan. We'll provide software recommendations, ROI calculations, and a roadmap for implementation."
    },
    {
      question: "How long does a typical automation project take?",
      answer: "Most Built-out Projects take 2-6 weeks from kickoff to full implementation, depending on complexity and scope. Simple automations can be completed in as little as a week, while more complex, multi-system integrations may take longer."
    },
    {
      question: "Do I need to be tech-savvy to use the automation solutions?",
      answer: "No. We design all our automation solutions to be user-friendly and provide comprehensive training for your team. Once implemented, most automations require minimal technical knowledge to maintain and operate."
    },
    {
      question: "Is there a minimum contract length for the Ongoing Management?",
      answer: "The Ongoing Management package is typically an annual commitment, billed either annually or quarterly. This ensures we can properly plan and execute continuous improvements to your automation systems."
    },
    {
      question: "Can you integrate with our existing software?",
      answer: "Yes. We specialise in integrating automation solutions with popular business software. During the discovery phase, we'll assess your current tech stack and design automations that work seamlessly with your existing tools."
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
                  Simple, transparent pricing for AI automation
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-balance">
                  Clear pricing packages designed to deliver maximum value for small businesses
                </p>
                <div className="inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800">
                  All packages include a free discovery demo
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <ScrollAnimation 
                  key={index} 
                  animation="fade-up" 
                  delay={index * 100}
                  className="scroll-stagger-item"
                >
                  <PricingCard 
                    title={plan.title}
                    description={plan.description}
                    price={plan.price}
                    features={plan.features}
                    isPopular={plan.isPopular}
                    ctaText={plan.ctaText}
                    ctaLink={plan.ctaLink}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Need a custom solution?</h2>
                  <p className="text-xl text-gray-600 text-balance">
                    We offer tailored packages for businesses with specific automation needs
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <ScrollAnimation animation="fade-in" delay={100}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Multi-system integrations</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Custom AI model development</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Industry-specific solutions</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Enterprise-scale automation</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">White-labelled solutions</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Dedicated support packages</span>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <Link
                      to="/book-call"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                    >
                      Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Frequently asked questions</h2>
                  <p className="text-xl text-gray-600 text-balance">
                    Everything you need to know about our AI automation services
                  </p>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <ScrollAnimation key={index} animation="fade-right" delay={index * 100}>
                      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Ready to get started with AI automation?
                </h2>
                <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                  Book your free discovery demo today and start your automation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/book-call"
                    className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                  >
                    Book Your Free Demo
                  </Link>
                  <Link
                    to="/services"
                    className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Explore Services <ArrowRight className="ml-2 w-4 h-4" />
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

export default Pricing;
