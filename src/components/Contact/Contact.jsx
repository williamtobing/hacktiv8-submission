import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";
import "./Contact.css";

function Contact() {
  return (
    <section className="h-screen centered flex-col">
      <div className="my-container flex flex-col">
        <Fade bottom>
          <ClipboardListIcon className="h-16 w-16 mb-4 dark:text-white mx-auto" />
          <h1 className="centered text-4xl font-bold dark:text-white mb-4">
            Contact
          </h1>
        </Fade>
        <Fade bottom>
          <ul className="text-center">
            <li className="contact-text">LinkedIn</li>
            <li className="contact-text">Twitter</li>
            <li className="contact-text">GitHub</li>
          </ul>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
