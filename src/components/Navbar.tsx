
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="/lovable-uploads/946c9951-e932-49ca-b106-62f39f5b6cac.png" alt="Frenley Logo" className="w-10 h-10" />
          <span className={cn(
            "text-xl font-bold transition-colors duration-300",
            isScrolled ? "text-primary" : "text-primary"
          )}>
            Frenley
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className={cn(
            "font-medium transition-colors duration-300 hover:text-primary",
            isScrolled ? "text-gray-700" : "text-gray-800"
          )}>
            How It Works
          </a>
          <a href="#features" className={cn(
            "font-medium transition-colors duration-300 hover:text-primary",
            isScrolled ? "text-gray-700" : "text-gray-800"
          )}>
            Features
          </a>
          <a href="#testimonials" className={cn(
            "font-medium transition-colors duration-300 hover:text-primary",
            isScrolled ? "text-gray-700" : "text-gray-800"
          )}>
            Testimonials
          </a>
          <a href="#download" className={cn(
            "px-6 py-2 primary-button"
          )}>
            Download Now
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-6 space-y-4">
            <a 
              href="#how-it-works" 
              className="font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#download" 
              className="px-6 py-2 primary-button text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
