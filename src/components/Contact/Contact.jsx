import Fade from "react-reveal/Fade";
import { MailIcon } from "@heroicons/react/outline";
import "./Contact.css";

function Contact() {
  return (
    <section className="h-screen centered flex-col">
      <div className="my-container flex flex-col">
        <Fade bottom>
          <MailIcon className="h-16 w-16 mb-4 dark:text-white mx-auto" />
          <h1 className="centered text-4xl font-bold dark:text-white mb-4">
            Contact
          </h1>
        </Fade>
        <Fade bottom>
          <ul className="text-center">
            <li className="p-1">
              <a
                href="mailto:william.sl.tobing@gmail.com"
                className="contact-text"
              >
                LinkedIn
              </a>
            </li>
            <li className="p-1">
              <a
                href="mailto:william.sl.tobing@gmail.com"
                className="contact-text"
              >
                Twitter
              </a>
            </li>
            <li className="p-1">
              <a
                href="mailto:william.sl.tobing@gmail.com"
                className="contact-text"
              >
                GitHub
              </a>
            </li>
          </ul>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
