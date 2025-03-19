
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    bio: 'Former data engineering lead at Snowflake with 15+ years of experience in building data infrastructure.'
  },
  {
    name: 'David Chen',
    role: 'CTO & Co-Founder',
    image: 'https://randomuser.me/api/portraits/men/42.jpg',
    bio: 'Machine learning expert who previously led data science teams at Google and Microsoft.'
  },
  {
    name: 'Maria Rodriguez',
    role: 'VP of Engineering',
    image: 'https://randomuser.me/api/portraits/women/54.jpg',
    bio: 'Passionate about building scalable systems with previous experience at AWS and Stripe.'
  },
  {
    name: 'James Wilson',
    role: 'VP of Product',
    image: 'https://randomuser.me/api/portraits/men/34.jpg',
    bio: 'Product leader focused on creating intuitive user experiences in complex technical domains.'
  },
  {
    name: 'Emily Chang',
    role: 'Head of Customer Success',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    bio: 'Dedicated to helping customers get maximum value from data with a background in data analytics.'
  },
  {
    name: 'Michael Smith',
    role: 'Lead Data Engineer',
    image: 'https://randomuser.me/api/portraits/men/53.jpg',
    bio: 'Architecture specialist with experience designing data systems that handle billions of events daily.'
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
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-flux-50 px-3 py-1 text-sm font-medium text-flux-800">
                About Flux
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                We're on a mission to make data accessible for everyone
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                At Flux, we believe that data should be a powerful tool for every business, not just for those with massive engineering teams.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Team collaborating"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-flux-900/40 to-transparent"></div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Our story</h2>
                  <p className="text-gray-600 mb-4">
                    Founded in 2021, Flux was born out of frustration with the existing data tools landscape. 
                    Our founders, Sarah Johnson and David Chen, experienced firsthand the challenges of building 
                    robust data pipelines at both startups and enterprise companies.
                  </p>
                  <p className="text-gray-600 mb-4">
                    They set out to create a data platform that combines the power of enterprise solutions with 
                    the simplicity and speed that modern teams need. Since then, we've grown to a team of 50+ 
                    data enthusiasts dedicated to making data workflows simpler and more accessible.
                  </p>
                  <p className="text-gray-600">
                    Today, Flux is used by thousands of companies worldwide, from fast-growing startups to 
                    Fortune 500 enterprises, all leveraging our platform to transform their data operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Our values</h2>
              <p className="text-xl text-gray-600 text-balance">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-flux-50 flex items-center justify-center text-flux-800 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Obsession</h3>
                <p className="text-gray-600">
                  We start with the customer and work backwards. We're committed to building what our users need, not what's easiest for us.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-flux-50 flex items-center justify-center text-flux-800 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                <p className="text-gray-600">
                  We believe in making complex things simple. Our platform is powerful but intuitive, saving our users time and cognitive load.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-flux-50 flex items-center justify-center text-flux-800 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Craftsmanship</h3>
                <p className="text-gray-600">
                  We take pride in our work and pay attention to details. Every feature, interaction, and line of code reflects our commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Meet our team</h2>
              <p className="text-xl text-gray-600 text-balance">
                The passionate people behind Flux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
                  <div className="aspect-[4/3] w-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-flux-700 mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Join our team</h2>
                <p className="text-xl opacity-80 mb-6">
                  We're always looking for talented individuals who are passionate about data and building great products.
                </p>
                <Link
                  to="/careers"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                >
                  View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden border-4 border-white/20 w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a77?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3" 
                    alt="Team working together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
