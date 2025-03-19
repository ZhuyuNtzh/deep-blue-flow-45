
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';
import { ArrowRight } from 'lucide-react';

const BookDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  Book Your Free Discovery Demo
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-balance">
                  Let's find a time to talk. Learn how AI can transform your business in just 30 minutes.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Calendly Integration */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in" className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/3 p-6 md:p-8 bg-flux-800 text-white">
                    <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <div>
                          <h3 className="font-semibold">30-Minute Demo</h3>
                          <p className="text-sm opacity-80">Brief, focused discussion about your business needs</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                          <h3 className="font-semibold">AI Solution Ideas</h3>
                          <p className="text-sm opacity-80">Get specific automation recommendations for your business</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                          <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div>
                          <h3 className="font-semibold">Next Steps Plan</h3>
                          <p className="text-sm opacity-80">Clear action plan to implement AI automation</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-80">
                        "Our discovery demos are designed to provide immediate value, even if you don't become a client."
                      </p>
                      <p className="mt-2 font-semibold">— AutomateX Team</p>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-0">
                    <InlineWidget 
                      url="https://calendly.com/jerry-penngate/30min"
                      styles={{
                        height: '650px'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <ScrollAnimation animation="fade-in" delay={200} className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Is the discovery demo really free?</h4>
                    <p className="text-gray-600">
                      Yes, absolutely. The 30-minute discovery demo is completely free with no obligation to purchase.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How should I prepare for the demo?</h4>
                    <p className="text-gray-600">
                      Think about your current business challenges and where automation might help, but no preparation is strictly necessary.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What happens after the demo?</h4>
                    <p className="text-gray-600">
                      We'll send you a follow-up email with a summary and recommendations. If there's a good fit, we'll propose next steps.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I reschedule if needed?</h4>
                    <p className="text-gray-600">
                      Yes, you can easily reschedule through the confirmation email you'll receive after booking.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookDemo;
