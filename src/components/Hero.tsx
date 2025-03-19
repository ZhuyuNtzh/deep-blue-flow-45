
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
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-flux-500 mr-2"></span>
            AI-Powered Solutions for Small Businesses
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-up text-balance">
            Boost Productivity & Profits with
            <span className="text-gradient"> AI-Powered Automation</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl animate-fade-up opacity-0 animation-delay-100 text-balance">
            We help small businesses scale smarter with AI and automation solutions tailored for efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 animation-delay-200 mb-12">
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
          
          {/* Floating Dashboard */}
          <div className="relative w-full max-w-5xl mx-auto animate-fade-up opacity-0 animation-delay-300">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-flux-100 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-flux-200 rounded-full opacity-50 blur-xl"></div>
            
            <div className="relative glass rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="w-full bg-gray-800 h-8 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-300 font-mono">AI Dashboard</div>
              </div>
              
              <div className="bg-gray-900 text-gray-300 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium text-white mb-2">Task Automation</h3>
                    <div className="h-2 bg-flux-700 rounded-full mb-2 relative overflow-hidden">
                      <div className="absolute h-full w-3/4 bg-flux-400 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">75% complete</p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium text-white mb-2">Customer Outreach</h3>
                    <div className="h-2 bg-flux-700 rounded-full mb-2 relative overflow-hidden">
                      <div className="absolute h-full w-1/2 bg-flux-400 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">50% optimised</p>
                  </div>
                  
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-medium text-white mb-2">Revenue Growth</h3>
                    <div className="h-2 bg-flux-700 rounded-full mb-2 relative overflow-hidden">
                      <div className="absolute h-full w-4/5 bg-flux-400 rounded-full"></div>
                    </div>
                    <p className="text-xs text-gray-400">32% increase</p>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <div className="text-xs font-mono flex-1">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse-slow">automateX --workflow="client_outreach" --optimise</span>
                  </div>
                  <div className="text-xs text-flux-400">System Active</div>
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
