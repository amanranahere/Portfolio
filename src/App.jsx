import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <div className="scrollbar-thin scrollbar-thumb-[#2a2a2a] scrollbar-track-black">
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
