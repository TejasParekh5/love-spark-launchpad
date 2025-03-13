
import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import AppPreview from '@/components/AppPreview';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import AppStoreButton from '@/components/AppStoreButton';
import { Heart, Shield, Zap, Users, MessageCircle, Award } from 'lucide-react';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Find your perfect match today
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-gray-900">Connect with </span>
                <span className="text-primary relative">
                  genuine
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,0 Q50,10 100,0" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
                <span className="text-gray-900"> people</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Frenley helps you find meaningful connections based on shared interests and values, not just appearances.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <AppStoreButton store="apple" />
                <AppStoreButton store="google" />
              </div>
              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
                <div className="flex">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 -ml-2 first:ml-0"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-primary">50K+</span> happy users
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <AppPreview className="scale-90 md:scale-100" />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" fill="#ffffff">
            <path d="M0,70 C240,35 480,0 720,0 C960,0 1200,35 1440,70 L1440,140 L0,140 Z" />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Frenley Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Finding your perfect match is easy with our intuitive app. Just follow these simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: 1,
                title: "Create Your Profile",
                description: "Sign up and build a profile that showcases your true personality and interests."
              },
              {
                number: 2,
                title: "Discover Matches",
                description: "Our algorithm suggests compatible matches based on your preferences and behavior."
              },
              {
                number: 3,
                title: "Connect & Meet",
                description: "Start meaningful conversations and arrange to meet if you feel a genuine connection."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 text-center group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awesome Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Frenley is packed with features designed to help you make genuine connections with like-minded people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Heart}
              title="Smart Matching"
              description="Our AI-powered algorithm learns your preferences to suggest highly compatible matches."
              iconClassName="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
              delay={0}
            />
            <FeatureCard
              icon={Shield}
              title="Safe & Secure"
              description="Advanced verification and privacy features keep your personal information protected."
              iconClassName="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
              delay={1}
            />
            <FeatureCard
              icon={Zap}
              title="Boost Visibility"
              description="Get more visibility with profile boosting to increase your chances of finding a match."
              iconClassName="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
              delay={2}
            />
            <FeatureCard
              icon={Users}
              title="Group Events"
              description="Join local events and meet multiple matches in a fun, pressure-free environment."
              iconClassName="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
              delay={3}
            />
            <FeatureCard
              icon={MessageCircle}
              title="Ice Breakers"
              description="Start conversations easily with our suggested conversation starters and games."
              iconClassName="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
              delay={4}
            />
            <FeatureCard
              icon={Award}
              title="Premium Benefits"
              description="Unlock additional features with our affordable premium subscription plans."
              iconClassName="bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of people have found meaningful connections through Frenley. Here are some of their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Emma"
              age={27}
              location="San Francisco"
              quote="I was skeptical about dating apps, but Frenley's approach to matching based on shared interests led me to find someone truly compatible."
              rating={5}
              delay={0}
            />
            <TestimonialCard
              name="James"
              age={32}
              location="Chicago"
              quote="The quality of matches on Frenley is so much better than other apps I've tried. I've made meaningful connections beyond just dating."
              rating={4}
              delay={1}
            />
            <TestimonialCard
              name="Sophia"
              age={29}
              location="New York"
              quote="I appreciate how Frenley focuses on personality and values rather than just swiping on photos. I met my partner here 6 months ago!"
              rating={5}
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Download Frenley today and start your journey to meaningful connections.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <AppStoreButton 
                store="apple" 
                className="bg-white text-gray-900 hover:bg-gray-100"
              />
              <AppStoreButton 
                store="google" 
                className="bg-white text-gray-900 hover:bg-gray-100 border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/946c9951-e932-49ca-b106-62f39f5b6cac.png" 
                alt="Frenley Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-white">Frenley</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Help
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Frenley. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
