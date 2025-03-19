
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Check, Clock, ArrowRight, Video, Phone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const BookCall = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [callType, setCallType] = useState('video');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableDates = [
    '2023-08-22',
    '2023-08-23',
    '2023-08-24',
    '2023-08-25',
    '2023-08-28'
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM'
  ];

  const interestOptions = [
    'Workflow Automation',
    'CRM & Marketing Automation',
    'AI Chatbots',
    'Data Analysis',
    'Process Optimization',
    'Custom AI Solutions'
  ];

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      toast({
        title: "Call booked successfully!",
        description: `Your ${callType} call is scheduled for ${selectedDate} at ${selectedTime}.`,
      });
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Book Your Free Discovery Call
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Let's find a time to talk. Learn how AI can transform your business in just 20 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {!isBooked ? (
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="md:flex">
                    <div className="md:w-1/3 p-6 md:p-8 bg-flux-800 text-white">
                      <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                      
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <Clock className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold">20-Minute Call</h3>
                            <p className="text-sm opacity-80">Brief, focused discussion about your business needs</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold">AI Solution Ideas</h3>
                            <p className="text-sm opacity-80">Get specific automation recommendations for your business</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-semibold">Next Steps Plan</h3>
                            <p className="text-sm opacity-80">Clear action plan to implement AI automation</p>
                          </div>
                        </li>
                      </ul>
                      
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-sm opacity-80">
                          "Our discovery calls are designed to provide immediate value, even if you don't become a client."
                        </p>
                        <p className="mt-2 font-semibold">— AutomateX Team</p>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6 md:p-8">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                              Preferred Date *
                            </label>
                            <select
                              id="date"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                              required
                            >
                              <option value="">Select a date</option>
                              {availableDates.map(date => (
                                <option key={date} value={date}>
                                  {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                              Preferred Time *
                            </label>
                            <select
                              id="time"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flux-500 focus:border-transparent"
                              required
                              disabled={!selectedDate}
                            >
                              <option value="">Select a time</option>
                              {availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Call Type
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                checked={callType === 'video'}
                                onChange={() => setCallType('video')}
                                className="mr-2"
                              />
                              <Video className="w-4 h-4 mr-1" />
                              Video Call
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                checked={callType === 'phone'}
                                onChange={() => setCallType('phone')}
                                className="mr-2"
                              />
                              <Phone className="w-4 h-4 mr-1" />
                              Phone Call
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            What are you interested in? (Select all that apply)
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                            {interestOptions.map(option => (
                              <label key={option} className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={interests.includes(option)}
                                  onChange={() => toggleInterest(option)}
                                  className="mr-2"
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-flux-800 hover:bg-flux-700 button-hover-effect"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Scheduling...
                              </span>
                            ) : (
                              "Schedule Your Call"
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Your Call is Scheduled!</h2>
                  <p className="text-xl text-gray-600 mb-2">Thank you for booking a discovery call with us.</p>
                  <p className="text-gray-600 mb-6">
                    We've sent a calendar invitation to <strong>{email}</strong> for a {callType} call on{' '}
                    <strong>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong>{selectedTime}</strong>.
                  </p>
                  
                  <div className="max-w-md mx-auto bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <ol className="text-left space-y-2">
                      <li className="flex items-start">
                        <span className="bg-flux-100 text-flux-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mr-2 mt-0.5">1</span>
                        <span>You'll receive an email confirmation with call details.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-flux-100 text-flux-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mr-2 mt-0.5">2</span>
                        <span>Our team will prepare for your call based on the information provided.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-flux-100 text-flux-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold mr-2 mt-0.5">3</span>
                        <span>We'll meet at the scheduled time to discuss your automation needs.</span>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/services"
                      className="px-6 py-3 rounded-lg bg-flux-800 text-white font-medium hover:bg-flux-700 transition-all duration-300 shadow-md hover:shadow-lg button-hover-effect"
                    >
                      Explore Our Services
                    </Link>
                    <Button 
                      onClick={() => setIsBooked(false)} 
                      variant="outline"
                    >
                      Schedule Another Call
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Is the discovery call really free?</h4>
                    <p className="text-gray-600">
                      Yes, absolutely. The 20-minute discovery call is completely free with no obligation to purchase.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How should I prepare for the call?</h4>
                    <p className="text-gray-600">
                      Think about your current business challenges and where automation might help, but no preparation is strictly necessary.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What happens after the call?</h4>
                    <p className="text-gray-600">
                      We'll send you a follow-up email with a summary and recommendations. If there's a good fit, we'll propose next steps.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Can I reschedule if needed?</h4>
                    <p className="text-gray-600">
                      Yes, you'll receive a calendar invitation with a link to reschedule if your availability changes.
                    </p>
                  </div>
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

export default BookCall;
