
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  age: number;
  location: string;
  quote: string;
  rating: number;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({
  name,
  age,
  location,
  quote,
  rating,
  className,
  delay = 0
}: TestimonialCardProps) => {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100",
        className
      )}
      style={{ 
        animationDelay,
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${animationDelay} forwards, slide-in-right 0.5s ease-out ${animationDelay} forwards` 
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary/80 flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}, {age}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            fill={i < rating ? "#FF7A00" : "none"}
            color={i < rating ? "#FF7A00" : "#D1D5DB"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
