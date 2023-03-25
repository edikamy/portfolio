import {
  antdesign,
  aranuma,
  backend,
  creator,
  css,
  cypress,
  designwidget,
  dggold,
  docker,
  emotion,
  figma,
  git,
  hastibazar,
  html,
  inchand,
  javascript,
  jest,
  jira,
  materialui,
  mobile,
  mongodb,
  nodejs,
  nx,
  queensite,
  radinhamkaran,
  reactjs,
  reactquery,
  redux,
  sarrafEx,
  sonarqube,
  tailwind,
  threejs,
  typescript,
  vite,
  web,
  webpack,
} from '../assets'
import type { IExperience, INavLink, IProject, IService, ITechnology, ITestimonial } from './types'

export const navLinks: INavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services: IService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Team Leader',
    icon: creator,
  },
  {
    title: 'Designer',
    icon: backend,
  },
]

const technologies: ITechnology[] = [
  {
    name: 'Html 5',
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
    name: 'React Query',
    icon: reactquery,
  },
  {
    name: 'Material UI',
    icon: materialui,
  },
  {
    name: 'Ant Design',
    icon: antdesign,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Emotion',
    icon: emotion,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'GIT',
    icon: git,
  },
  {
    name: 'Jira',
    icon: jira,
  },
  {
    name: 'NX monorepo',
    icon: nx,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'Cypress',
    icon: cypress,
  },
  {
    name: 'SonarQube',
    icon: sonarqube,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'Webpack',
    icon: webpack,
  },
  {
    name: 'Docker',
    icon: docker,
  },
]

