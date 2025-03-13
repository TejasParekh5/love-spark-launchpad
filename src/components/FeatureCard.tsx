
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  delay = 0
}: FeatureCardProps) => {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <div 
      className={cn(
        "feature-card group transition-all duration-500 hover:border-primary/20",
        className
      )}
      style={{ 
        animationDelay,
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${animationDelay} forwards, slide-up 0.5s ease-out ${animationDelay} forwards` 
      }}
    >
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6",
        iconClassName
      )}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
