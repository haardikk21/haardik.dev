import { timeSince } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

type SpotifyTrack = {
  track: {
    name: string;
    album: {
      name: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        name: string;
      }[];
      images: {
        height: number;
        width: number;
        url: string;
      }[];
    };
    external_urls: {
      spotify: string;
    };
  };
};

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

async function getSpotifyData(): Promise<SpotifyTrack | null> {
  const b64ClientCredentials = Buffer.from(
    process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET,
  ).toString('base64');
  const authHeader = `Basic ${b64ClientCredentials}`;

  const accessTokenResponse = await fetch(
    'https://accounts.spotify.com/api/token',
    {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=refresh_token&refresh_token=' +
        process.env.SPOTIFY_REFRESH_TOKEN,
    },
  );

  const accessTokenBody = await accessTokenResponse.json();
  const accessToken = accessTokenBody.access_token;

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (response.status === 204 || response.status > 400) {
    return null;
  }

  const data = await response.json();
  return data.items[0] as SpotifyTrack;
}

async function getGithubData(): Promise<GithubCommit | null> {
  const response = await fetch(
    'https://api.github.com/users/haardikk21/events?per_page=100',
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  );

  const json = await response.json();

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

  return null;
}

async function getLatestCast(): Promise<Cast> {
  const response = await fetch(
    `https://api.neynar.com/v1/farcaster/casts/?api_key=${process.env.NEYNAR_API_KEY}&fid=8113&limit=1`,
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
  const [spotifyData, githubData, latestCast] = await Promise.all([
    getSpotifyData(),
    getGithubData(),
    getLatestCast(),
  ]);

  const data = {
    spotify: spotifyData,
    github: githubData,
    cast: latestCast,
  };

  return data;
}

export async function Activity() {
  const data = await getData();

  return (
    <div className="grid gap-8 py-8 md:grid-cols-3">
      {data.spotify && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8"
                viewBox="0 0 496 512"
              >
                <path
                  fill="#1ed760"
                  d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
                />
                <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
              </svg>
              <span className="text-xl font-semibold">Last Played</span>
            </CardTitle>
          </CardHeader>
          <Link
            href={data.spotify.track.external_urls.spotify ?? '#'}
            target="_blank"
          >
            <CardContent className="flex items-center gap-4">
              <img
                src={data.spotify.track.album.images[0].url}
                className="h-16 rounded-sm"
                alt={data.spotify.track.album.name}
              />

              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#1ed760"
                    className="w-6 rotate-180"
                  >
                    <rect
                      className="animate-short-eq delay-200"
                      x="4"
                      y="4"
                      width="3.7"
                      height="8"
                    />
                    <rect
                      className="animate-tall-eq delay-300"
                      x="10.2"
                      y="4"
                      width="3.7"
                      height="16"
                    />
                    <rect
                      className=" animate-short-eq delay-500"
                      x="16.3"
                      y="4"
                      width="3.7"
                      height="11"
                    />
                  </svg>

                  <span className="font-bold">{data.spotify.track.name}</span>
                </div>

                <span>
                  {data.spotify.track.album.artists
                    .map((a) => a.name)
                    .join(', ')}
                </span>
              </div>
            </CardContent>
          </Link>
        </Card>
      )}

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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <svg
              className="w-6"
              aria-hidden="true"
              viewBox="0 0 225 225"
              fill="none"
            >
              <rect width="225" height="225" rx="50"></rect>
              <path
                d="M58 35H167V190H151V119H150.843C149.075 99.3773 132.583 84 112.5 84C92.4169 84 75.9253 99.3773 74.157 119H74V190H58V35Z"
                className="fill-farcaster"
              ></path>
              <path
                d="M29 57L35.5 79H41V168C38.2386 168 36 170.239 36 173V179H35C32.2386 179 30 181.239 30 184V190H86V184C86 181.239 83.7614 179 81 179H80V173C80 170.239 77.7614 168 75 168H69V57H29Z"
                className="fill-farcaster"
              ></path>
              <path
                d="M152 168C149.239 168 147 170.239 147 173V179H146C143.239 179 141 181.239 141 184V190H197V184C197 181.239 194.761 179 192 179H191V173C191 170.239 188.761 168 186 168V79H191.5L198 57H158V168H152Z"
                className="fill-farcaster"
              ></path>
            </svg>
            <span className="text-xl font-semibold">Latest Cast</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Link href={data.cast.url} target="_blank">
            <blockquote className="border-l-2 pl-6 italic">
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
