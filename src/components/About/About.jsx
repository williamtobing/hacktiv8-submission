import { useState } from "react";
import Fade from "react-reveal/Fade";
import { IdentificationIcon, EmojiHappyIcon } from "@heroicons/react/outline";

function About() {
  const [count, setCount] = useState(1);
  const [egg, setEgg] = useState(false);

  const easterEgg = () => {
    setCount(count + 1);
    if (count === 5) {
      setEgg(true);
      setCount(0);
    }
  };

  return (
    <section className="h-screen centered flex-col select-none">
      <div className="my-container flex flex-col">
        <Fade bottom cascade>
          <div className="">
            <IdentificationIcon className="h-16 w-16 mb-4 dark:text-white mx-auto" />
            <h1 className="centered text-center text-4xl font-bold dark:text-white mb-4">
              About
            </h1>
          </div>
        </Fade>

        <Fade bottom cascade>
          <table>
            <tbody>
              <tr>
                <td className="flex font-bold animate-spin dark:text-white">
                  x
                </td>
                <td>&nbsp;</td>
                <td className="dark:text-white">Web Developer from Tarutung</td>
              </tr>
            </tbody>
          </table>
        </Fade>

        <Fade bottom cascade>
          <p
            className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-center text-sm my-2 cursor-pointer transform hover:scale-125 duration-300"
            onClick={easterEgg}
          >
            &copy; 2021 William Suarez
          </p>
        </Fade>

        {egg && (
          <Fade right>
            <div className="centered text-center  mt-2">
              <p className="mr-2 text-blue-400">Thank you for visiting</p>
              <EmojiHappyIcon className="h-6 w-6 flex items-center animate-bounce bg-blue-400 text-white dark:text-black rounded-full" />
            </div>
          </Fade>
        )}
      </div>
    </section>
  );
}

export default About;
