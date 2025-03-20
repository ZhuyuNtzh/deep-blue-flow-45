
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { href: '/features', label: 'Features' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/changelog', label: 'Changelog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/documentation', label: 'Documentation' },
        { href: '/guides', label: 'Guides' },
        { href: '/api', label: 'API Reference' },
        { href: '/community', label: 'Community' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
        { href: '/security', label: 'Security' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-flux-700 to-flux-900 flex items-center justify-center text-white font-semibold text-sm mr-2">
                AX
              </div>
              <span className="text-xl font-bold text-gray-900">AutomateX</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              AutomateX provides AI-powered automation solutions that help businesses streamline operations, create engaging content, generate quality leads, and deliver exceptional customer experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-flux-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-flux-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-flux-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-flux-700 transition-colors text-sm inline-flex items-center"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} AutomateX, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-flux-700 transition-colors text-sm">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-flux-700 transition-colors text-sm">
              Terms
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-flux-700 transition-colors text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
