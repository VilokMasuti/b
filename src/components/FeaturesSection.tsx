import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import DecayCard from './DecayCard';
import ShinyText from './ui/ShinyText ';

const FeaturesSection = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <div className="max-w-3xl">
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="mb-8"
        >
          <div className="h-24 mx-auto text-[#b5b5b5a4] bg-clip-text animate-shine border-white/10 flex items-center justify-center">
            <DecayCard width={200} height={300}>
              <Github className="h-10 w-10   animate-pulse-subtle duration-1000" />
              <h2 className="text-xs font-montserrat font-semibold text-center animate-shine">
                Discover Developer Stories with GitHub Insight
              </h2>
            </DecayCard>
          </div>
        </motion.div>

        <ShinyText
          speed={6}
          text="Enter any GitHub username to visualize their journey, contributions,
          and impact in the developer community."
          className="text-xl font-montserrat  max-w-xl mx-auto mb-10"
        ></ShinyText>
      </div>
    </div>
  );
};

export default FeaturesSection;
