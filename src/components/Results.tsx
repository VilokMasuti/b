import { motion } from 'framer-motion';
import { GitHubUser, GitHubRepo } from '../types/github';
import ProfileCard from '../components/ProfileCard';
import ActivityChart from '../components/ActivityChart';
import ContributionCalendar from '../components/ContributionCalendar';
import RepositoriesList from '../components/RepositoriesList';

interface ResultsSectionProps {
  userData: GitHubUser;
  reposData: GitHubRepo[];
  contributionData: number[];
}

const ResultsSection = ({ userData, reposData, contributionData }: ResultsSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
      className="space-y-12"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-sf-pro-display font-semibold tracking-tight mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              Developer Profile
            </span>
          </h2>
          <p className="text-gray-400 text-sm tracking-wide font-sf-pro-display">
            Detailed overview of {userData.name || userData.login}'s GitHub presence and activity
          </p>
        </div>
        <ProfileCard user={userData} />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-sf-pro-display font-semibold tracking-tight text-white/90">
            Activity Overview
          </h3>
          <p className="text-gray-400 text-sm tracking-wide font-sf-pro-display mb-2">
            Contribution patterns over the past year
          </p>
          <ActivityChart activityData={contributionData} />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-sf-pro-display font-semibold tracking-tight text-white/90">
            Contribution Calendar
          </h3>
          <p className="text-gray-400 text-sm tracking-wide font-sf-pro-display mb-2">
            Visualization of coding activity
          </p>
          <ContributionCalendar activityData={contributionData} />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="space-y-4"
      >
        <h3 className="text-2xl font-sf-pro-display font-semibold tracking-tight text-white/90">
          Top Repositories
        </h3>
        <p className="text-gray-400 text-sm tracking-wide font-sf-pro-display mb-2">
          Featured projects and contributions
        </p>
        <RepositoriesList repositories={reposData} />
      </motion.div>
    </motion.div>
  );
};

export default ResultsSection;
