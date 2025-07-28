import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectTimeline from "./components/ProjectTimeline";
import MyJourneyPage from "./components/MyJourneyPage";
import MyStoryPage from "./components/MyStoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project-timeline" element={<ProjectTimeline />} />
          <Route path="my-journey" element={<MyJourneyPage />} />
          <Route path="my-story" element={<MyStoryPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
