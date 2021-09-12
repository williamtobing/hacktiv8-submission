import { useEffect, useState } from "react";
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
          <li className="nav-li">Home</li>
          <li className="nav-li">About</li>
          <li className="nav-li">Portfolio</li>
          <li className="nav-li">Blog</li>
          <li className="nav-li">Team</li>
          <li className="nav-li">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
