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

type GithubEvent = {
  type: string;
  repo: { name: string };
  payload?: {
    head?: string;
    ref?: string;
  };
  created_at: string;
};

async function getGithubData(): Promise<GithubCommit | null> {
  const eventsRes = await fetch(
    'https://api.github.com/users/haardikk21/events/public?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'haardikk21-activity-widget',
        Accept: 'application/vnd.github+json',
      },
      // if you're in Next.js:
      next: { revalidate: 0 },
    },
  );

  if (!eventsRes.ok) {
    console.error(
      'GitHub events API error',
      eventsRes.status,
      await eventsRes.text(),
    );
    return null;
  }

  const json = await eventsRes.json();
  if (!Array.isArray(json) || json.length === 0) return null;

  for (const raw of json as GithubEvent[]) {
    if (raw.type !== 'PushEvent') continue;

    const sha = raw.payload?.head;
    if (!sha) continue;

    // Fetch the commit details to get the message + canonical URL
    const commitRes = await fetch(
      `https://api.github.com/repos/${raw.repo.name}/commits/${sha}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'haardikk21-activity-widget',
          Accept: 'application/vnd.github+json',
        },
      },
    );

    if (!commitRes.ok) {
      console.error(
        'GitHub commit API error',
        commitRes.status,
        await commitRes.text(),
      );
      continue;
    }

    const commitJson = await commitRes.json();

    const message: string = commitJson?.commit?.message ?? 'Pushed new commit';
    const url: string =
      commitJson?.html_url ??
      `https://github.com/${raw.repo.name}/commit/${sha}`;

    const ghEvent: GithubCommit = {
      repo: raw.repo.name,
      message,
      url,
      createdAt: raw.created_at,
    };

    return ghEvent;
  }

  return null;
}

async function getData() {
  return getGithubData();
}

export async function Activity() {
  const data = await getData();

  return (
    <div className="py-8">
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GithubIcon className="w-6 fill-current stroke-current" />
              <span className="text-xl font-semibold">Latest Commit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={`https://github.com/${data.repo}`} target="_blank">
              <h3 className="font-semibold leading-none tracking-tight">
                {data.repo.replace('haardikk21/', '')}
              </h3>
            </Link>
            <Link href={data.url} target="_blank">
              <p>{data.message}</p>
            </Link>
            <p className="mt-4 text-muted-foreground">
              {timeSince(new Date(data.createdAt ?? Date.now()))}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
