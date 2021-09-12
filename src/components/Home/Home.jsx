import "./Home.css";
import { ClipboardListIcon } from "@heroicons/react/outline";

function Home() {
  return (
    <section className="h-screen centered flex-col">
      <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white" />
      <h1 className="centered text-4xl font-bold dark:text-white">
        Welcome To My Simple Portfolio
      </h1>
    </section>
  );
}

export default Home;
