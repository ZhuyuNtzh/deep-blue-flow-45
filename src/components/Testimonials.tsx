
import React from 'react';

const testimonials = [
  {
    quote: "Flux has completely transformed how we handle our data pipelines. What used to take days now happens in minutes.",
    author: "Alex Chen",
    role: "CTO at TechVision",
    company: "TechVision",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The intuitive interface combined with powerful capabilities makes Flux the perfect solution for our data needs.",
    author: "Samantha Williams",
    role: "Head of Data at Innovate Inc",
    company: "Innovate Inc",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "We've cut our data processing costs by 40% while improving performance. Flux delivers exactly what it promises.",
    author: "Michael Johnson",
    role: "Data Engineer",
    company: "DataFlow Systems",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Trusted by data teams worldwide
          </h2>
          <p className="text-xl text-gray-600 text-balance">
            See why leading companies choose Flux for their critical data workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-flux-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg
                  className="w-10 h-10 text-flux-100 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
