import { IRepoCardProps, RepoCard } from '../ui/repo-card';

async function getAllHighlightedRepos() {
  const highlightedRepos = [
    'OpenFarcaster/teleport',
    'haardikk21/starknet-account-recovery',
    'OpenFarcaster/prost',
    'LearnWeb3DAO/smart-contract-wallet',
    'LearnWeb3DAO/uniswap-v4-take-profits-hook',
    'haardikk21/aiware',
    'haardikk21/chatbot-plus',
    'LearnWeb3DAO/curve-exploit-peth-eth',
    'LearnWeb3DAO/siwx',
    'haardikk21/timeleft',
    'LearnWeb3DAO/momoka-on-render',
    'ChainAgnostic/CAIPs',
    'ChainAgnostic/namespaces',
    'haardikk21/presto',
    'FlexFinTx/sidetree-algorand',
    'FlexFinTx/react-native-ed25519-java-bridge',
    'FlexFinTx/bbs-signatures-react-native',
    'MangoDev-io/mango',
    'Ryan-Ouyang/LedgerLocker',
    'FlexFinTx/rn-asm-bbs-signatures',
    'ConveyChat/Convey-Next',
    'ConveyChat/Convey',
    'ConveyChat/convey-subgraph',
    'haardikk21/indices-fi',
    'haardikk21/cacao-solana-poc',
    'haardikk21/cacao-poc',
    'haardikk21/rocketheadz-contracts',
    'haardikk21/NFTOutpost',
    'FlexFinTx/mnemonic',
    'hyplabs/AlgoSwap',
    'RyanRussell00/nutrl-news',
    'FlexFinTx/issuer-verifier-sdk',
    'FlexFinTx/algorand-roundhash-mapper',
    'haardikk21/cards-trading-network',
    'haardikk21/hydra-node-login-consent',
    'haardikk21/algorand-quote-task',
    'haardikk21/scammy-ico-ai',
    'haardikk21/hadyoubought-v2',
    'haardikk21/hadyoubought.com',
    'haardikk21/binance-trader-csharp',
    'haardikk21/steambot-announcementposter',
    'haardikk21/thevelius',
    'haardikk21/microworld',
    'haardikk21/samp-teleport-generator',
    'haardikk21/samp-menumaker',
    'haardikk21/coinchat-quizbot',
    'haardikk21/coinchat-guessbot',
    'haardikk21/coinchat-cointoss',
    'haardikk21/samp-ctf-4team',
    'haardikk21/samp-relayracing',
    'haardikk21/hkbank',
    'haardikk21/hkteamdm',
    'haardikk21/hktrucking',
    'securekey/oauth-xyz-nodejs',
    'haardikk21/wanda',
    'haardikk21/haardik.dev',
    'ceramicnetwork/cacao',
    'ceramicnetwork/js-did',
    'ceramicnetwork/jsonld-eip712-signatures',
    'rebase-xyz/rebase-witness-service',
  ];

  const repos = await Promise.all(
    highlightedRepos.map(async (repo) => {
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

export async function AllOssProjects() {
  const repos = await getAllHighlightedRepos();

  return (
    <div className="grid auto-rows-auto gap-8 md:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.fullName} {...repo} />
      ))}
    </div>
  );
}
