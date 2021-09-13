import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");

    if (themeStorage) {
      setTheme(themeStorage);
    }

    if (themeStorage === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toLight = () => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  };

  const toDark = () => {
    setTheme("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md fixed z-50 w-screen">
      <div className="my-container flex justify-between">
        <div className="flex items-center">
          <span className="cursor-pointer">
            {theme === "dark" ? (
              <SunIcon
                className="h-6 w-6 text-gray-400 hover:text-white duration-300"
                onClick={toLight}
              />
            ) : (
              <MoonIcon
                className="h-6 w-6 text-gray-400 hover:text-black duration-300"
                onClick={toDark}
              />
            )}
          </span>
        </div>
        <ul className="flex py-4 select-none">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-li">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-li">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="nav-li">
            <Link to="/team">Team</Link>
          </li>
          <li className="nav-li">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
