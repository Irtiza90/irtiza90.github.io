import type { Project } from '../types/index';

export const PROJECTS: Project[] = [
  {
    title: 'Memora',
    description: `
      <p><strong>Memora</strong> is a modern, AI-powered flashcard application designed to enhance the learning process. Built with React, and Flask (Python), Memora allows users to easily create, organize, and review flashcards on various topics. The app generates custom flashcards based on user input, providing a dynamic and personalized study experience. With its sleek design and user-friendly interface, Memora makes learning interactive and efficient.</p>
      <p>The app integrates advanced AI tools to offer real-time feedback, ensuring users receive valuable insights as they study. Whether you're preparing for exams or learning a new skill, Memora provides a seamless and enjoyable way to reinforce knowledge. Its responsive design ensures a smooth experience across all devices, making it the perfect tool for learners on the go.</p>
    `,
    tags: ['AI', 'Flashcards', 'React', 'Flask', 'Python', 'Education', 'Web App'],
    image: '/assets/img/projects/memora.jpg',
    liveUrl: 'https://irtiza90.github.io/Memora/',
    viewBtnText: 'Live Site',
  },
  {
    title: 'ReChat',
    description: `
      <p>ReChat is a prototype chat app built with React and Laravel/PHP. It allows for messaging with a responsive interface, supporting multiple client updates, and chat history.</p>
      <p>It was built to gain experience in managing sockets, state management in React, and handling server-client communication.</p>
    `,
    tags: ['Chat App', 'Real-Time', 'React', 'Laravel', 'PHP', 'Sockets', 'Web App'],
    image: '/assets/img/projects/re-chat.jpg',
    githubUrl: 'https://github.com/Irtiza90/ReChat',
    liveUrl: 'https://github.com/Irtiza90/ReChat',
    viewBtnText: 'Github',
  },
  {
    title: 'Self Driving Car',
    description: `
      <p>The Arduino-powered self driving car is a project that was designed to work as a miniature version of self-driving vehicles that are capable of navigating the environment without human intervention.</p>
      <p>The vehicle is equipped with an Arduino along with ultrasonic sensors mounted on a servo assembly. It works by scanning the enviornment and taking snapshots to create a map of the surrounding enviornment. The arduino then processes the sensor data and calculates the best direction that is available to move in.</p>
    `,
    tags: ['Arduino', 'Robotics', 'Self-Driving', 'Sensors', 'Embedded Systems', 'Autonomous Vehicle'],
    image: '/assets/img/projects/self-driving-car.jpg',
  },
];
