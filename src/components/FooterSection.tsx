import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/30 backdrop-blur-lg py-12 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-gray-400 mb-8 md:mb-0">
            <div className="flex items-center space-x-3">
              <Github className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-sf-pro-display font-semibold tracking-tight">
                <span>GitHub </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Insight</span>
              </h2>
            </div>
            <p className="text-sm font-sf-pro-display tracking-wide opacity-75 md:pl-4 md:border-l border-gray-700">
              Visualize Developer Activity with Style
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex md:space-x-8 gap-4 md:gap-0">
            <a
              href="https://docs.github.com/en/rest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sf-pro-display tracking-wide text-gray-400 hover:text-indigo-400 transition-colors"
            >
              GitHub API
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sf-pro-display tracking-wide text-gray-400 hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm font-sf-pro-display tracking-wide text-gray-400 hover:text-indigo-400 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-sf-pro-display tracking-wide text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Privacy
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-gray-800/20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
        >
          <p className="mb-4 md:mb-0 font-sf-pro-display tracking-wide">
            © {currentYear} GitHub Insight. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors font-sf-pro-display tracking-wide">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition-colors font-sf-pro-display tracking-wide">Cookies</a>
            <a href="#" className="hover:text-indigo-400 transition-colors font-sf-pro-display tracking-wide">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
