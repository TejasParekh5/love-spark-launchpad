
import { cn } from '@/lib/utils';
import { Apple, Smartphone } from 'lucide-react';

interface AppStoreButtonProps {
  store: 'apple' | 'google';
  className?: string;
}

const AppStoreButton = ({ store, className }: AppStoreButtonProps) => {
  const isApple = store === 'apple';
  
  return (
    <a 
      href="#"
      className={cn(
        "flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1",
        isApple ? "bg-black text-white" : "bg-white text-black border border-gray-200",
        className
      )}
    >
      {isApple ? (
        <Apple size={24} />
      ) : (
        <Smartphone size={24} />
      )}
      <div className="flex flex-col">
        <span className="text-xs font-medium">Download on the</span>
        <span className="text-sm font-bold">{isApple ? 'App Store' : 'Google Play'}</span>
      </div>
    </a>
  );
};

export default AppStoreButton;
