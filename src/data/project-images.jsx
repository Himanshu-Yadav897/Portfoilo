// src/components/data/project-images.jsx
import Portfolio from "../../public/Portfolio.png";
import Portfolio2 from "../../public/Portfolio 2.png";

import VibePair from "../../public/VibePair.png";
import VibePair2 from "../../public/VibePair 2.png";
import VibePair3 from "../../public/VibePair 3.png";
import VibePair4 from "../../public/VibePair 4.png";
import VibePair5 from "../../public/VibePair 5.png";
import VibePair6 from "../../public/VibePair 6.png";

import Task1 from "../../public/Task Manajar.png";
import Task2 from "../../public/Task Manajar 2.png";
import Task3 from "../../public/Task Manajar 3.png";
import Task4 from "../../public/Task Manajar 4.png";

import Tasty from "../../public/TastyFuud.png";
import Tasty2 from "../../public/TastyFuud 2.png";
import Tasty3 from "../../public/TastyFuud 3.png";
import Tasty4 from "../../public/TastyFuud 4.png";

import WanderLust from "../../public/WanderLust.png";
import WanderLust2 from "../../public/WanderLust 2.png";
import WanderLust3 from "../../public/WanderLust 3.png";
import WanderLust4 from "../../public/WanderLust 4.png";

import Weather from "../../public/Weather Forcast.png";
import Weather2 from "../../public/Weather Forcast 2.png";
import Weather3 from "../../public/Weather Forcast 3.png";
import Weather4 from "../../public/Weather Forcast 4.png";

import Password from "../../public/Password.png";
import Password2 from "../../public/Password 2.png";
import Password3 from "../../public/Password 3.png";

import Razorpay from "../../public/Razorpay.png";
import Razorpay2 from "../../public/Razorpay 2.png";
import Razorpay3 from "../../public/Razorpay 3.png";
import Razorpay4 from "../../public/Razorpay 4.png";
import Razorpay5 from "../../public/Razorpay 5.png";
import Razorpay6 from "../../public/Razorpay 6.png";

import Simon from "../../public/Simon.png";
import Simon2 from "../../public/Simon 2.png";

import Bike from "../../public/Bike.png";
import Bike2 from "../../public/Bike 2.png";
import Bike3 from "../../public/Bike 3.png";
import Bike4 from "../../public/Bike 4.png";
import Bike5 from "../../public/Bike 5.png";
import Bike6 from "../../public/Bike 6.png";
import Bike7 from "../../public/Bike 7.png";

import Eguru from "../../public/Eguru.png";
import Eguru2 from "../../public/Eguru 2.png";

import Assignment1 from "../../public/Assignment 1.png";
import Assignment2 from "../../public/Assignment 2.png";

import Genius from "../../public/Genius Clone.png";

import Tinder from "../../public/TinderWeb .png";
import Tinder2 from "../../public/TinderWeb 2.png";
import Tinder3 from "../../public/TinderWeb 3.png";
import Tinder4 from "../../public/TinderWeb 4.png";

const imgSlide1 = [{ src: Portfolio }, { src: Portfolio2 }];

const imgSlide2 = [
  { src: VibePair },
  { src: VibePair2 },
  { src: VibePair3 },
  { src: VibePair4 },
  { src: VibePair5 },
  { src: VibePair6 },
];

const imgSlide3 = [
  { src: Task1 },
  { src: Task2 },
  { src: Task3 },
  { src: Task4 },
];

const imgSlide4 = [
  { src: Tasty },
  { src: Tasty2 },
  { src: Tasty3 },
  { src: Tasty4 },
];

const imgSlide5 = [
  { src: WanderLust },
  { src: WanderLust2 },
  { src: WanderLust3 },
  { src: WanderLust4 },
];

const imgSlide6 = [
  { src: Weather },
  { src: Weather2 },
  { src: Weather3 },
  { src: Weather4 },
];

const imgSlide7 = [{ src: Password }, { src: Password2 }, { src: Password3 }];

const imgSlide8 = [
  { src: Razorpay },
  { src: Razorpay2 },
  { src: Razorpay3 },
  { src: Razorpay4 },
  { src: Razorpay5 },
  { src: Razorpay6 },
];

const imgSlide9 = [{ src: Simon }, { src: Simon2 }];

