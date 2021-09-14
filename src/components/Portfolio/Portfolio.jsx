import Fade from "react-reveal/Fade";
import { FolderOpenIcon, DesktopComputerIcon } from "@heroicons/react/outline";

import Project from "./Project";

function Portfolio() {
  return (
    <section className="mb-12">
      <div className="my-container flex flex-col">
        <Fade bottom cascade>
          <div className="mt-20 flex justify-center mb-4 md:hidden">
            <FolderOpenIcon className="h-12 w-12 mb-2 dark:text-white" />
            <h1 className="flex items-center text-4xl font-bold dark:text-white">
              Portfolio
            </h1>
          </div>

          <div className="mt-20 hidden md:block mb-4">
            <FolderOpenIcon className="h-16 w-16 mb-2 dark:text-white mx-auto" />
            <h1 className="text-center text-4xl font-bold dark:text-white">
              Portfolio
            </h1>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="centered">
            <table>
              <tbody>
                <tr>
                  <td className="centered font-bold animate-spin dark:text-white">
                    x
                  </td>
                  <td>&nbsp;</td>
                  <td className="dark:text-white">
                    <span className="font-bold">Frontend</span>
                    <br />
                    <span className="text-gray-600 dark:text-gray-400">
                      Javascript, React.js, Vue.js
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="centered font-bold animate-spin dark:text-white">
                    x
                  </td>
                  <td>&nbsp;</td>
                  <td className="dark:text-white">
                    <span className="font-bold">Backend</span>
                    <br />
                    <span className="text-gray-600 dark:text-gray-400">
                      Laravel, PHP, Node.js
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="flex justify-center mt-12 mb-4 md:hidden">
            <div className="flex w-80">
              <DesktopComputerIcon className="h-8 w-12 mb-1 dark:text-white" />
              <h1 className="flex items-center text-2xl font-bold dark:text-white">
                Project
              </h1>
            </div>
          </div>

          <div className="mt-12 mb-4 hidden md:flex md:justify-center">
            <DesktopComputerIcon className="h-8 w-8 mb-1 dark:text-white" />
            <h1 className="flex items-center text-2xl font-bold dark:text-white">
              Project
            </h1>
          </div>
        </Fade>

        <Project />
      </div>
    </section>
  );
}

export default Portfolio;
