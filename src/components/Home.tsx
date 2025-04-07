

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  fetchContributionData,
  fetchUserData,
  fetchUserRepos,
} from '../services/github-api';
import { GitHubRepo, GitHubUser } from '../types/github';
import ErrorState from './ErrorState';
import FeaturesSection from './FeaturesSection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';
import LoadingState from './LoadingState';
import ResultsSection from './Results';

const Home = () => {
  const [username, setUsername] = useState<string>('');
  // Fetch user data
  // Fetch user data
  const {
    data: userData,
    isLoading: isUserLoading,
    error: userError,

    isError: isUserError,
  } = useQuery({
    queryKey: ['userData', username],
    queryFn: () => fetchUserData(username),
    enabled: !!username,
    retry: false,
  });

  // Fetch repositories
  const {
    data: reposData,
    isLoading: isReposLoading,
    error: reposError,
    isError: isReposError,
  } = useQuery({
    queryKey: ['userRepos', username],
    queryFn: () => fetchUserRepos(username),
    enabled: !!username,
    retry: false,
  });

  // Fetch contribution data
  const { data: contributionData, isLoading: isContributionLoading } = useQuery(
    {
      queryKey: ['contributionData', username],
      queryFn: () => fetchContributionData(username),
      enabled: !!username,
      retry: false,
    }
  );

  const handleSearch = (searchedUsername: string) => {
    setUsername(searchedUsername);
  };

  const isLoading = isUserLoading || isReposLoading || isContributionLoading;
  const hasData = !isLoading && userData && reposData && contributionData;
  const isError = isUserError || isReposError;

  const errorMessage =
    userError instanceof Error
      ? userError.message
      : reposError instanceof Error
      ? reposError.message
      : 'An error occurred while fetching the data.';

  const resetSearch = () => {
    setUsername('');
  };

  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
      <HeroSection
        onSearch={handleSearch}
        isLoading={isLoading}
        scrollToContent={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <main
        id="content"
        className="max-w-6xl mx-auto px-4 md:px-6 pb-20 relative z-10"
      >
        {isLoading && <LoadingState />}

        {isError && <ErrorState message={errorMessage} onReset={resetSearch} />}

        {hasData && (
          <ResultsSection
            userData={userData as GitHubUser}
            reposData={reposData as GitHubRepo[]}
            contributionData={contributionData as number[]}
          />
        )}

        {!hasData && !isLoading && !isError && <FeaturesSection />}
      </main>

      <FooterSection />
    </div>
  );
};
export default Home;