const experiences: IExperience[] = [
  {
    title: 'Front End Team Leader',
    company_name: 'Queen-site',
    description:
      'A European software house specialized in web-based standard and custom-made software development with its headquarter in the Netherlands, a branch office in Sofia, and employee’s located in several countries.They build products for the European and northern American markets according to these regions quality, security, and privacy standards and regulations.',
    icon: queensite,
    iconBg: '#eee',
    date: 'May 2020 - Present',
    link: 'https://queensite.eu/',
    points: [
      "Build a portal to display the components used in the organization's projects in the form of monorepo project using typescript technology and packages such as nx - rollup - tsdx - lerna - storybook",
      'Implement tests using react testing library - jest - cypress  and evaluate tests with Using SonarQube',
      'Implementing various components for the project using packages such as: material-ui - react-table - react dnd',
      'Build and cooperate in flowershop e-commerce project using typescript - next.js - graphql - intl technologies',
      'Implement unit tests using jest and react-testing-library and also E2E testing using Cypress and Review tests using SonarQube responsibly.',
      'Build and collaborate on the backoffice project to manage the e-Commerce site and use graphQl and implement multilingualism using React intl responsibly.',
      'Design part of the user experience based on Adobe XD and Figma and collaborate and convey comments to the design team.',
    ],
  },
  {
    title: 'Front End Team Lead',
    company_name: 'Hasti Innovative Trading (HIT)',
    description:
      'A subsidiary of Golrang Industrial Group active in the eCommerce Industry. They are committed to developing a platform that is dedicated to facilizing selling and buying products that empower people to do business as well as, creating a new intelligent marketplace.',
    icon: hastibazar,
    iconBg: '#eee',
    date: 'April 2022 - October 2022',
    link: 'http://www.hasti.co/',
    points: [
      'Providing advice for setting up Frontend Team',
      'Build infrastructure and work on e-commerce, admin panel, and vendor panel projects using NextJS Redux Rtk-Query Material UI, In addition to building the infrastructure for all projects on NX monorepo and some libraries',
      'Coached five front-end teams in agile methodologies.',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Aranuma',
    description:
      'An active company in Industry 4.0 and provides Internet of Things (IoT) products and services to the industry',
    icon: aranuma,
    iconBg: '#eee',
    date: 'April 2019 - May 2020',
    link: 'https://www.aranuma.com/',
    points: [
      'Implement a storyboard from our specific components and show the working process of the components. ',
      'Ideation, Design and implementation of PWA software in the field of IoT to display information on iron ore factories using React - CRA - Saga - Ant design - SaaS - FlexBox - ServiceWorker - WorkBox technologies.',
      'Design, implement and cooperation in the IoT Dashboard project to manage and display hardware information inside iron ore factories using technologies such as: CRA - Redux - Saga - WebSocket',
    ],
  },
  {
    title: 'Front End Developer',
    company_name: 'Inchand',
    description: 'An E-commerce marketplace website',
    icon: inchand,
    iconBg: '#eee',
    date: 'October 2018 - March 2019',
    link: 'https://inchand.com/',
    points: [
      "Build the company's Android and IOS mobile software using React native as a web view",
      'Design a series of landing pages for the e-commerce shop website using React',
      'Collaboration in the implementation of management dashboard based on PHP - HTML - CSS',
    ],
  },
  {
    title: 'IT Manager',
    company_name: 'Radin Hamkaran Behta',
    description: 'A General Contractor, worked on BIM (Building information technology)',
    icon: radinhamkaran,
    iconBg: '#eee',
    date: 'August 2015 - September 2018',
    link: 'https://radinhamkaran.com/',
    points: [
      'Manage IT department',
      'Build some PHP websites for internal uses of the company',
      'Work with Unity and Unreal engin to generate building 3D model in app.',
      'SEO and Web Analyze news website',
      'Worked on some skills like: create portals with MVC - use SQL - MySql and so on',
      'Worked Augmented reality with Microsoft Hololens and create Virtual reality game with Unity for Htc Vive',
    ],
  },
]

const testimonials: ITestimonial[] = [
  {
    testimonial:
      "Only a few lucky people have the pleasure to work with someone like Kambiz. He filled the role of Lead Front-end Developer like an expert more than three years for my company’s high-end product development team. I was always impressed by Kambiz’s dedication, his skills to find an out of the box solution, deal with everyone in the team and think along with the business. He knew how to motivate the team to take ownership and to leave daily stand-up’s with a smile. It's always a privilege to work with you Kambiz.",
    name: 'Reza Safari',
    designation: 'Business Owner',
    company: 'Queensite',
    image:
      'https://media.licdn.com/dms/image/D4D03AQHBtSQlSU4ZaA/profile-displayphoto-shrink_100_100/0/1633795071711?e=1684972800&v=beta&t=W7ZwzNC0Nf7PG6z87svVNOikm1Px7T5Y-MaMKpAanYc',
  },
  {
    testimonial:
      'Kambiz is an excellent resource, and a master at front-end programming has been a real gem to our team. He makes sure all the deadlines meet and that also with He is a hardworking and dedicated person who will complete your project in a given time frame. I would recommend and endorse Kambiz.',
    name: 'Mehdi Panahi',
    designation: 'CTO',
    company: 'Aranuma',
    image:
      'https://media.licdn.com/dms/image/C4E03AQG0L62s1sjVaQ/profile-displayphoto-shrink_100_100/0/1634480823318?e=1684972800&v=beta&t=va1-dOOmTMCbr9My2mW0fXgXsTlDqdgZZWOIutAhG9I',
  },
  {
    testimonial:
      'Kambiz is one of the most moral and knowledgeable people I know. In working with Kambiz, you will learn to be a professional. every single moment I have worked with Kambiz will remain in my mind. I learned many things from him, leadership and problem solving are the best ones. Worked with him is one of the best my chances in my work life.',
    name: 'Hannan Ebrahimi Sotoudeh',
    designation: 'Software Developer',
    company: 'Queensite',
    image:
      'https://media.licdn.com/dms/image/D4E03AQG0-z95hYKvBA/profile-displayphoto-shrink_100_100/0/1670238764707?e=1684972800&v=beta&t=53PZQQYGm5GLSGAIbuky-WEcLO3C6UfIiU7mnl6KZbo',
  },
]

const projects: IProject[] = [
  {
    name: 'SarrafEx',
    description:
      "SarrafEx is a Crypto Currencies Trading Platform - Collaboration in designing and implementing the company's web and pwa application using figma - react - nextjs and material UI",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'material ui',
        color: 'pink-text-gradient',
      },
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
    ],
    image: sarrafEx,
    source_code_link: 'https://sarrafex.com/',
  },
  {
    name: 'DG Gold',
    description:
      "Dg-Gold is a creative idea in Gold trading market, which is created in order to facilitate buying and selling Gold online. Collaboration in designing and implementing the company's web application using React - redux - saga - socket io - Axios Development and design of user interface and user experience of the company's native application on Adobe XD Implementing mobile software on the React Native platform and using packages such as React Query - Axios - signalR - React Native Elements - FireBase",
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'native base',
        color: 'green-text-gradient',
      },
    ],
    image: dggold,
    source_code_link:
      'https://steprimo.com/android/us/download/Y29tLmRnZ29sZA==/ZTM1Y2Y2MDI3OGI5YjI3NTEyZDNkNjQzOTBmZTM0OTk=/',
  },
  {
    name: 'Design Status',
    description: 'Design status is a figma widget for help designers to manage team works easily.',
    tags: [
      {
        name: 'figma',
        color: 'blue-text-gradient',
      },
      {
        name: 'widget',
        color: 'green-text-gradient',
      },
      {
        name: 'plugin',
        color: 'pink-text-gradient',
      },
    ],
    image: designwidget,
    source_code_link: 'https://www.figma.com/community/widget/1123950002398142129/Design-Status/',
  },
]

export { experiences, projects, services, technologies, testimonials }
