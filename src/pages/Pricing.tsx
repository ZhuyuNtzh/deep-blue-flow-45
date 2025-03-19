
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCard from '@/components/PricingCard';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
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

  const enterpriseFeatures = [
    "Single Sign-On (SSO) integration",
    "Dedicated support team",
    "Custom SLAs",
    "24/7 monitoring",
    "Private cloud deployment options",
    "HIPAA and GDPR compliance",
    "Data residency options",
    "Custom training and onboarding",
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
                Simple, transparent pricing for all your data needs
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Choose the plan that's right for you, with no hidden fees or surprises
              </p>
              <div className="inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800">
                All plans include a 14-day free trial
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
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

        {/* Enterprise Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Enterprise-grade features</h2>
                <p className="text-xl text-gray-600 text-balance">
                  Everything you need for enterprise-scale data operations
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-flux-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                  >
                    Contact Sales Team <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Frequently asked questions</h2>
                <p className="text-xl text-gray-600 text-balance">
                  Everything you need to know about our pricing and plans
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">How does the 14-day trial work?</h3>
                  <p className="text-gray-600">
                    You'll get full access to all features of the plan you choose for 14 days. No credit card required, and you can cancel anytime.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade or downgrade your plan at any time. Changes to your billing will be prorated.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">What happens if I exceed my row limit?</h3>
                  <p className="text-gray-600">
                    We'll notify you when you're approaching your limit. You can upgrade to a higher plan or pay for additional rows at a prorated cost.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-gray-600">
                    Yes, you'll receive a 15% discount when you choose annual billing for any of our plans.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Is there a minimum contract length?</h3>
                  <p className="text-gray-600">
                    No, all our plans are month-to-month unless you choose annual billing. You can cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to get started?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                Start your 14-day free trial today. No credit card required.
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
                  Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" />
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

export default Pricing;
