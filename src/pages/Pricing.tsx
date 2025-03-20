
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
      title: "AI Content Creation Assistant",
      description: "Monthly subscription with no upfront costs",
      price: "£150",
      features: [
        "Powerful GPT-driven AI that learns your unique tone of voice",
        "Automatically generates blog posts, emails, website content, and marketing copy",
        "Saves thousands on hiring copywriters while maintaining brand consistency",
        "Seamless integration with your existing content workflows"
      ],
      ctaText: "Get Started",
      ctaLink: "/book-call",
      isPopular: false
    },
    {
      title: "Built-out Projects",
      description: "Monthly subscription, cancel anytime",
      price: "£899",
      features: [
        "AI Content Creation Assistant with personalized tone learning",
        "AI-Powered Knowledge Base that answers customer questions instantly",
        "AI-Generated Lead Creation with verified business emails",
        "Automated Social Media Management with custom content",
        "All-in-One Secure AI Dashboard for centralized access",
        "24/7 technical support and regular updates",
        "Initial setup and onboarding assistance"
      ],
      ctaText: "Get Started",
      ctaLink: "/book-call",
      isPopular: true
    },
    {
      title: "Customised Projects",
      description: "Tailored solutions for specific needs",
      price: "Call",
      features: [
        "Automated bulk email sending and intelligence",
        "Bulk lead generation system",
        "Full CRM implementation and integration",
        "Custom AI model development",
        "Enterprise-level data processing",
        "Advanced analytics and reporting",
        "Dedicated project manager"
      ],
      ctaText: "Get Quote",
      ctaLink: "/book-call",
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: "How can AI automation benefit my business?",
      answer: "AI automation can significantly reduce manual tasks, increase efficiency, and provide data-driven insights. Our clients typically see a 30-40% reduction in operational costs and a 25% increase in productivity after implementing our AI solutions."
    },
    {
      question: "How long does it take to implement the AI Content Creation Assistant?",
      answer: "The AI Content Creation Assistant can be set up within 48 hours. We'll need about 2-3 hours of your time to understand your brand voice and content needs, after which our system will learn your unique tone and be ready to create content."
    },
    {
      question: "Do I need technical knowledge to use the AutomateX platform?",
      answer: "No technical knowledge required. Our AI dashboard is designed to be user-friendly with intuitive interfaces. We also provide comprehensive onboarding and training to ensure your team can maximize the value of our AI tools."
    },
    {
      question: "Can your AI solutions integrate with my existing software?",
      answer: "Yes. Our AI systems are built to integrate with most popular business tools including CRMs, email marketing platforms, social media management tools, and content management systems. We'll assess your current tech stack during the discovery phase."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "All our plans include ongoing technical support. The Built-out Projects and Customized Projects packages include 24/7 support, regular system updates, and monthly performance reviews to ensure your AI systems continue to deliver optimal results."
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
