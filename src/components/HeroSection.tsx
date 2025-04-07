import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import BlurText from './BlurText';
import ShinyText from './ui/ShinyText ';

interface HeroSectionProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
  scrollToContent: () => void;
}

const HeroSection = ({ onSearch, isLoading }: HeroSectionProps) => {
  const featuredUsers = [
    { name: 'microsoft', description: 'Microsoft Corporation' },
    { name: 'google', description: 'Google LLC' },
    { name: 'facebook', description: 'Meta Platforms, Inc.' },
    { name: 'apple', description: 'Apple Inc.' },
  ];

  return (
    <header className="relative min-h-[90vh] flex items-center justify-center hero-background px-4 md:px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <Github className="w-12 h-12 text-white mr-4" />
          <h1 className="text-display text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            GitHub Insight
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center text-xl bg-gradient-to-b from-neutral-200 to-neutral-900 bg-clip-text  mb-12 px-4"
        >
          <BlurText
            text="Visualiz  developer profiles with stunning metrics, activity insights, and repository analytics. Discover the GitHub story behind any developer."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-sm   text-center  antialiased tracking-widest capitalize ml-10  mb-8 font-montserrat "
          />
        </motion.p>

        <div className="w-full mb-16">
          <SearchBar onSearch={onSearch} isLoading={isLoading} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <ShinyText
            text="  Or Try One Of These Featured Profiles"
            className=" antialiased text-2xl  mb-6 font-montserrat"
            speed={6}
          ></ShinyText>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredUsers.map((user) => (
              <button
                key={user.name}
                onClick={() => onSearch(user.name)}
                className="px-4 py-2 rounded-full apple-glass   capitalize font-montserrat font-semibold text-sm hover:bg-white/10 transition-colors flex items-center"
              >
                <span>{user.name}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </header>
  );
};

export default HeroSection;
