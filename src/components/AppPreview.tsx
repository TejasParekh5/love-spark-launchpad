import { cn } from '@/lib/utils';

interface AppPreviewProps {
  className?: string;
}

const AppPreview = ({ className }: AppPreviewProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[3rem] blur-xl opacity-70 animate-pulse-subtle"></div>
      
      <div className="relative bg-white rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden animate-float">
        <div className="h-6 bg-gray-800 w-full flex justify-center items-center">
          <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-b from-primary/5 to-secondary/5 h-[500px] w-[250px] flex flex-col">
          {/* App Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/946c9951-e932-49ca-b106-62f39f5b6cac.png" 
                alt="Frenley Logo" 
                className="w-8 h-8"
              />
              <span className="font-bold text-primary text-sm">Frenley</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            </div>
          </div>
          
          {/* App Content */}
          <div className="flex-1 p-4 space-y-4">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-primary-200 to-secondary-200"></div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">Sarah, 28</h3>
                    <p className="text-xs text-gray-500">New York, 2 miles away</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-primary"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Card Hints */}
            <div className="bg-white/80 h-40 rounded-2xl shadow-md -mt-10 ml-6 -rotate-6"></div>
            <div className="bg-white/60 h-40 rounded-2xl shadow-sm -mt-32 ml-12 -rotate-12"></div>
          </div>
          
          {/* App Footer */}
          <div className="h-14 border-t border-gray-100 bg-white/80 backdrop-blur-sm flex justify-around items-center px-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-10 h-10 rounded-full ${i === 2 ? 'bg-primary text-white' : 'bg-gray-100'} flex items-center justify-center`}>
                <div className={`w-4 h-4 rounded-sm ${i === 2 ? 'bg-white' : 'bg-gray-300'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPreview;
