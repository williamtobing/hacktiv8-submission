import Fade from "react-reveal/Fade";
import { ClipboardListIcon } from "@heroicons/react/outline";

function Blog() {
  return (
    <section className="mb-12">
      <div className="my-container flex flex-col">
        <Fade bottom cascade>
          <div className="mt-20 flex justify-center mb-4 md:hidden">
            <ClipboardListIcon className="h-12 w-12 mb-2 dark:text-white" />
            <h1 className="flex items-center text-4xl font-bold dark:text-white">
              Blog
            </h1>
          </div>

          <div className="mt-20 hidden md:block mb-4">
            <ClipboardListIcon className="h-16 w-16 mb-2 dark:text-white mx-auto" />
            <h1 className="text-center text-4xl font-bold dark:text-white">
              Blog
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
                <td className="dark:text-white">
                  <span className="font-bold">React.js</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    A JavaScript library for building user interfaces. React
                    makes it painless to create interactive UIs. Design simple
                    views for each state in your application, and React will
                    efficiently update and render just the right components when
                    your data changes...{" "}
                    <span className="hover:underline">
                      <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="flex font-bold animate-spin dark:text-white">
                  x
                </td>
                <td>&nbsp;</td>
                <td className="dark:text-white">
                  <span className="font-bold">Vue.js</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Vue (pronounced /vjuː/, like view) is a progressive
                    framework for building user interfaces. Unlike other
                    monolithic frameworks, Vue is designed from the ground up to
                    be incrementally adoptable. The core library is focused on
                    the view layer only, and is easy to pick up and integrate
                    with other libraries or existing projects...{" "}
                    <span className="hover:underline">
                      <a
                        href="https://v3.vuejs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="flex font-bold animate-spin dark:text-white">
                  x
                </td>
                <td>&nbsp;</td>
                <td className="dark:text-white">
                  <span className="font-bold">Node.js</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    As an asynchronous event-driven JavaScript runtime, Node.js
                    is designed to build scalable network applications. In the
                    following "hello world" example, many connections can be
                    handled concurrently. Upon each connection, the callback is
                    fired, but if there is no work to be done, Node.js will
                    sleep...{" "}
                    <span className="hover:underline">
                      <a
                        href="https://nodejs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="flex font-bold animate-spin dark:text-white">
                  x
                </td>
                <td>&nbsp;</td>
                <td className="dark:text-white">
                  <span className="font-bold">Inertia.js</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Inertia is a new approach to building classic server-driven
                    web apps. We call it the modern monolith. Inertia allows you
                    to create fully client-side rendered, single-page apps,
                    without much of the complexity that comes with modern SPAs.
                    It does this by leveraging existing server-side
                    frameworks...{" "}
                    <span className="hover:underline">
                      <a
                        href="https://inertiajs.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="flex font-bold animate-spin dark:text-white">
                  x
                </td>
                <td>&nbsp;</td>
                <td className="dark:text-white">
                  <span className="font-bold">Laravel Jetstream</span>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Laravel Jetstream is a beautifully designed application
                    starter kit for Laravel and provides the perfect starting
                    point for your next Laravel application. Jetstream provides
                    the implementation for your application's login,
                    registration, email verification, two-factor authentication,
                    session management, API via Laravel Sanctum, and optional
                    team management features...{" "}
                    <span className="hover:underline">
                      <a
                        href="https://jetstream.laravel.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </Fade>
      </div>
    </section>
  );
}

export default Blog;
