import Link from 'next/link';

const TimelineItems = [
  {
    id: 10,
    startDate: 'Feb 2020',
    endDate: '',
    logo: '/logos/ethdenver2020.png',
    link: 'https://www.ethdenver.com/',
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
    link: 'https://www.ethglobal.com/',
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
    endDate: 'Sep 2022',
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
    startDate: 'July 2016',
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

      <div className="flex h-96 flex-col gap-4 overflow-y-scroll">
        {TimelineItems.map((item) => (
          <Link key={item.id} href={item.link} target="_blank">
            <div className="flex gap-4">
              <div className="flex shrink-0 flex-col text-sm text-muted-foreground">
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
                  <span className="font-medium text-muted-foreground">
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
