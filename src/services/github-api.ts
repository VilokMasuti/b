/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from 'axios';
import { GitHubUser, GitHubRepo, CommitActivity } from '../types/github';

const API_BASE_URL = 'https://api.github.com';

// Create an axios instance for GitHub API
const githubAPI = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json'
  }
});

// Handle API errors consistently
const handleApiError = (error: any) => {
  if (error.response) {
    if (error.response.status === 404) {
      throw new Error('User not found');
    }
    if (error.response.status === 403) {
      throw new Error('API rate limit exceeded. Please try again later.');
    }
    throw new Error(`GitHub API error: ${error.response.statusText}`);
  }
  throw new Error('Network error. Please check your connection.');
};

export async function fetchUserData(username: string): Promise<GitHubUser> {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    // Get up to 100 repos, sorted by updated date
    const response = await githubAPI.get(`/users/${username}/repos?per_page=100&sort=updated`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function fetchCommitActivity(username: string, repo: string): Promise<CommitActivity[]> {
  try {
    const response = await githubAPI.get(`/repos/${username}/${repo}/stats/commit_activity`);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function fetchContributionData(_username: string): Promise<number[]> {
  try {
    const mockWeeklyData = Array.from({ length: 52 }, (_, i) => {
      const baseValue = Math.sin(i * 0.2) * 10 + 15;
      return Math.max(0, Math.floor(baseValue + Math.random() * 10));
    });

    return mockWeeklyData;
  } catch (error) {
    console.error('Error fetching contribution data:', error);
    return Array(52).fill(0);
  }
}
