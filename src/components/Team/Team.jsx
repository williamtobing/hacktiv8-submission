import Fade from "react-reveal/Fade";
import { UserIcon, UserGroupIcon } from "@heroicons/react/outline";
import "./Team.css";

function Team() {
  const data = [
    {
      id: 1,
      name: "Anonym",
    },
    {
      id: 2,
      name: "Unknown",
    },
    {
      id: 3,
      name: "No One",
    },
  ];

  return (
    <section className="mb-12">
      <div className="my-container flex flex-col">
        <Fade bottom cascade>
          <div className="mt-20 flex justify-center mb-4 md:hidden">
            <UserGroupIcon className="h-12 w-12 mb-2 dark:text-white mr-1" />
            <h1 className="flex items-center text-4xl font-bold dark:text-white">
              Team
            </h1>
          </div>

          <div className="mt-20 hidden md:block mb-4">
            <UserGroupIcon className="h-16 w-16 mb-2 dark:text-white mx-auto" />
            <h1 className="text-center text-4xl font-bold dark:text-white">
              Team
            </h1>
          </div>
        </Fade>

        <Fade bottom cascade>
          <div className="md:hidden my-6">
            {data.map((item) => (
              <div className="flex items-center flex-col mb-4" key={item.id}>
                <div className="box-team centered flex-col">
                  <UserIcon className="h-8 w-8 mb-2 mx-auto" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex md:justify-around my-12">
            {data.map((item) => (
              <div className="flex items-center flex-col mb-4" key={item.id}>
                <div className="box-team centered flex-col">
                  <UserIcon className="h-8 w-8 mb-2 mx-auto" />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Team;
