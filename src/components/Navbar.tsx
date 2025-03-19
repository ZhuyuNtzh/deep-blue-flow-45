
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        {
          'bg-white/80 backdrop-blur-md shadow-sm': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-flux-900 transition-opacity duration-200 hover:opacity-80"
          >
            <span className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-flux-700 to-flux-900 flex items-center justify-center text-white font-semibold text-sm">
                Fx
              </div>
              Flux
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? 'text-flux-800 bg-flux-50'
                    : 'text-gray-600 hover:text-flux-800 hover:bg-gray-100'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 rounded-md bg-flux-800 text-white text-sm font-medium transition-all duration-200 hover:bg-flux-700 button-hover-effect"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-md text-sm font-medium transition-all duration-200',
                    location.pathname === link.href
                      ? 'text-flux-800 bg-flux-50'
                      : 'text-gray-600 hover:text-flux-800 hover:bg-gray-100'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-2 px-4 py-3 rounded-md bg-flux-800 text-white text-sm font-medium text-center transition-all duration-200 hover:bg-flux-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
