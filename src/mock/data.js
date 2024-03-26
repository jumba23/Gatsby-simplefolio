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
    "Hi there, I'm a Full Stack Developer based in San Diego, bringing over 5 years of experience to the table. Specializing in JavaScript, React, Next.js, TypeScript, Node, and SQL, I pride myself not only on my technical abilities but also on my deep dive into the 'why' behind every line of code. This approach ensures not just functionality but also clean, maintainable solutions that stand the test of time. My passion for software development drives me to continually explore new technologies and methodologies, always with the goal of delivering impactful and enduring work./n/n",
  paragraphTwo:
    " Outside of coding, my life revolves around family and achieving a healthy work-life balance. I believe that happiness and fulfillment outside of work amplify my creativity and innovation on the job. If you’re seeking a developer who combines a solid technical foundation with a constant thirst for learning and a proven track record of effective teamwork, let's connect and see how we can work together on your next project./n",
  // paragraphThree:
  //   'I love the ever-evolving landscape of software development and am always eager for the next challenge. I don not just write code; I aim to contribute meaningful solutions that stand the test of time. If you are looking for a developer who pairs technical skill with a deep conceptual understanding, I`d love to connect!',
  resume: 'https://drive.google.com/file/d/1RYwEUwCXnlfKwmD4Z8kx6MSSwVRLLcw5/view?usp=drive_link', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chat.png',
    title: 'Chat App MERN',
    info: 'This app is built using MERN stack. This app utilizes socket.io for communication between frontend and backend. This was my first great venture into REDUX library while utilizing its many features. A user can quickly message friends individually or in a group while the history of the their previous conversation is maintained',
    info2: 'Tech stack: React | Redux | Node.js | Express | MongoDB | Socket.io',
    url: 'https://chat-app-fullstack-mern.herokuapp.com/',
    repo: 'https://github.com/jumba23/chat-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'twitter.png',
    title: 'Twitter Travel App',
    info: 'An application built with a React front-end and Express back-end, and is also mobile responsive for multi-device use. The application uses Twitter-API to display tweets by keyword or username. A user has the option to search on the Search page or view tweets from 5 accounts I have pre-selected on the Favorites page. ',
    info2: 'Tech stack: React | Express | Node.js | Twitter-API | Bootstrap | Heroku',
    url: 'https://twitter-showcase-travel-app.herokuapp.com/',
    repo: 'https://github.com/jumba23/Twitter-Showcase-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'swapi.png',
    title: 'Star Wars API',
    info: 'An app built with a React, React Bootstrap, and React router dom libraries. This project was a great experience in mastering React sates and React Router Hooks, fetching data with Axios, and handling asynchronous API functions. A user can choose a category and see details for each name. Search by category is also available',
    info2: 'Tech stack: React | React Bootstrap | Axios | React Router Dom | Heroku',
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
