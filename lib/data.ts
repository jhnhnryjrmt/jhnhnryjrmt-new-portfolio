import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import comingSoon from '@/public/coming-soon.jpg';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated College',
    company: 'Ramon Magsaysay Memorial Colleges',
    description:
      'Graduated with a bachelor\'s degree in IT.',
    icon: React.createElement(LuGraduationCap),
    date: '03-2018',
  },
  {
    title: 'IT Specialist',
    company: 'Pryce Gases, Inc.',
    description:
      'I worked as an IT Specialist at Pryce Gases, Inc.',
    icon: React.createElement(CgWorkAlt),
    date: '11/2019 - 09/2020',
  },
  {
    title: 'Web Developer Trainee',
    company: 'VOLENDAY INC.',
    description:
      'I worked as a Web Developer Trainee for 3 months at VOLENDAY',
    icon: React.createElement(CgWorkAlt),
    date: '03/2022 - 06/2022',
  },
  {
    title: 'IT Support Engineer',
    company: 'CloudConsole, Inc.',
    description:
      "I'm now an IT Support Engineer at CloudConsole with tech-support experience.",
    icon: React.createElement(CgWorkAlt),
    date: '08/2022 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Projects will be listed here soon!',
    description:
      'This is my very first portfolio. Projects will be posted here soon!',
    tags: ['None'],
    imageUrl: comingSoon,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MySQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
