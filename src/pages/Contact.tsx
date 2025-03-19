
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Check, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="h-5 w-5 text-white" />
        </div>
      ),
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="w-full"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          className="w-full min-h-[120px]"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-flux-800 hover:bg-flux-700 text-white py-2 shadow-sm button-hover-effect"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

const Contact = () => {
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
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800">
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                We'd love to hear from you
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Have questions about Flux? Looking for a demo? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden">
                <div className="lg:w-2/5 bg-flux-900 text-white p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-white/80 mb-8">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-flux-300 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Our Office</h3>
                        <p className="text-white/70">
                          123 Innovation Way<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-flux-300 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-white/70">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-flux-300 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-white/70">hello@flux.io</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/20">
                    <h3 className="font-medium mb-4">Connect with us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-3/5 bg-white p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Frequently asked questions</h2>
                <p className="text-xl text-gray-600 text-balance">
                  Can't find the answer you're looking for? Reach out to our team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">How quickly can I get started with Flux?</h3>
                  <p className="text-gray-600">
                    You can sign up and get started with Flux in minutes. Our onboarding process is designed to be quick and straightforward, and you can connect your first data source on day one.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Do you offer a free trial?</h3>
                  <p className="text-gray-600">
                    Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">What kind of support do you provide?</h3>
                  <p className="text-gray-600">
                    We offer email and chat support for all plans. Our Professional and Enterprise plans include priority support with faster response times and dedicated support channels.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Can I migrate from my current data platform?</h3>
                  <p className="text-gray-600">
                    Yes, we have tools and guides to help you migrate from other platforms. Our team can provide personalized assistance with migration for Enterprise customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-balance">
                Stay updated with our newsletter
              </h2>
              <p className="text-gray-600 mb-6 text-balance">
                Get the latest news, product updates, and data insights delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                  required
                />
                <Button className="bg-flux-800 hover:bg-flux-700 text-white button-hover-effect">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
