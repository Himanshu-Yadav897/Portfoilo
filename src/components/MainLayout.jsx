// layout/MainLayout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.2),rgba(255,255,255,0))]"></div>
      <Navbar />
      <div className="pt-20"> {/* Add padding if Navbar is fixed */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
