import project1 from "../public/VibePair.webp";
import project2 from "../public/Task Manajar.webp";
import project3 from "../public/TastyFuud.webp";
import project4 from "../public/WanderLust.webp";
import project5 from "../public/Portfolio.webp";
import project6 from "../public/Weather Forcast.webp";

export const projectData = [
  {
    id: 1,
    image: project1,
    title: "VibePair",
    description:
      "A Tinder/Bumble-style matchmaking app featuring real-time chat, friend requests, profile management, and Cloudinary image uploads. Built using a modern MERN stack.",
    link: "https://vibepair.online/home",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
  },
  {
    id: 2,
    image: project2,
    title: "Task Manager",
    description:
      "A task management system developed as a take-home assignment. Supports user authentication, task CRUD, team collaboration, and dashboard features.",
    link: "https://task-manajer.netlify.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    image: project3,
    title: "Tatsy Fuud",
    description:
      "A frontend food delivery application inspired by Swiggy/Zomato. Includes restaurant listings, cart functionality, and routing using Redux and React Router.",
    link: "https://tasty-fuud1.netlify.app/",
    technologies: ["React", "Redux", "Tailwind CSS", "React Router"],
  },
  {
    id: 4,
    image: project4,
    title: "WanderLust",
    description:
      "A full-stack travel blog platform built using Node.js, Express, MongoDB, and EJS. Designed for managing travel destinations with full CRUD functionality and server-side rendering.",
    link: "https://github.com/Himanshu-Yadav897/wanderingWorld",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  },
  {
    id: 5,
    image: project5,
    title: "Portfolio Website",
    description:
      "A personal developer portfolio designed with a modern, colorful aesthetic. Built with React and Tailwind CSS to showcase projects, skills, and contact options.",
    link: "https://github.com/yourusername/portfolio",
    technologies: ["React", "Tailwind CSS", "React Router"],
  },
  {
    id: 6,
    image: project6,
    title: "Weather Forecast App",
    description:
      "A simple weather forecast app using OpenWeather API. Users can search any city and get real-time weather details like temperature, humidity, and description.",
    link: "https://github.com/yourusername/weather-forecast",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
];
