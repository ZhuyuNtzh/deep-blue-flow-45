
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'AI Content Creation Assistant',
    description: [
      'Generates high-quality blog posts, emails, website content, and marketing copy using advanced GPT-driven AI.',
      'Learns and adapts to your brand\'s unique tone of voice for consistent messaging.',
      'Reduces costs by eliminating the need for expensive copywriters.',
      'Seamlessly integrates with existing content workflows.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    )
  },
  {
    title: 'AI-Powered Knowledge Base & Digital Business Card',
    description: [
      'A smart AI repository containing everything about your company.',
      'Acts as an interactive business card, instantly answering sales and customer queries.',
      'Provides instant, accurate responses to prospects, reducing the need for human intervention.',
      'Improves response times and customer engagement.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: 'AI-Generated Lead Creation',
    description: [
      'Generates thousands of high-quality leads with verified business email addresses.',
      'AI-powered research provides key insights into each prospect for better outreach.',
      'Automated and personalised email campaigns in just a few clicks.',
      'Ideal for sales teams looking to scale their outreach effortlessly.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  },
  {
    title: 'Automated Social Media Management',
    description: [
      'Instantly creates and schedules engaging social media content.',
      'AI-generated images and captions tailored to your brand.',
      'Saves time and ensures a consistent, high-quality online presence.',
      'Boosts engagement and streamlines digital marketing efforts.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    )
  },
  {
    title: 'All-in-One Secure AI Dashboard',
    description: [
      'A centralised, user-friendly platform accessible via secure login.',
      'Combines all AI automation features into one easy-to-navigate interface.',
      'Designed for business owners, marketers, and sales teams to maximise efficiency.',
      'Ensures data security while offering a seamless automation experience.'
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    )
  }
];

const reasons = [
  {
    title: 'Innovation-Driven Approach',
    description: 'We continuously refine and develop our AI technology to stay ahead of industry trends.'
  },
  {
    title: 'Customised AI Solutions',
    description: 'Every business has unique needs, and our AI tools adapt to fit specific requirements.'
  },
  {
    title: 'Seamless Integration',
    description: 'Our solutions integrate effortlessly with existing workflows and business systems.'
  },
  {
    title: 'Proven Results',
    description: 'Businesses using our AI tools save time, reduce costs, and increase revenue through smarter automation.'
  }
];

const About = () => {
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
                <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800">
                  About Us
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Empowering Businesses with AI-Driven Automation
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-balance">
                  At AutomateX, we are redefining the way businesses operate. Our cutting-edge AI automation solutions eliminate repetitive tasks, enhance productivity, and streamline operations—allowing teams to focus on what truly matters.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <ScrollAnimation animation="fade-right" className="md:w-1/2">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Team collaborating"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-flux-900/40 to-transparent"></div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-left" className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Our Story</h2>
                  <p className="text-gray-600 mb-4">
                    AutomateX was founded with a clear vision: to make AI accessible, intuitive, and impactful for businesses of all sizes. We recognised the growing frustration of companies struggling with inefficient workflows, slow response times, and resource-heavy processes.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The solution? A fully integrated AI system that automates critical business functions while maintaining the personal touch that customers expect. Through innovation, expertise, and a relentless focus on results, we have built a suite of AI tools designed to transform the way businesses operate.
                  </p>
                  <p className="text-gray-600">
                    Our technology is not just about automation—it's about empowerment. With intelligent automation, businesses can create, communicate, and connect with customers more efficiently than ever before.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Our Solutions</h2>
                <p className="text-xl text-gray-600 text-balance">
                  We offer a powerful suite of AI-driven tools that help businesses save time, increase efficiency, and scale faster.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {solutions.map((solution, index) => (
                <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full">
                    <div className="w-12 h-12 rounded-lg bg-flux-50 flex items-center justify-center text-flux-800 mb-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <ul className="space-y-2">
                      {solution.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-flux-600 mr-2 flex-shrink-0">•</span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Why Businesses Choose Us</h2>
                <p className="text-xl text-gray-600 text-balance">
                  Our commitment to excellence sets us apart in the AI automation industry
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {reasons.map((reason, index) => (
                <ScrollAnimation key={index} animation="fade-in" delay={index * 100}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation animation="fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">The Future of Business is AI-Powered</h2>
                  <p className="text-xl opacity-80 mb-6">
                    At AutomateX, we don't just automate tasks—we transform the way businesses work. Whether you want to improve content creation, lead generation, or customer engagement, our AI solutions help you achieve more with less effort.
                  </p>
                  <p className="text-lg opacity-90 mb-8">
                    Ready to embrace the future of automation? Contact us today and discover how AI can revolutionise your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                    >
                      Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
