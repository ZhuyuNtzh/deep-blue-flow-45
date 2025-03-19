
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0');
        const offsetX = (x - 0.5) * speed;
        const offsetY = (y - 0.5) * speed;
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="parallax-element absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-flux-100 opacity-60 blur-3xl"
          data-speed="20"
        ></div>
        <div 
          className="parallax-element absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-flux-200 opacity-50 blur-3xl"
          data-speed="30"
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-flux-500 mr-2"></span>
              AI-Powered Solutions for Small Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-up text-balance">
              Boost Productivity & Profits with
              <span className="text-gradient"> AI-Powered Automation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 lg:max-w-xl animate-fade-up opacity-0 animation-delay-100 text-balance">
              We help small businesses scale smarter with AI and automation solutions tailored for efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 animation-delay-200">
              <Link
                to="/book-call"
                className="px-6 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
              >
                Start Working Smarter
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block animate-fade-up opacity-0 animation-delay-300">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-flux-100 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-flux-200 rounded-full opacity-50 blur-xl"></div>
              
              <img 
                src="/lovable-uploads/83456b95-a15e-433b-a37a-c7513d962bbb.png" 
                alt="AI Automation Visualization" 
                className="rounded-xl shadow-2xl relative z-10 border border-gray-200"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative lg:mt-24">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent h-20 z-10 bottom-0"></div>
          <div className="relative z-0 max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-gray-200 glass animate-fade-up opacity-0 animation-delay-300">
            <div className="w-full h-[28rem] bg-gray-900 rounded-t-xl">
              <div className="w-full h-8 bg-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6 h-full overflow-hidden bg-gray-900 text-gray-300 text-sm font-mono flex flex-col">
                <div className="flex items-center mb-4">
                  <span className="text-green-400">$</span>
                  <span className="ml-2 animate-pulse-slow">automateX --workflow="customer_outreach" --execute</span>
                </div>
                <div className="space-y-2">
                  <div className="text-blue-400">✓ Connecting to CRM</div>
                  <div className="text-blue-400">✓ Identifying customer segments</div>
                  <div className="text-blue-400">✓ Generating personalized messages</div>
                  <div className="text-blue-400">✓ Scheduling follow-ups</div>
                  <div className="text-green-400 mt-4">✓ Workflow automated successfully</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
