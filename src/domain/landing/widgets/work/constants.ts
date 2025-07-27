export type Work = {
  name: string
  title: string
  description: string
  website?: string
  code?: string
  tags: string[]
  text: string[]
}

export const WORKS: Work[] = [
  {
    name: 'solana-mirror',
    title: 'Solana Mirror',
    description: 'Retrieve current and historical data for your Solana wallet',
    code: 'https://github.com/solana-mirror',
    tags: ['Rust', 'Docker'],
    text: [
      'Developed a Rust crate that gets current and historical (dollar) balances of a Solana wallet',
      'Rebuilt a portion of Solana’s JSON-RPC client to support batching requests and HTTP client reuse',
      'Built a pipeline to deploy the service in a Docker container on an AWS Lightsail instance',
    ],
  },
  {
    name: 'cyberdex',
    title: 'CyberDEX',
    description: 'Liquid futures trading on Optimism, powered by Synthetix',
    website: 'https://cyberdex.xyz',
    tags: ['UI/UX', 'NextJS', 'Redux', 'Ethers'],
    text: [
      'Designed a UI that resembles as much as possible the UX on a centralized exchange',
      'Wrote code to implement the trading experience, accommodating Synthetix’s smart contracts',
      'Oversaw and reviewed the tasks of other developers in the team, reviewed and refactored code',
    ],
  },
  {
    name: 'blurt',
    title: 'Powerpush/Blurt',
    description:
      'A social platform to send and receive money seamlessly on the blockchain',
    website: 'https://ethglobal.com/showcase/power-push-5y93i',
    tags: ['Brand Design', 'UI/UX', 'TailwindCSS', 'React'],
    text: [
      'Designed a chatting interface to allow sending and receiving crypto',
      'Used the Push SDK to enable communication between wallet addresses',
    ],
  },
]
