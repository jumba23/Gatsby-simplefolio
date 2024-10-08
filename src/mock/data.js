import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Goran Cvetic | Software Developer | NextJs, React, TypeScript', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Explore my portfolio website to see my projects as a full-stack software developer specializing in React, Next.js, TypeScript, and more. Learn about my skills, experience, and get in touch directly.', // e.g: Welcome to my website my website
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
    "Hi there, I'm a Full Stack Developer based in San Diego, bringing over 5 years of experience to the table. Specializing in JavaScript, React, Next.js, TypeScript, Node, and SQL, I pride myself not only on my technical abilities but also on my deep dive into the 'why' behind every line of code. This approach ensures not just functionality but also clean, maintainable solutions that stand the test of time. My passion for software development drives me to continually explore new technologies and methodologies, always with the goal of delivering impactful and enduring work.",
  paragraphTwo:
    " Outside of coding, my life revolves around family and achieving a healthy work-life balance. I believe that happiness and fulfillment outside of work amplify my creativity and innovation on the job. If you’re seeking a developer who combines a solid technical foundation with a constant thirst for learning and a proven track record of effective teamwork, let's connect and see how we can work together on your next project.",
  // paragraphThree:
  //   'I love the ever-evolving landscape of software development and am always eager for the next challenge. I don not just write code; I aim to contribute meaningful solutions that stand the test of time. If you are looking for a developer who pairs technical skill with a deep conceptual understanding, I`d love to connect!',
  resume: 'https://drive.google.com/file/d/1RYwEUwCXnlfKwmD4Z8kx6MSSwVRLLcw5/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'homeaway.png',
    title: 'Home Away',
    info: 'A Next.js & TypeScript-based Airbnb replica featuring secure authentication, property listings, booking system with Stripe integration, responsive UI with Tailwind CSS and Shadcn-ui, real-time state management with Zustand, and a Supabase-powered backend.',
    info2: 'Tech stack: NextJs | TypeScript | Supabase | Prisma | Zustand | Zod |Vercel',
    url: 'https://home-away-five.vercel.app/',
    repo: 'https://github.com/jumba23/Home-Away', // if no repo, the button will not show up
  },
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
