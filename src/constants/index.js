import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

import azmall from '../assets/projects/azmall.png';
import bidders from '../assets/projects/Bidders-portal.png';
import hh from '../assets/projects/Homework-Hero.png';
import mongo from '../assets/tech/mongo.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Freelancer.com',
    icon: microverse,
    iconBg: '#333333',
    date: 'September 2022 - May 2023',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Homework Hero',
    icon: kelhel,
    iconBg: '#333333',
    date: 'June 2023 - September 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'A-Z Mall',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2024 - May 2024',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Brisk International Limited',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'A-Z Mall',
    description: 'An all in one online shopping center that also houses a plethora of stores. I work on Front end',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: azmall,
    repo: 'https://github.com/Grrd-32',
    demo: 'https://a-zmall.com/',
  },
  {
    id: 'project-2',
    name: 'Homework Hero',
    description:
      'An online class platform that offers it all in one place.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: hh,
    repo: 'https://github.com/Grd-32',
    demo: 'https://homeworkhero.co.ke/',
  },
  {
    id: 'project-3',
    name: 'Bidders Portal',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bidders,
    repo: 'https://github.com/Grd-32',
    demo: 'https://biddersportal.com',
  },
  
  
];

export { services, technologies, experiences, projects };
