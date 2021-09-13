import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";

function Blog() {
  return (
    <section className="h-screen centered flex-col">
      <Fade right>
        <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white" />
        <h1 className="centered text-4xl font-bold dark:text-white">Blog</h1>
      </Fade>
    </section>
  );
}

export default Blog;
