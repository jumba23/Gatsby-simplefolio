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
    'Hi! I am a passionate, self-taught developer and solution-oriented individual with a proficient understanding of software development lifecycle. With a high level of attention to details and the ability to learn quickly, often in high-pressure situations, I am excited to work with your team.',
  paragraphTwo:
    'The desire to learn, grow, and improve is what brought me to this point in the first place, but the beauty of this field is that it is so dynamic that there will always be some way to enhance or adapt my skills and learn something new.',
  paragraphThree:
    'I have a passion for creating unique front-end interfaces and will make sure each of my sites has its own personality to match the functionality. At the same time, I appreciate the challenge of building the servers, databases, and middleware required to make a site powerful and efficient so it can fulfill its full potential.',
  resume: 'https://drive.google.com/file/d/1FsINMl3agkQNpCTTHa2bAfeWDLalaICE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
    info: 'An app built with a React and React Bootstrap libraries.This project was my first experience building with React and using various React Hooks, fetching data with axios, pagination, and asynchronous functions. A user can search characters or move through pages by clicking on buttons with ease.',
    info2: '',
    url: 'https://star-wars-api-app-gc.herokuapp.com/',
    repo: 'https://github.com/jumba23/STAR-WARS-API-APP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expense.png',
    title: 'Expense Tracker App',
    info: 'This was my first app written using React and Bootstrap libraries. This app utilizes work with forms and lists, as well as the local memory as additional functionality. A user can add and remove items with ease, without a fear of losing data.',
    info2: '',
    url: 'https://react-expense-tracker-app-21.herokuapp.com/',
    repo: 'https://github.com/jumba23/Expense-Tracker-App-REACT', // if no repo, the button will not show up
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
