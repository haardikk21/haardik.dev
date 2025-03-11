import { timeSince } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

type GithubCommit = {
  repo: string;
  message: string;
  url: string;
  createdAt: string;
};

type Cast = {
  text: string;
  timestamp: string;
  url: string;
};

async function getGithubData(): Promise<GithubCommit | null> {
  const response = await fetch(
    'https://api.github.com/users/haardikk21/events?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: 0,
      },
    },
  );

  const json = await response.json();

  if (Array.isArray(json) && json.length > 0) {
    for (let event of json) {
      if (event.type === 'PushEvent') {
        const ghEvent: GithubCommit = {
          repo: event.repo.name,
          message: event.payload.commits[0].message,
          url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
          createdAt: event.created_at,
        };

        return ghEvent;
      }
    }
  }

  return null;
}

async function getLatestCast(): Promise<Cast> {
  const response = await fetch(
    `https://api.neynar.com/v1/farcaster/casts/?api_key=${process.env.NEYNAR_API_KEY}&fid=8113&limit=1`,
    {
      next: {
        revalidate: 0,
      },
    },
  );
  const json = await response.json();

  const cast: Cast = {
    text: json.result.casts[0].text,
    timestamp: json.result.casts[0].timestamp,
    url: `https://warpcast.com/haardikkk/${json.result.casts[0].hash}`,
  };

  return cast;
}

async function getData() {
  const [githubData, latestCast] = await Promise.all([
    getGithubData(),
    getLatestCast(),
  ]);

  const data = {
    github: githubData,
    cast: latestCast,
  };

  return data;
}

export async function Activity() {
  const data = await getData();

  return (
    <div className="grid gap-8 py-8 md:grid-cols-2">
      {data.github && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GithubIcon className="w-6 fill-current stroke-current" />
              <span className="text-xl font-semibold">Latest Commit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href={`https://github.com/${data.github.repo}`}
              target="_blank"
            >
              <h3 className="font-semibold leading-none tracking-tight">
                {data.github.repo.replace('haardikk21/', '')}
              </h3>
            </Link>
            <Link href={data.github.url} target="_blank">
              <p>{data.github.message}</p>
            </Link>
            <p className="mt-4 text-muted-foreground">
              {timeSince(new Date(data.github.createdAt ?? Date.now()))}
            </p>
          </CardContent>
        </Card>
      )}

      <Card className="flex h-full flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <svg
              className="w-6"
              aria-hidden="true"
              viewBox="0 0 225 225"
              fill="none"
            >
              <rect width="225" height="225" rx="50" />
              <path
                d="M58 35H167V190H151V119H150.843C149.075 99.3773 132.583 84 112.5 84C92.4169 84 75.9253 99.3773 74.157 119H74V190H58V35Z"
                className="fill-farcaster"
              />
              <path
                d="M29 57L35.5 79H41V168C38.2386 168 36 170.239 36 173V179H35C32.2386 179 30 181.239 30 184V190H86V184C86 181.239 83.7614 179 81 179H80V173C80 170.239 77.7614 168 75 168H69V57H29Z"
                className="fill-farcaster"
              />
              <path
                d="M152 168C149.239 168 147 170.239 147 173V179H146C143.239 179 141 181.239 141 184V190H197V184C197 181.239 194.761 179 192 179H191V173C191 170.239 188.761 168 186 168V79H191.5L198 57H158V168H152Z"
                className="fill-farcaster"
              />
            </svg>
            <span className="text-xl font-semibold">Latest Cast</span>
          </CardTitle>
        </CardHeader>
        <div className="grow" />
        <CardContent>
          <Link href={data.cast.url} target="_blank">
            <blockquote className="line-clamp-2 border-l-2 pl-6 italic">
              {data.cast.text}
            </blockquote>
          </Link>

          <p className="mt-4 text-muted-foreground">
            {timeSince(new Date(data.cast.timestamp))}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
