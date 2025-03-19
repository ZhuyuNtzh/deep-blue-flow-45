
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle, Lightbulb, TrendingUp, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
      });
    }, 1500);
  };

  const newsletterBenefits = [
    {
      icon: Lightbulb,
      title: "AI Automation Insights",
      description: "Get practical tips and strategies for implementing AI in your business workflows."
    },
    {
      icon: TrendingUp,
      title: "Emerging Trends",
      description: "Stay ahead with updates on the latest automation technologies and best practices."
    },
    {
      icon: BarChart,
      title: "Case Studies & ROI Analysis",
      description: "Learn from real success stories with detailed before-and-after metrics."
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
                Stay Informed with AI Automation Insights
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Not ready to commit? Stay updated with practical AI automation strategies and trends in our bi-weekly newsletter.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 bg-flux-800 text-white">
                    <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
                    <p className="mb-6 opacity-90">
                      Get practical insights, case studies, and AI automation tips delivered to your inbox twice a month.
                    </p>
                    
                    <ul className="space-y-4">
                      {newsletterBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <benefit.icon className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold">{benefit.title}</h3>
                            <p className="text-sm opacity-80">{benefit.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="md:w-1/2 p-8">
                    {!isSubscribed ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div className="pt-2">
                          <Button 
                            type="submit" 
                            className="w-full bg-flux-800 hover:bg-flux-700 button-hover-effect"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Subscribing...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                Subscribe <Send className="ml-2 w-4 h-4" />
                              </span>
                            )}
                          </Button>
                        </div>
                        
                        <p className="text-xs text-gray-500 text-center mt-4">
                          We respect your privacy. Unsubscribe at any time.
                          No spam, just valuable content.
                        </p>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
                        <p className="text-gray-600 mb-6">
                          You're now on the list to receive our best automation insights and tips.
                        </p>
                        <Button 
                          onClick={() => setIsSubscribed(false)} 
                          variant="outline"
                          className="mr-2"
                        >
                          Subscribe Another Email
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-4">What Our Subscribers Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="italic text-gray-600 mb-3">
                      "The automation tips I've learned from this newsletter have saved my business countless hours. Highly recommend!"
                    </p>
                    <p className="font-medium text-gray-800">— Sarah T., Marketing Agency Owner</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="italic text-gray-600 mb-3">
                      "Clear, actionable advice that's helped us implement AI solutions I wouldn't have thought possible for our small business."
                    </p>
                    <p className="font-medium text-gray-800">— Michael R., E-commerce Entrepreneur</p>
                  </div>
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
                Ready for more than just advice?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                Book a discovery call to discuss how we can implement AI automation in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-call"
                  className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                >
                  Book a Free Discovery Call
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
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

export default Newsletter;