const imgSlide10 = [
  { src: Bike },
  { src: Bike2 },
  { src: Bike3 },
  { src: Bike4 },
  { src: Bike5 },
  { src: Bike6 },
  { src: Bike7 },
];

const imgSlide11 = [{ src: Eguru }, { src: Eguru2 }];

const imgSlide12 = [{ src: Assignment1 }, { src: Assignment2 }];

const imgSlide13 = [{ src: Genius }];
const imgSlide14 = [
  { src: Tinder },
  { src: Tinder2 },
  { src: Tinder3 },
  { src: Tinder4 },
];

export const projectData = [
  {
    year: "July 2025",
    title: "Portfolio",
    description:
      " Designed and developed a professional personal portfolio website to showcase work, highlight skills, and document my software journey.Focused on clean structure, responsive design, and seamless animations.",
    Bullet: [
      "✅ Multi-page setup using React Router",
      "✅ Framer Motion for smooth transitions and micro-interactions",
      "✅ Tailwind CSS for responsive, consistent styling",
      "✅ Mobile-first layout with dark mode support",
      "✅ Integrated sections for Projects, Skills, Timeline & Contact",
    ],
    images: imgSlide1,
  },
  {
    year: "June 2025",
    title: "VibePair",
    description:
      "  Built a Tinder/Bumble-style matchmaking web app for connecting users based on vibes. Developed using the MERN stack with a focus on  real-time interactions, user experience, and scalable image handling.",
    Bullet: [
      "✅ Matchmaking logic with friend requests and real-time chat",
      "✅ User authentication and profile management",
      "✅ Cloudinary integration for profile photo uploads via Upload Widget",
      "✅ MongoDB used to store user data and image URLs",
      "✅ React.js frontend with conditional navbar and dropdown UX",
    ],
    images: imgSlide2,
  },
  {
    year: "April 2025",
    title: "Task Manager",
    description:
      " Built a full-stack Task Management System for organizing and tracking work across teams. Designed for productivity with a focus on intuitive UX and real-time collaboration.",
    Bullet: [
      "✅ User authentication & role-based access",
      "✅ Create, assign, and manage tasks with status updates",
      "✅ Search, filter, and notifications system",
      "✅ Built using React, Node.js, Express, and MongoDB",
    ],
    images: imgSlide3,
  },
  {
    year: "January 2025",
    title: "TastyFuud",
    description:
      " Developed a basic food delivery web app to practice frontend skills and React ecosystem. Focused on routing, state management, and UI components without prioritizing production deployment.",
    Bullet: [
      "✅ Created product listing, cart, and checkout pages with dummy data",
      "✅ Used Redux for state management and React Router for navigation",
      "✅ Styled using Tailwind CSS with a desktop-focused layout",
      "✅ Hosted on Netlify; explored CORS handling and Netlify functions",
    ],
    images: imgSlide4,
  },
  {
    year: "September 2024",
    title: "Weather Forecast App",
    description:
      " A responsive weather forecast web application built using" +
      <strong>HTML</strong> +
      "," +
      <strong>CSS</strong> +
      ", and " +
      <strong>vanilla JavaScript</strong> +
      ". Fetches real-time weather data from the OpenWeatherMap API.",
    Bullet: [
      "✅ Displays current weather, temperature, humidity, and wind speed",
      "✅ Search by city name with basic error handling",
      "✅ Responsive design for both desktop and mobile screens",
      "✅ Integrated with OpenWeatherMap API using fetch()",
    ],
    images: imgSlide6,
  },
  {
    year: "August 2024",
    title: "TinderWeb Clone",
    description:
      " A visually animated card-swiping interface inspired by Tinder, built using" +
      <strong>HTML</strong> +
      "," +
      <strong>Tailwind CSS</strong> +
      ", and " +
      <strong>vanilla JavaScript</strong> +
      ". Designed specifically for" +
      <strong>mobile screens</strong> +
      ", this project focuses on layout, styling, and swipe-like animations",
    Bullet: [
      "✅ Card-swipe animation triggered on button clicks (Interested/Ignore)",
      "✅ Designed exclusively for mobile screens",
      "✅ Tailwind CSS used for clean, utility-first styling",
      "✅ Built as a UI practice project — no backend or actual matchmaking logic",
    ],
    images: imgSlide14,
  },
  {
    year: "April 2024",
    title: "WanderLust",
    description:
      "A full-stack travel blog platform built using" +
      <strong>Node.js</strong> +
      "," +
      <strong>Express</strong> +
      <strong>MongoDB</strong> +
      ", and " +
      <strong>EJS</strong> +
      ". Designed specifically for" +
      ". Supports CRUD operations for destinations and user-generated content.",
    Bullet: [
      "✅ Users can create, edit, and delete travel destination posts",
      "✅ Used MongoDB for data persistence and Mongoose for schema modeling",
      "✅ Server-side rendered UI using EJS templating engine",
      "✅ RESTful routing and middleware-based request handling",
    ],
    images: imgSlide5,
  },
  {
    year: "February 2024",
    title: "Password Generator",
    description:
      "A lightweight web app built using " +
      "HTML, CSS, and Vanilla JavaScript. " +
      "It generates strong, secure passwords based on user-selected criteria like length and character types.",
    Bullet: [
      "✅ Customizable options for password length, uppercase, lowercase, numbers, and symbols",
      "✅ Real-time password strength feedback with visual indicators",
      "✅ Clipboard copy functionality to easily copy generated passwords",
      "✅ Clean, responsive UI with interactive sliders and toggles",
    ],
    images: imgSlide7,
  },
  {
    year: "January 2024",
    title: "Razorpay Landing Page Clone",
    description:
      "A pixel-perfect clone of Razorpay’s official landing page, built using " +
      "HTML, Tailwind CSS, and JavaScript. Focused on mastering real-world layout structures, responsive design, and utility-first styling.",
    Bullet: [
      "✅ Closely replicates Razorpay’s layout with precise spacing and typography",
      "✅ Fully responsive and mobile-friendly using Tailwind’s utility classes",
      "✅ Component-based structure built with reusability in mind",
      "✅ Practiced real-world design patterns, including grid and flex systems",
    ],
    images: imgSlide8,
  },
  {
    year: "November 2023",
    title: "Simon Says Game",
    description:
      "A memory-based color sequence game inspired by the classic 'Simon Says', built using HTML, CSS, and Vanilla JavaScript. Players must repeat an increasingly long sequence of colors shown by the game.",
    Bullet: [
      "✅ Generates a random sequence of colors each round",
      "✅ User must repeat the sequence correctly to advance",
      "✅ Uses sound effects and animations for feedback",
      "✅ Game restarts on wrong input with visual cue",
    ],
    images: imgSlide9,
  },
  {
    year: "October 2023",
    title: "Bike Landing Page",
    description:
      "A modern and responsive bike landing page built using HTML and Tailwind CSS. Developed as part of a PW Skills assignment to practice layout design and utility-first styling.",
    Bullet: [
      "✅ Clean and modern design with responsive layout",
      "✅ Built using Tailwind CSS utility classes for rapid styling",
      "✅ Mobile-first design principles followed",
      "✅ Fully functional static page with adaptive sections",
    ],
    images: imgSlide10,
  },
  {
    year: "September 2023",
    title: "E-Guru Landing Page",
    description:
      "A static, responsive landing page for a bike showroom built using HTML and classic CSS as part of a PW Skills mini-project. Designed to practice layout, positioning, and responsive web design fundamentals.",
    Bullet: [
      "✅ Clean, mobile-friendly layout using media queries",
      "✅ Semantic HTML structure with proper sectioning",
      "✅ Custom styling using only classic CSS (no framework)",
      "✅ Highlights key features, specifications, and call-to-action",
    ],
    images: imgSlide11,
  },
  {
    year: "August 2023",
    title: "Assignment Test",
    description:
      "A simple static webpage built as part of a PW Skills assignment. Focused purely on learning HTML and classic CSS fundamentals — no responsiveness or interactivity included.",
    Bullet: [
      "✅ Basic layout and styling using only classic CSS",
      "✅ Practiced core HTML structure and tag usage",
      "✅ No media queries or responsive design included",
      "✅ Created solely for testing and hands-on practice",
    ],
    images: imgSlide12,
  },
  {
    year: "August 2023",
    title: "Genius Clone",
    description:
      "A simple static webpage built as part of a PW Skills assignment. Focused purely on learning HTML and classic CSS fundamentals — no responsiveness or interactivity included.",
    Bullet: [
      "✅ Basic layout and styling using only classic CSS",
      "✅ Practiced core HTML structure and tag usage",
      "✅ No media queries or responsive design included",
      "✅ Created solely for testing and hands-on practice",
    ],
    images: imgSlide13,
  },
];
