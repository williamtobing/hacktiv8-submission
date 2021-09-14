import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import {
  MoonIcon,
  SunIcon,
  AtSymbolIcon,
  MenuIcon,
} from "@heroicons/react/outline";
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
    <>
      <nav className="hidden md:block bg-white dark:bg-black shadow-md fixed z-40 w-screen">
        <div className="my-container flex justify-between">
          <div className="flex items-center select-none">
            <AtSymbolIcon className="h-6 w-6 text-black dark:text-white" />
            <Link to="/" className="nav-text">
              simply
              <span className="text-blue-400">F</span>
              olio
            </Link>
          </div>
          <ul className="flex py-4 select-none">
            <li>
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
            </li>
            <li className="nav-text ml-6">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-text ml-6">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-text ml-6">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-text ml-6">
              <Link to="/team">Team</Link>
            </li>
            <li className="nav-text ml-6">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="md:hidden bg-white dark:bg-black shadow-md fixed z-50 w-screen">
        <div className="my-container flex justify-between">
          <div className="flex items-center">
            <AtSymbolIcon className="h-6 w-6 text-black dark:text-white" />
            <Link to="/" className="nav-text">
              simply
              <span className="text-blue-400">F</span>
              olio
            </Link>
          </div>

          <div className="flex py-4">
            <span className="mx-2 cursor-pointer">
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

            <div>
              <Menu>
                {({ open }) => (
                  <>
                    <span className="rounded-md shadow-sm py-2">
                      <Menu.Button className="centered">
                        <MenuIcon className="h-6 w-6 dark:text-white" />
                      </Menu.Button>
                    </span>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-2 w-56 mt-6 origin-top-right bg-white dark:bg-black border-1 border-gray-200 rounded-md shadow-lg outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            <Link to="/about" className="nav-text-mobile">
                              About
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link to="/portfolio" className="nav-text-mobile">
                              Portfolio
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link to="/blog" className="nav-text-mobile">
                              Blog
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link to="/team" className="nav-text-mobile">
                              Team
                            </Link>
                          </Menu.Item>
                          <Menu.Item>
                            <Link to="/contact" className="nav-text-mobile">
                              Contact
                            </Link>
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
