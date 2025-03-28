import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      <Navbar />
      <main>
        <Hero />
        
        <Features />
        
        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  How We Transform Your Business
                </h2>
                <p className="text-xl text-gray-600 text-balance">
                  Our proven approach to implementing AI automation for maximum impact
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <ScrollAnimation animation="fade-up" delay={100} className="scroll-stagger-item stagger-delay-1">
                <div className="text-center">
                  <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1. Discover</h3>
                  <p className="text-gray-600">
                    We analyse your business processes and identify automation opportunities.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={200} className="scroll-stagger-item stagger-delay-2">
                <div className="text-center">
                  <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">2. Design</h3>
                  <p className="text-gray-600">
                    We create custom AI automation solutions tailored to your specific needs.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={300} className="scroll-stagger-item stagger-delay-3">
                <div className="text-center">
                  <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">3. Implement</h3>
                  <p className="text-gray-600">
                    We deploy and integrate AI automation tools seamlessly into your workflow.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={400} className="scroll-stagger-item stagger-delay-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-flux-100 rounded-full flex items-center justify-center text-flux-800 mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">4. Optimise</h3>
                  <p className="text-gray-600">
                    We continuously refine your automation for maximum efficiency and ROI.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation animation="fade-in" delay={500}>
              <div className="text-center">
                <Link to="/services" className="inline-flex items-center text-flux-700 font-medium hover:text-flux-800 transition-colors">
                  Learn more about our approach <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-20 bg-flux-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Real Results for Small Businesses
                </h2>
                <p className="text-xl text-gray-600 text-balance">
                  Our clients achieve significant improvements in efficiency and profitability
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <ScrollAnimation animation="scale" delay={100} className="scroll-stagger-item stagger-delay-1">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-4xl font-bold text-flux-700 mb-2">40%</div>
                  <p className="text-gray-600">Average reduction in manual tasks</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={200} className="scroll-stagger-item stagger-delay-2">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-4xl font-bold text-flux-700 mb-2">3.5x</div>
                  <p className="text-gray-600">Increase in customer response speed</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={300} className="scroll-stagger-item stagger-delay-3">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-4xl font-bold text-flux-700 mb-2">25%</div>
                  <p className="text-gray-600">Typical revenue growth in 6 months</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Ready to transform your business with AI?
                </h2>
                <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">Book a free 30-minute discovery demo to explore how AI automation can help your business grow.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/book-call" className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect">
                    Book Your Free Demo
                  </Link>
                  <Link to="/newsletter" className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    Subscribe to Newsletter <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default Index;