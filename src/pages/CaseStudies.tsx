
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Clock, DollarSign, Users, Briefcase } from 'lucide-react';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "67% Reduction in Customer Service Response Time",
      client: "Regional Retail Chain",
      industry: "Retail",
      challenge: "Overwhelmed customer service team unable to keep up with inquiries, leading to customer dissatisfaction and lost sales.",
      solution: "Implemented an AI chatbot to handle common customer inquiries and integrated automated email workflows for follow-ups.",
      results: [
        "67% reduction in average response time",
        "85% of common inquiries handled automatically",
        "Customer satisfaction score improved from 7.2 to 9.1",
        "Service team able to focus on complex issues requiring human expertise"
      ],
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "35% Increase in Sales Conversion Rate",
      client: "Professional Services Firm",
      industry: "Consulting",
      challenge: "Inefficient lead handling process causing delays in follow-ups and inconsistent communication with prospects.",
      solution: "Designed and implemented a CRM automation system with personalized follow-up sequences and lead scoring.",
      results: [
        "35% increase in lead-to-client conversion rate",
        "100% follow-up rate (up from 62%)",
        "28% reduction in sales cycle length",
        "Personalized communication at scale without adding staff"
      ],
      icon: DollarSign,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "42% Reduction in Administrative Workload",
      client: "Healthcare Provider",
      industry: "Healthcare",
      challenge: "Administrative staff spending excessive time on paperwork and manual data entry, limiting patient care time.",
      solution: "Automated document processing, appointment scheduling, and reporting workflows with integrated AI tools.",
      results: [
        "42% reduction in administrative workload",
        "22 hours per week redirected to patient care",
        "89% decrease in data entry errors",
        "Patient intake process reduced from 15 minutes to 3 minutes"
      ],
      icon: Briefcase,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "53% Improvement in Inventory Management Accuracy",
      client: "E-commerce Business",
      industry: "E-commerce",
      challenge: "Frequent inventory discrepancies leading to overselling, backorders, and customer disappointment.",
      solution: "Implemented an AI-driven inventory forecasting and management system with automated reordering.",
      results: [
        "53% improvement in inventory accuracy",
        "78% reduction in stockout incidents",
        "31% decrease in excess inventory",
        "Automated purchase orders based on sales velocity and seasonality"
      ],
      icon: BarChart,
      color: "bg-yellow-500"
    },
    {
      id: 5,
      title: "40% Productivity Boost for Remote Team",
      client: "Marketing Agency",
      industry: "Marketing",
      challenge: "Distributed team struggling with coordination, project visibility, and efficient collaboration.",
      solution: "Created custom workflow automation that integrated project management, communication, and asset management tools.",
      results: [
        "40% increase in overall team productivity",
        "67% reduction in project status meetings",
        "98% on-time project delivery (up from 74%)",
        "Improved visibility and accountability across departments"
      ],
      icon: Users,
      color: "bg-red-500"
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
                Real Results with AI Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                See how we've helped small businesses transform their operations and boost their bottom line
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-6 md:p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className={`${study.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                        <study.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{study.title}</h2>
                      <div className="text-sm text-gray-500 mb-1">Client: {study.client}</div>
                      <div className="text-sm text-gray-500 mb-4">Industry: {study.industry}</div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="font-semibold text-gray-800 mb-2">Key Metrics:</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                            <div className="text-xl font-bold text-flux-700">{study.results[0].split(' ')[0]}</div>
                            <div className="text-xs text-gray-600">Improvement</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                            <div className="text-xl font-bold text-flux-700">{study.results[1].split(' ')[0]}</div>
                            <div className="text-xs text-gray-600">Efficiency</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6 md:p-8">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">The Challenge</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <span className="bg-flux-100 text-flux-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mr-2 mt-0.5">{i+1}</span>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <Link
                          to="/book-call"
                          className="inline-flex items-center px-5 py-2 rounded-lg bg-flux-800 text-white text-sm font-medium hover:bg-flux-700 transition-all duration-300 shadow-sm button-hover-effect"
                        >
                          Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Ready to become our next success story?
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                Book a free discovery call to explore how AI automation can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-call"
                  className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                >
                  Book Your Free Call
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

export default CaseStudies;
