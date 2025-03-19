import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { ArrowRight, Database, Zap, GitMerge, Shield, BarChart3, Layers, Workflow, Share2, Code, Clock, Server, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureSection = ({
  title,
  description,
  icon: Icon,
  color,
  imageUrl,
  reverse = false,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  imageUrl: string;
  reverse?: boolean;
}) => {
  return (
    <div className="py-16 border-b border-gray-200 last:border-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
          <ScrollAnimation animation={reverse ? "fade-left" : "fade-right"} className="md:w-1/2">
            <div className="max-w-lg">
              <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-xl text-gray-600 mb-6">{description}</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-flux-700 font-medium hover:text-flux-800 transition-colors"
              >
                Learn more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation={reverse ? "fade-right" : "fade-left"} className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featureSections = [
    {
      title: "Real-time Data Processing",
      description: "Process vast amounts of data in real-time with our optimized streaming architecture. Handle millions of events per second with low latency and high reliability.",
      icon: Zap,
      color: "bg-blue-500",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Data Warehousing",
      description: "Store, organize, and manage your data with scalable warehousing solutions. Our platform integrates seamlessly with popular data warehouses and provides tools to optimize your storage.",
      icon: Database,
      color: "bg-purple-500",
      imageUrl: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Seamless Integrations",
      description: "Connect with hundreds of data sources and destinations with pre-built connectors. From SaaS applications to databases, our platform makes it easy to bring all your data together.",
      icon: GitMerge,
      color: "bg-green-500",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with powerful analytics tools. Our platform provides visualization capabilities and integrates with your favorite BI tools.",
      icon: BarChart3,
      color: "bg-yellow-500",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Enterprise Security",
      description: "Protect sensitive data with industry-leading security and compliance features. Our platform is SOC 2 compliant and provides robust access controls, encryption, and audit logging.",
      icon: Shield,
      color: "bg-red-500",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Data Orchestration",
      description: "Build complex data pipelines and workflows with our visual orchestration tools. Define dependencies, schedule jobs, and monitor execution with ease.",
      icon: Layers,
      color: "bg-indigo-500",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const additionalFeatures = [
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks with triggers and actions",
      icon: Workflow
    },
    {
      title: "Collaboration",
      description: "Work together with team sharing and permissions",
      icon: Share2
    },
    {
      title: "Custom Transformations",
      description: "Write custom code to transform your data",
      icon: Code
    },
    {
      title: "Scheduled Jobs",
      description: "Run jobs on a schedule with flexible timing options",
      icon: Clock
    },
    {
      title: "Serverless Architecture",
      description: "Scale automatically with no infrastructure management",
      icon: Server
    },
    {
      title: "Advanced Monitoring",
      description: "Track performance and receive alerts on issues",
      icon: LineChart
    }
  ];

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
                  All-in-one platform
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  A complete toolkit for modern data teams
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-balance">
                  Explore our comprehensive suite of features designed to streamline your data workflow.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Feature Sections */}
        {featureSections.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            imageUrl={feature.imageUrl}
            reverse={index % 2 !== 0}
          />
        ))}

        {/* Additional Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-balance">Additional features</h2>
                <p className="text-xl text-gray-600 text-balance">
                  Everything you need to succeed with your data strategy
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {additionalFeatures.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in" delay={index * 50}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <feature.icon className="w-8 h-8 text-flux-700 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-flux-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <ScrollAnimation animation="fade-in">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Ready to experience Flux?
                </h2>
                <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto text-balance">
                  Start your 14-day free trial today and see how Flux can transform your data workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-lg bg-white text-flux-900 font-medium hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/book-demo"
                    className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Features;
