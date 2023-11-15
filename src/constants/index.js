import {
  mobile,
  backend,
  creator,
  web,

  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  tensorflow,
  firebase,
  polygon,
  solidity,
  
  ethereum,
  cpp,
  graph,
  nexsus,
  patrickcollins,
  dsc,
  Evault,
  caseopening,
  tokenswap,
  ecertification,
  lottery,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "polygon",
    icon: polygon,
  },
  {
    name: "ethereum",
    icon: ethereum,
  },
  {
    name: "graph",
    icon: graph,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name:  "cpp",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
 

 
 
 
 



];

const experiences = [
  {
    title: "Nexus",
    company_name: "IIIT Pune",
    icon: nexsus,
    iconBg: "#000000",
    date: "October 2023",
    points: [
      "Took part in a 36-hour Nexsus Hackathon at IIIT Pune",
      "Engineered a Blockchain-based file-sharing system on IPFS",
      "Implemented encryption via Binary Static Encoding, utilizing video uploads.",
      "Managed file access through smart contracts, storing IPFS hash for shared files.",
    ],
  },
  {
    title: "Full-Stack Web3 Development",
    company_name: "Patrik Collins",
    icon: patrickcollins,
    iconBg: "#000000",
    date: "May 2023",
    points: [
      "Completed Patrick Collins' course on Blockchain, Solidity, and Web3 Development.",
      "Built NFT MarketPlace for Selling, Buying, Listing, and Trading NFT and learned about DynamicNFT.",
      "Created a SmartContract Lottery Project using ChainLink's Verifiable Random Number Feature for user transparency.",
      "Built a crowdfunding app where users may donate and only fund owners can withdraw.",
      "Learning about Smart Contract Security and auditing's importance ",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Decentralized Stable Coin ",
    description:
      "Developed an ERC-20 Token pegged to USD value with a 200% overcollateralized smart contract, ensuring stability having features for borrowing, depositing, liquidating, and burning tokens ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dsc,
    source_code_link: "https://github.com/Bhavik-punmiya/Decentralized-Stable-Coin",
  },
  {
    name: "E-Vault",
    description:
      "E-Vault is a new Web3 storage platform using IPFS for security and decentralisation. It lets users easily share crucial files and documents while retaining transparency and security",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Evault,
    source_code_link: "https://github.com/Bhavik-punmiya/DigiLocker-Blockchain",
  },
  {
    name: "Case Opening Drop",
    description:
      "Created a transparent chest-like system inspired by famous games like CSGO and FIFA where users can open chests or packages to acquire items. Draw findings and be transparent with Chainlink VRF",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: caseopening,
    source_code_link: "https://github.com/Bhavik-punmiya/case-opening-drop",
  },
  {
    name: "Token Swap",
    description:
      " Created a user-friendly coin exchange platform enabling seamless Cryptocurrency swaps across different Blockchain networks. Utilized the 1-inch API to provide users with a convenient interface",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tokenswap,
    source_code_link: "https://github.com/Bhavik-punmiya/case-opening-drop",
  },
  {
    name: "E-Certification",
    description:
      "Developed a blockchain-based interface for certificate generation and validation, ensuring transparency and immutability. Improved certification processes by targeting government and user use cases.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecertification,
    source_code_link: "https://github.com/Bhavik-punmiya/case-opening-drop",
  },
  {
    name: "SmartContract Lottery",
    description:
      "Designed a decentralized lottery system using Chainlink VRF, ensuring fair and verifiable drawing of results. Open for public verification to maintain transparency and integrity",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lottery,
    source_code_link: "https://github.com/Bhavik-punmiya/case-opening-drop",
  },
];

export { services, technologies, experiences, testimonials, projects };