export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4' | '1x4'; // First number is width, second is height
export type GridItemType = 'social' | 'equipment' | 'mentor' | 'project';
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  button?: boolean;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: '1x2',
    type: 'social',
    title: 'LinkedIn',
    icon: 'linkedIn',
    username: '@lukas-j-han',
    button: false,
    buttonLink: 'https://www.linkedin.com/in/lukas-j-han/',
    color: '#e3e3e3',
  },
  {
    layout: '1x2',
    type: 'social',
    title: 'Tech Blog',
    description: 'My personal blog about tech, startups and life.',
    icon: 'blog',
    username: '@lukasjhan',
    button: false,
    buttonLink: 'https://inblog.ai/lukasjhan',
    color: '#403ae0',
  },
  {
    layout: '2x4',
    type: 'equipment',
    title: 'Skills',
    image: '/skills-image.jpeg',
    equipments: [
      {
        title: 'Nodejs',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Javascript/Typescript',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Serverless',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'C/C++',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'NestJS',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Elixir',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Rust',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Go',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Zig',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'K8S',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'AWS',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'MySQL',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'MongoDB',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'ElasticSearch',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Redis',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Cyber Security',
        link: 'https://github.com/lukasjhan',
      },
    ],
  },
  {
    layout: '2x2',
    type: 'social',
    title: 'Github',
    description: "I'm a passionate open-source contributor.",
    icon: 'github',
    username: '@lukasjhan',
    buttonTitle: 'Repositories',
    buttonSecondaryText: '138',
    buttonLink: 'https://github.com/lukasjhan',
    color: '#070707',
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'SD JWT JS',
    icon: 'github',
    color: '#070707',
    button: false,
    buttonLink: 'https://github.com/lukasjhan',
    description: 'Typescript implementation of Selective Disclosure JWT.',
  },
  {
    layout: '2x2',
    type: 'project',
    title:
      'Startup Success: The Essential Traits of an Outstanding Software Engineer',
    icon: 'blog',
    color: '#070707',
    button: false,
    buttonLink:
      'https://inblog.ai/lukasjhan/startup-success-the-essential-traits-of-an-outstanding-software-engineer-6176',
    description: 'Lesson learned from 3 years my startup journey.',
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'DID (Kor)',
    icon: 'github',
    color: '#070707',
    button: false,
    buttonLink: 'https://lukasjhan.github.io/did-core/',
    description: 'DID standard translation for Korean.',
  },
  {
    layout: '2x4',
    type: 'equipment',
    title: 'Gears',
    image: '/gears.jpg',
    equipments: [
      {
        title: 'Happy Hacking Keyboard',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'RAZER BASILISK V3 PRO',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: '49 inch 32:9 DQHD monitor',
        link: 'https://github.com/lukasjhan',
      },
    ],
  },
  {
    layout: '2x2',
    type: 'project',
    title: 'Building Standard Opensource Libraries: Key Considerations',
    icon: 'blog',
    color: '#070707',
    button: false,
    buttonLink:
      'https://inblog.ai/lukasjhan/building-standard-opensource-libraries-key-considerations-7929',
    description:
      'Based on learning from implementing the core of SD JWT standard.',
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'Serverless AWS Middleware',
    icon: 'github',
    color: '#070707',
    button: false,
    buttonLink: 'https://github.com/lukasjhan/serverless-aws-middleware',
    description:
      'Serverless AWS Middleware is a middleware plugin for serverless backend.',
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'Serverless AWS Infra',
    icon: 'github',
    color: '#070707',
    button: false,
    buttonLink: 'https://github.com/lukasjhan/serverless-aws-infra',
    description:
      'Serverless AWS Infra is a deployment plugin for serverless backend.',
  },
  {
    layout: '2x2',
    type: 'project',
    title:
      'Observability in Critical Global Backend: Ensuring Reliability and Performance',
    icon: 'blog',
    color: '#070707',
    button: false,
    buttonLink:
      'https://inblog.ai/lukasjhan/observability-in-critical-global-backend-ensuring-reliability-and-performance-4245',
    description:
      'Based on experience operating a global high-availability authentication server.',
  },
  {
    layout: '2x4',
    type: 'equipment',
    title: 'Favorite Conferences',
    image: '/city.jpg',
    equipments: [
      {
        title: 'RSA Conference',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'AWS re:Invent',
        link: 'https://github.com/lukasjhan',
      },
      {
        title: 'Github Universe',
        link: 'https://github.com/lukasjhan',
      },
    ],
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'Cyber Security Program (BoB): Top 10',
    icon: 'blog',
    color: '#070707',
    button: false,
    description: 'prize: $10,000',
  },
  {
    layout: '1x2',
    type: 'project',
    title: 'Contributing Open Wallet Foundation',
    icon: 'blog',
    color: '#070707',
    button: false,
    description: 'serveral open source projects for EUDI',
  },
];

export const siteConfig = {
  creator: 'Lukas J Han',
  title: 'Backends Developer & Cloud Architect',
  bio: 'Building scalable and reliable distributed systems.',
  location: 'Palo Alto / US',
  locationLink: 'https://maps.app.goo.gl/tZAcoetsuALLDfzQ7',
  email: 'lukas.j.han@gmail.com',
  items: GridItems,
} as const;
