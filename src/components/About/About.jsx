import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";

function About() {
  return (
    <section className="h-screen centered flex-col">
      <div className="my-container flex flex-col">
        <Fade bottom>
          <div className="">
            <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white mx-auto" />
            <h1 className="centered text-center text-4xl font-bold dark:text-white mb-4">
              About
            </h1>
          </div>
        </Fade>
        <Fade bottom cascade>
          <table>
            <tr>
              <td className="flex font-bold animate-spin dark:text-white">x</td>
              <td>&nbsp;</td>
              <td className="dark:text-white">Web Developer from Tarutung</td>
            </tr>
          </table>
        </Fade>
      </div>
    </section>
  );
}

export default About;
