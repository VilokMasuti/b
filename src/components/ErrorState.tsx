import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorStateProps {
  message: string;
  onReset: () => void;
}

const ErrorState = ({ message, onReset }: ErrorStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center items-center min-h-[50vh]"
    >
      <Card className="max-w-md w-full apple-glass border border-red-500/20">
        <CardHeader className="pb-4">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
            className="flex justify-center mb-4"
          >
            <div className="w-20 h-20 bg-red-900/20 backdrop-blur-lg rounded-full flex items-center justify-center">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
          </motion.div>
          <CardTitle className="text-center text-gradient font-bold text-2xl">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-4">
          <p className="text-gray-300">{message}</p>
          <p className="mt-2 text-gray-400">Please try again or use a different username.</p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button
            onClick={onReset}
            className="apple-button"
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ErrorState;
