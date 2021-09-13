import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";

function Portfolio() {
  return (
    <section className="h-screen centered flex-col">
      <div className="my-container flex flex-col">
        <Fade bottom>
          <div className="">
            <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white mx-auto" />
            <h1 className="centered text-center text-4xl font-bold dark:text-white mb-4">
              Portfolio
            </h1>
          </div>
        </Fade>
        <Fade bottom cascade>
          <table>
            <tr>
              <td className="flex font-bold animate-spin dark:text-white">x</td>
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
              <td className="flex font-bold animate-spin dark:text-white">x</td>
              <td>&nbsp;</td>
              <td className="dark:text-white">
                <span className="font-bold">Backend</span>
                <br />
                <span className="text-gray-600 dark:text-gray-400">
                  Laravel, PHP, Node.js
                </span>
              </td>
            </tr>
          </table>
        </Fade>
      </div>
    </section>
  );
}

export default Portfolio;
