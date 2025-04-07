
import { SetStateAction, useState } from 'react';
import { GitHubRepo } from '../types/github';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  GitBranch,
  Star,
  Eye,
  Calendar,
  Code,
  ArrowUpRight
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface RepositoriesListProps {
  repositories: GitHubRepo[];
}

const RepositoryCard = ({ repo }: { repo: GitHubRepo }) => {
  const updatedAt = new Date(repo.updated_at);
  const timeAgo = formatDistanceToNow(updatedAt, { addSuffix: true });

  return (
    <Card className="shadow-sm card-hover">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium tracking-tight truncate">{repo.name}</h3>
              {repo.fork && (
                <Badge variant="outline" className="text-xs h-5">Fork</Badge>
              )}
            </div>

            <div className="mt-1 flex items-center text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>Updated {timeAgo}</span>
            </div>

            {repo.description && (
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {repo.description}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              {repo.language && (
                <div className="flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  <span>{repo.language}</span>
                </div>
              )}

              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" />
                <span>{repo.stargazers_count}</span>
              </div>

              <div className="flex items-center gap-1">
                <GitBranch className="h-3.5 w-3.5" />
                <span>{repo.forks_count}</span>
              </div>

              <div className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                <span>{repo.watchers_count}</span>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => window.open(repo.html_url, '_blank')}
            title="View on GitHub"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const RepositoriesList = ({ repositories }: RepositoriesListProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepos = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle>Repositories ({repositories.length})</CardTitle>
          <div className="relative">
            <Input
              className="pl-8 w-full sm:w-64"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        {filteredRepos.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No repositories found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RepositoriesList;
