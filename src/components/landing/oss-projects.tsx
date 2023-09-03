import { ArrowRightIcon } from 'lucide-react';
import { IRepoCardProps, RepoCard } from '../ui/repo-card';
import Link from 'next/link';

async function getPinnedRepos() {
  const pinnedRepos = [
    'OpenFarcaster/teleport',
    'haardikk21/wanda',
    'securekey/oauth-xyz-nodejs',
    'ceramicnetwork/cacao',
  ];

  const repos = await Promise.all(
    pinnedRepos.map(async (repo) => {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });
      const json = await res.json();

      const repoCardProps: IRepoCardProps = {
        name: json.name,
        fullName: json.full_name,
        description: json.description,
        language: json.language,
        updatedAt: new Date(json.pushed_at),
      };

      return repoCardProps;
    }),
  );

  return repos;
}

export async function OssProjects() {
  const repos = await getPinnedRepos();

  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex w-fit items-end">
        <h3 className="text-2xl font-semibold">Open Source Projects</h3>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {repos.map((repo) => (
          <RepoCard key={repo.fullName} {...repo} />
        ))}
      </div>

      <Link href="/projects">
        <div className="group flex cursor-pointer justify-end gap-px transition-colors hover:text-primary">
          View All
          <ArrowRightIcon className="ml-1 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
