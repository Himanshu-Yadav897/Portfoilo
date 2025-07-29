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
      "A Tinder/Bumble-style matchmaking app featuring real-time chat, friend requests, profile management, and Cloudinary image uploads. Built using a modern MERN stack with Socket.io for real-time functionality.",
    githubLink: "https://github.com/Himanshu-Yadav897/devTinderWeb", 
    liveLink: "https://vibepair.online",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Socket.io"],
  },
  {
    id: 2,
    image: project2,
    title: "Task Manager",
    description:
      "A comprehensive task management system with user authentication, task CRUD operations, team collaboration features, and an intuitive dashboard for productivity tracking.",
    githubLink: "https://github.com/Himanshu-Yadav897/task-manager",
    liveLink: "https://task-manajer.netlify.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: 3,
    image: project3,
    title: "Tasty Fuud",
    description:
      "A modern food delivery application inspired by Swiggy/Zomato. Features restaurant listings, advanced cart functionality, search filters, and seamless routing with Redux state management.",
    githubLink: "https://github.com/Himanshu-Yadav897/Namaste_React", // Add your GitHub repo
    liveLink: "https://tasty-fuud1.netlify.app/",
    technologies: ["React", "Redux", "Tailwind CSS", "React Router", "API Integration"],
  },
  {
    id: 4,
    image: project4,
    title: "WanderLust",
    description:
      "A full-stack travel blog platform with user authentication, destination management, image uploads, and review system. Built with server-side rendering for optimal SEO performance.",
    githubLink: "https://github.com/Himanshu-Yadav897/wanderingWorld",
    liveLink: "https://github.com/Himanshu-Yadav897/wanderingWorld", // Add your live demo if available
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
  },
  {
    id: 5,
    image: project5,
    title: "Portfolio Website",
    description:
      "A responsive developer portfolio with modern design aesthetics, smooth animations, project showcases, and contact integration. Built with performance optimization in mind.",
    githubLink: "https://github.com/Himanshu-Yadav897/Portfoilo",
    liveLink: "https://portfolio8971.netlify.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
  },
  {
    id: 6,
    image: project6,
    title: "Weather Forecast App",
    description:
      "An intuitive weather application with real-time data from OpenWeather API. Features location-based weather, 5-day forecasts, and responsive design for all devices.",
    githubLink: "https://github.com/Himanshu-Yadav897/WeatherForcast",
    liveLink: "https://weatherforcast001.netlify.app/", 
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Geolocation"],
  },
];