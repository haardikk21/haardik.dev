declare namespace NodeJS {
  export interface ProcessEnv {
    // Spotify
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    SPOTIFY_REFRESH_TOKEN: string;

    // Github
    GITHUB_TOKEN: string;

    // Farcaster
    NEYNAR_API_KEY: string;
  }
}
