import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";
import "./Home.css";

function Home() {
  return (
    <section className="h-screen centered flex-col">
      <Fade left>
        <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white" />
        <h1 className="centered text-center text-2xl md:text-4xl font-bold dark:text-white">
          Welcome To My Simple Portfolio
        </h1>
      </Fade>
    </section>
  );
}

export default Home;
