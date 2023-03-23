import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Goran',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am passionate about coding and continuously learning new technologies. It is something I can do for days on end. When I am not working, I enjoy spending time with my wife and kids. Family is very important to me, and I always strive to maintain a good work-life balance.',
  paragraphTwo:
    'At my current job, I was presented with an opportunity to learn about another programming paradigm. I gladly took on this challenge without hesitation, even while continuing to complete my current job tasks uninterrupted. I dedicated significant time to understanding JavaScript and React, taking extra time to grasp the smallest nuances of both. With React, my main interest was in state management and custom hooks, which I was able to apply to my portfolio apps. These skills have proven invaluable in my current role as a software developer.',
  paragraphThree:
    'I love what I do and am always eager to learn more. The dynamic nature of software development keeps me engaged and motivated to improve. I am committed to providing high-quality work and am constantly seeking out new challenges to help me grow as a developer.',
  resume: 'https://drive.google.com/file/d/13gZ7JS-E-pxXR281zTYNvfSolpA2GH5_/view?usp=share_link', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chat.png',
    title: 'Chat App MERN',
    info: 'This app is built using MERN stack. This app utilizes socket.io for communication between frontend and backend. This was my first great venture into REDUX library while utilizing its many features. A user can quickly message friends individually or in a group while the history of the their previous conversation is maintained',
    info2: '',
    url: 'https://chat-app-fullstack-mern.herokuapp.com/',
    repo: 'https://github.com/jumba23/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter.png',
    title: 'Twitter Travel App',
    info: 'An application built with a React front-end and Express back-end, and is also mobile responsive for multi-device use. The application uses Twitter-API to display tweets by keyword or username. A user has the option to search on the Search page or view tweets from 5 accounts I have pre-selected on the Favorites page. ',
    info2: '',
    url: 'https://twitter-showcase-travel-app.herokuapp.com/',
    repo: 'https://github.com/jumba23/Twitter-Showcase-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'swapi.png',
    title: 'Star Wars API',
    info: 'An app built with a React, React Bootstrap, and React router dom libraries. This project was a great experience in mastering React sates and React Router Hooks, fetching data with Axios, and handling asynchronous API functions. A user can choose a category and see details for each name. Search by category is also available',
    info2: '',
    url: 'https://star-wars-api-version2.herokuapp.com/',
    repo: 'https://github.com/jumba23/StarWars-API', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'g.cvetic23@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/goran-cvetic/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jumba23',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
