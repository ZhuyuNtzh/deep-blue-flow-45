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
      className="relative min-h-[80vh] flex items-center bg-gray-50 overflow-hidden"
    >
      {/* Background elements - keep subtle for visual interest */}
      <div className="absolute inset-0 z-0">
        <div 
          className="parallax-element absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-flux-50 opacity-40 blur-3xl"
          data-speed="20"
        ></div>
        <div 
          className="parallax-element absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-flux-100 opacity-30 blur-3xl"
          data-speed="30"
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-flux-500 mr-2"></span>
              AI-Powered Solutions for Small Businesses
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-up">
              <span className="text-flux-700">AI Automation Agency</span> - Make AI 
              <span className="block">Work for Your Business</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-fade-up opacity-0 animation-delay-100">
              Automate your processes by leveraging the power of AI and No Code tools. 
              Cut costs, earn more, and focus on the highest-value activities.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 animation-delay-200">
              <Link
                to="/book-call"
                className="px-6 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                SCHEDULE A CALL
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
          
          {/* Right column - Network visualization image */}
          <div className="relative flex justify-center items-center">
            <img 
              src="/lovable-uploads/1fb279e4-aa8f-46ad-9d26-3c8fd9e65098.png" 
              alt="AI Network Visualization" 
              className="w-full max-w-lg h-auto object-contain animate-fade-in animation-delay-300"
            />
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-72 h-72 rounded-full bg-flux-100 blur-3xl opacity-70 -top-10 -right-10"></div>
            <div className="absolute -z-10 w-48 h-48 rounded-full bg-blue-100 blur-3xl opacity-70 bottom-10 -left-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
