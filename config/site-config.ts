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
    layout: '2x1',
    type: 'mentor',
    title: 'Next.js Mentorship',
    icon: 'superpeer',
    promotion: 'MAKRDEVFELLOWS',
    oldPrice: '$100',
    price: '$50',
    buttonLink: 'https://superpeer.com/makrdev/-/nextjs-mentor',
  },
  {
    layout: '2x1',
    type: 'mentor',
    title: 'Supabase Mentorship',
    icon: 'superpeer',
    promotion: 'MAKRDEVFELLOWS',
    oldPrice: '$100',
    price: '$50',
    buttonLink: 'https://superpeer.com/makrdev/-/supabase-mentor',
  },
  {
    layout: '2x1',
    type: 'project',
    title: 'makrAI',
    icon: 'github',
    color: '#070707',
    buttonLink: 'https://github.com/batuhanbilginn/makr-ai',
    stars: 73,
  },
  {
    layout: '2x2',
    type: 'social',
    title: 'Full-stack Multilingual Blog with Next.js 13',
    username: '@batuhanbilginn',
    description:
      'Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.',
    icon: 'udemy',
    buttonTitle: 'Enroll',
    buttonSecondaryText: '%90 OFF',
    buttonLink:
      'https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2',
  },
  {
    layout: '2x1',
    type: 'project',
    title: 'AI Blog Post Generator',
    icon: 'github',
    stars: 19,
    color: '#070707',
    buttonLink: 'https://github.com/batuhanbilginn/ai-blog-post-generator',
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
