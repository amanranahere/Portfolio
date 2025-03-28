import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
