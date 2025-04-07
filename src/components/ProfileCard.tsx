
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Github, MapPin, Users, Calendar, Link as LinkIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { GitHubUser } from '../types/github';

interface ProfileCardProps {
  user: GitHubUser
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  const joinedDate = new Date(user.created_at);
  const timeAgo = formatDistanceToNow(joinedDate, { addSuffix: true });

  return (
    <Card className="w-full shadow-sm overflow-hidden card-hover">
      <CardHeader className="pb-2 flex flex-col md:flex-row gap-4 items-start">
        <Avatar className="h-24 w-24 rounded-lg border">
          <AvatarImage src={user.avatar_url} alt={user.login} />
          <AvatarFallback>{user.login.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="space-y-2 w-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div>
              <CardTitle className="text-2xl">{user.name || user.login}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @{user.login}
                </a>
              </CardDescription>
            </div>
            <Badge variant="outline" className="w-fit bg-secondary/50">
              Joined {timeAgo}
            </Badge>
          </div>
          {user.bio && (
            <CardDescription className="text-sm mt-2">{user.bio}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">{user.public_repos}</span>
            <span className="text-sm text-muted-foreground">Repositories</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">{user.followers}</span>
            <span className="text-sm text-muted-foreground">Followers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">{user.following}</span>
            <span className="text-sm text-muted-foreground">Following</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-semibold">{user.public_gists}</span>
            <span className="text-sm text-muted-foreground">Gists</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {user.location && (
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{user.location}</span>
            </div>
          )}
          {user.blog && (
            <div className="flex items-center gap-2 text-sm text-ellipsis overflow-hidden">
              <LinkIcon className="h-4 w-4 text-muted-foreground shrink-0" />
              <a
                href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline truncate"
              >
                {user.blog}
              </a>
            </div>
          )}
          {user.twitter_username && (
            <div className="flex items-center gap-2 text-sm">
              <svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @{user.twitter_username}
              </a>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Joined on {new Date(user.created_at).toLocaleDateString()}</span>
          </div>
          {user.company && (
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{user.company}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
