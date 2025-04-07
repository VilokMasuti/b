import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useIsMobile } from '../hooks/use-mobile';
import { motion } from 'framer-motion';
import { Github, Search } from 'lucide-react';
import { SetStateAction, useState } from 'react';
import { toast } from 'sonner';

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [username, setUsername] = useState<string>('');
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }
    onSearch(username.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto relative z-10"
    >
      <form
        onSubmit={handleSubmit}
        className="relative apple-glass rounded-2xl p-1.5"
      >
        <div className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>

        <Input
          type="text"
          placeholder={
            isMobile
              ? 'Enter GitHub username...'
              : "Enter GitHub username try facebook  google,"
          }
          className="pl-8 sm:pl-12 pr-20 sm:pr-36 py-4 sm:py-7 w-full bg-transparent border-transparent text-white text-sm sm:text-base md:text-lg placeholder:text-gray-400 rounded-xl focus-visible:ring-white/20"
          value={username}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setUsername(e.target.value)}
          disabled={isLoading}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-xl py-2 px-3 sm:py-6 sm:px-8 apple-button text-xs sm:text-sm"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1 sm:mr-2"></div>
              <span className={isMobile ? 'hidden sm:inline' : ''}>
                Searching
              </span>
              <span className={isMobile ? 'inline sm:hidden' : 'hidden'}>
                ...
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <Search className="mr-1 sm:mr-2 h-3 w-3 sm:h-5 sm:w-5" />
              <span className={isMobile ? 'hidden sm:inline' : ''}>
                Analyze Profile
              </span>
              <span className={isMobile ? 'inline sm:hidden' : 'hidden'}>
                Search
              </span>
            </div>
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
