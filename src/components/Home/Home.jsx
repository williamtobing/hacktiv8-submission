import "./Home.css";
import { ClipboardListIcon } from "@heroicons/react/outline";

function Home() {
  return (
    <section className="h-screen centered flex-col">
      <ClipboardListIcon
        className="h-16 w-16 mb-4 dark:text-white"
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="400"
        data-sal-easing="ease-out"
      />
      <h1
        className="centered text-4xl font-bold dark:text-white"
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="800"
        data-sal-easing="ease-out"
      >
        Welcome To My Simple Portfolio
      </h1>
    </section>
  );
}

export default Home;
