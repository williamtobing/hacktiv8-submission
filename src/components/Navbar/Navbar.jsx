import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("");

  const toDark = () => {
    setTheme("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  };

  const toLight = () => {
    setTheme("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
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
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="100"
            data-sal-easing="ease-out"
          >
            Home
          </li>
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="200"
            data-sal-easing="ease-out"
          >
            About
          </li>
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="400"
            data-sal-easing="ease-out"
          >
            Portfolio
          </li>
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="400"
            data-sal-easing="ease-out"
          >
            Blog
          </li>
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="500"
            data-sal-easing="ease-out"
          >
            Team
          </li>
          <li
            className="nav-li"
            data-sal="slide-up"
            data-sal-duration="400"
            data-sal-delay="600"
            data-sal-easing="ease-out"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
