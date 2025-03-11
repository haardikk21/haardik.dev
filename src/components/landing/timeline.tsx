import Link from 'next/link';

const TimelineItems = [
  {
    id: 21,
    startDate: 'June 2024',
    endDate: 'November 2024',
    logo: '/logos/nucleo.png',
    link: 'https://nucleo.finance',
    label: 'Nucleo Finance',
    secondaryLabel: 'Protocol Engineering Consultant',
    description:
      'Nucleo Finance is a unified liquidity layer connecting all blockchains across all virtual machines - secured by EigenLayer',
  },
  {
    id: 20,
    startDate: 'Apr 2024',
    endDate: 'Present',
    logo: '/logos/uniswap-hook-incubator.png',
    link: 'https://atrium.academy/uniswap',
    label: 'Uniswap Hook Incubator',
    secondaryLabel: 'Lead Instructor',
    description:
      'Uniswap Hook Incubator is a cutting edge cohort based course designed in the spirit of a hackathon to take existing blockchain developers and train them on cutting edge DeFi concepts by building hooks on Uniswap v4. Proudly funded by Uniswap Foundation.',
  },
  {
    id: 19,
    startDate: 'Feb 2022',
    endDate: 'Present',
    logo: '/logos/lw3logomark.png',
    link: 'https://learnweb3.io/',
    label: 'LearnWeb3',
    secondaryLabel: 'Co-Founder',
    description:
      'LearnWeb3 is a free platform to help developer students from around the world upskill themselves by learning about next-gen technologies like blockchain and AI to help them shape the path to our future. Currently serving over 100,000 students - it is one of the largest online educational platforms in the space, along with providing other opportunities through Bounties, Events, Hackathons, and Live Events. Our goal is to make learning about technologies that will change the world forever accessible to everyone with as little a barrier to entry as possible.',
  },
  {
    id: 18,
    startDate: 'Aug 2023',
    endDate: 'Present',
    logo: '/logos/openfarcaster.png',
    link: 'https://github.com/OpenFarcaster',
    label: 'Teleport (Open Farcaster)',
    secondaryLabel: 'Builder',
    description:
      'Teleport is a fast and secure implementation of the Farcaster Protocol Hub specification, written in Rust. The goal with Teleport is to help improve client diversity in the Farcaster ecosystem and provide stronger memory safety guarantees while achieving high performance. This is currently an under-development project.',
  },
  {
    id: 17,
    startDate: 'Nov 2022',
    endDate: '',
    logo: '/logos/near.png',
    link: 'https://devpost.com/software/indices-finance',
    label: 'NEAR MetaBUILD III',
    secondaryLabel: 'Native Track Winner',
    description:
      'Built Indices Finance - a platform to create, buy, and manage crypto index funds on the NEAR Blockchain built on top of Ref Finance and using Rust. This project won a prize in the Native Track at the hackathon.',
  },
  {
    id: 16,
    startDate: 'Jul 2021',
    endDate: 'Sep 2022',
    logo: '/logos/ceramic.png',
    link: 'https://ceramic.network',
    label: 'Ceramic Network',
    secondaryLabel: 'Protocol Engineer',
    description:
      'At Ceramic Network, I dove back into the Decentralized Identity rabbithole and helped build a global, public, decentralized NoSQL database to unlock the data economy. I wrote a specification for using EIP-712 signatures as a scheme for JSON-LD Verifiable Credentials. I also authored CAIP-122, the Sign in with X standard to create a chain-agnostic blockchain authentication mechanism, and CAIP-74, the Chain Agnostic Capability Object (CACAO) standard to use CAIP-74 messages as an object capability method for delegating access to resources to other identities in a self-sovereign manner. I built proofs of concept for CACAO on Ethereum and Solana, both of which are widely in use today - most popularly within the Gitcoin Passport application. Apart from the standards work, I contributed to the Ceramic Network node (js-ceramic), the DID library packages (js-did), and Rebase (rebase-xyz).',
  },
  {
    id: 15,
    startDate: 'May 2018',
    endDate: 'May 2023',
    logo: '/logos/uwbc.webp',
    link: 'https://waterlooblockchain.com',
    label: 'Waterloo Blockchain',
    secondaryLabel: 'President',
    description:
      'I started and was President at the University of Waterloo Blockchain Club (now Waterloo Blockchain) for several years while in University. During my role there, I conducted several workshops, got sponsorships from Brave, ConsenSys, Algorand, and several other companies for the club, and grew the club from zero to hundreds of members.',
  },
  {
    id: 14,
    startDate: 'Apr 2021',
    endDate: '',
    logo: '/logos/scalingeth.svg',
    link: 'https://www.youtube.com/watch?app=desktop&v=UqgxEuUOpU0',
    label: 'Scaling Ethereum 2021',
    secondaryLabel: 'Overall + 7 Sponsor Prizes Winner',
    description:
      "Built NFT Puzzle Thing - an onchain puzzle solving game deployed to Polygon, Arbitrum, and SKALE that used Chainlink VRF's for randomness along with meta-transactions and fiat-payment rails through Stripe to help onboard Web2 users. After the hackathon, the project was continued and we worked with Animetas, Savage Dogs, Purrnelopes Country Club, Ether Cards, and several other NFT collections to run the game as a community event. We won the overall prize along with sponsor prizes from Chainlink, Arbitrum, SKALE, The Graph, Protocol Labs, and Polygon Labs.",
  },
  {
    id: 13,
    startDate: 'Feb 2021',
    endDate: '',
    logo: '/logos/ethdenver2021.png',
    link: 'https://github.com/Ryan-Ouyang/NFTea-Room',
    label: 'ETHDenver 2021',
    secondaryLabel: 'Top 20 + 3 Sponsor Prizes Winner',
    description:
      'Built NFTea Room - a platform to supply and decide accurate pricing information for NFTs using a decentralized and democratic voting process. Won a Top 20 prize from the overall judging panel, along with bounties from IPFS, Textile, and DAOHaus.',
  },
  {
    id: 12,
    startDate: 'Nov 2020',
    endDate: 'May 2021',
    logo: '/logos/hyplabs.png',
    link: 'https://hypotenuse.ca',
    label: 'Hypotenuse Labs',
    secondaryLabel: 'Software Engineer',
    description:
      'At Hypotenuse Labs, I worked as a software engineering consultant for Algorand, Internet Computer (Dfinity), and a few other clients. I, along with Anthony Zhang, theorized and built the first AMM DEX on Algorand using the TEAL Language - a project I am particularly proud of. I also built an Oracle Service Framework for ICP using Motoko and Golang, and contributed to a couple of Web2 projects.',
  },
  {
    id: 11,
    startDate: 'Jan 2019',
    endDate: 'Feb 2021',
    logo: '/logos/flexfintx.jpeg',
    link: 'https://widgets.weforum.org/techpioneers-2021/',
    label: 'Flexible Fintech',
    secondaryLabel: 'Sovereign Identity Explorer',
    description:
      'Spent a couple of years exploring decentralized identity technologies and how they can be used for the welfare of developing nations, particularly in Africa. Participated in the Decentralized Identity Foundation, was part of TechStars 2020, got recognized by the World Economic Forum as a Technology Pioneer in 2021, and built several innovative identity solutions atop DID and VC technologies. This also further led me to become extremely interested in the identity space leading me to my future (and current) work.',
  },
  {
    id: 10,
    startDate: 'Feb 2020',
    endDate: '',
    logo: '/logos/ethdenver2020.png',
    link: 'https://github.com/Ryan-Ouyang/Ledgerlocker',
    label: 'ETHDenver 2020',
    secondaryLabel: '4 Sponsor Prizes Winner',
    description:
      'Built LedgerLocker - an extensible protocol to use yield from deposits in DeFi as a revenue model for any project. In addition to the protocol, we developed a Proof of Concept dApp that used LedgerLocker that was an AirBnB-style rental platform where you pay for the rental by depositing collateral into LedgerLocker with the yield going to the owner of the property until the rental fee is paid off. The project won bounty prizes from Infura, Fortmatic, The Graph, and Pepo, and also got a special shoutout from Danny Ryan (Ethereum Foundation) during the closing ceremony.',
  },
  {
    id: 9,
    startDate: 'Sep 2019',
    endDate: 'Dec 2019',
    logo: '/logos/securekey.jpg',
    link: 'https://securekey.com/',
    label: 'SecureKey (acq by Avast)',
    secondaryLabel: 'Software Engineer Intern',
    description:
      "At SecureKey, I worked as a Software Engineer Intern under the CTO Team where I worked on several identity projects. I contributed to the Hyperledger Aries Go framework for Decentralized Identities and Verifiable Credentials to help exchange credentials through the Credential Exchange protocol. I developed an application to demonstrate interoperability between TrustBloc's decentralized identity network and Veres One's network using the Aries framework. I also worked alongside Justin Richter to build the first ever reference implementation of the OAuth.XYZ specification (now GNAP Protocol under IETF) using TypeScript, React, and MongoDB.",
  },
  {
    id: 8,
    startDate: 'Nov 2019',
    endDate: '',
    logo: '/logos/ethwaterloo.png',
    link: 'https://github.com/ConveyChat/Convey',
    label: 'ETHWaterloo 2019',
    secondaryLabel: 'Overall + 5 Sponsor Prizes Winner',
    description:
      'Built Connexion - a decentralized messaging solution built on Ethereum to let users send messages to each other using just their wallet address. The project was built as a MetaMask Snap and was awarded sponsor prizes from MetaMask, ConsenSys, Dfuse (now StreamingFast), Ethereum Name Service, and Pepo. It also won the overall prize at the hackathon.',
  },
  {
    id: 7,
    startDate: 'Jan 2019',
    endDate: 'May 2019',
    logo: '/logos/dapperlabs.jpg',
    link: 'https://www.dapperlabs.com/',
    label: 'Dapper Labs',
    secondaryLabel: 'Blockchain Developer Intern',
    description:
      'At Dapper Labs, I worked primarily on the MPC Dapper Wallet team where I helped build various features for the Wallet backend service. I also wrote various indexers for Ethereum to parse the chain for Dapper Wallet related transactions. Additionally, I set up an OAuth2 and OpenID server for Dapper to allow users to Login with Dapper on third party applications.',
  },
  {
    id: 6,
    startDate: 'May 2018',
    endDate: 'Sep 2018',
    logo: '/logos/ukkoagro.jpg',
    link: 'https://ukko.ag',
    label: 'Ukko Agro',
    secondaryLabel: 'Backend Developer Intern',
    description:
      'During my internship at Ukko Agro, I worked as a Backend Software Engineer and helped build a Python module for data processing and report generation for the user facing analytical product. I also containerized their existing architecture and set up a CI/CD pipeline using Gitlab Hooks and IBM Cloud where the application was deployed on Kubernetes clusters. I also contributed to their multivariate neural network model for predicting crop yield and optimal supplements usage.',
  },
  {
    id: 5,
    startDate: 'Sep 2017',
    endDate: 'Sep 2021',
    logo: '/logos/uwaterloo.png',
    link: 'https://uwaterloo.ca',
    label: 'University of Waterloo',
    secondaryLabel: 'Honors Computer Science and Philosophy',
    description:
      'Studied Honors Computer Science along with a minor in Philosophy from the University of Waterloo.',
  },
  {
    id: 4,
    startDate: 'May 2015',
    endDate: 'Sep 2017',
    logo: '/logos/code.jpg',
    link: '#',
    label: 'Freelancer',
    secondaryLabel: 'Software Developer',
    description:
      'Worked on a variety of projects for clients. Built 300+ trading bots for Counter-Strike: GO and Team Fortress 2, 25+ SA:MP game servers and plugins, 5 CoinChat multiplayer games, and a couple of websites.',
  },
  {
    id: 3,
    startDate: 'Jan 2017',
    endDate: 'Sep 2017',
    logo: '/logos/alphone-bots.jpg',
    link: '#',
    label: 'alphone.trade',
    secondaryLabel: 'Builder',
    description:
      'Built an automated trading bot and platform for trading in-game assets from Counter-Strike: GO and Team Fortress 2 in exchange for cryptocurrency. Conducted over 20,000 trades.',
  },
  {
    id: 2,
    startDate: 'Aug 2016',
    endDate: 'Aug 2016',
    logo: '/logos/yygs.jpg',
    link: 'https://globalscholars.yale.edu/',
    label: 'Yale Young Global Scholars',
    secondaryLabel: 'Student of Technology, Innovation, and Entrepreneurship',
    description:
      'Attended a 2-week session of the YYGS 2016 summer program at Yale University. Learnt about building a company, doing market research, designing elevator pitches, and identifying weaknesses in our ideas among other things.',
  },
  {
    id: 1,
    startDate: 'Jul 2016',
    endDate: 'Aug 2016',
    logo: '/logos/espr.png',
    link: 'https://espr.camp',
    label: 'European Summer Program in Rationality',
    secondaryLabel: 'Student',
    description:
      "Attended the ESPR program at Oxford University, UK. I had the opportunity to learn from some of the world's leading researchers from CFAR and FHI about rationality, game theory, mathematical logic, AI safety, and cognitive science.",
  },
];

export function Timeline() {
  return (
    <div className="flex flex-col gap-4 py-8">
      <div className="flex w-fit items-end">
        <h3 className="text-2xl font-semibold">Timeline</h3>
      </div>

      <div className="flex h-[30rem] flex-col gap-4 overflow-y-scroll">
        {TimelineItems.map((item) => (
          <Link key={item.id} href={item.link} target="_blank">
            <div className="flex gap-4">
              <div className="flex w-max shrink-0 flex-col font-mono text-sm text-muted-foreground">
                <span>{item.endDate}</span>
                <span>{item.startDate}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" />
                <span className="w-[2px] grow bg-transparent bg-gradient-to-b from-muted-foreground from-50% to-0% bg-[length:2px_12px] bg-repeat-y" />
              </div>

              <div className="group flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src={item.logo}
                    className="h-6 w-6 rounded-full grayscale transition-all duration-300 group-hover:grayscale-0"
                    alt={item.label}
                  />
                  <span className="font-medium">{item.label}</span>
                  <span> • </span>
                  <span className="font-medium text-muted-foreground transition-all duration-300 group-hover:text-accent-foreground">
                    {item.secondaryLabel}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
