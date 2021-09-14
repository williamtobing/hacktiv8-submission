import Fade from "react-reveal/Fade";
import {
  TemplateIcon,
  ShoppingBagIcon,
  CalculatorIcon,
} from "@heroicons/react/outline";
import "./Portfolio.css";

function Project() {
  const data = [
    {
      id: 1,
      title: "fshoes.netlify.app",
      link: "https://fshoes.netlify.app/",
      icon: <ShoppingBagIcon className="h-8 w-8 mb-2 mx-auto" />,
    },
    {
      id: 2,
      title: "remember-that.netlify.app",
      link: "https://remember-that.netlify.app/",
      icon: <TemplateIcon className="h-8 w-8 mb-2 mx-auto" />,
    },
    {
      id: 3,
      title: "logic-app.netlify.app",
      link: "https://logic-app.netlify.app/",
      icon: <CalculatorIcon className="h-8 w-8 mb-2 mx-auto" />,
    },
  ];

  return (
    <Fade bottom cascade>
      <div className="md:hidden">
        {data.map((item) => (
          <div className="flex items-center flex-col mb-4" key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="box text-center">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="hidden md:flex md:justify-around">
        {data.map((item) => (
          <div className="flex items-center flex-col mb-4" key={item.id}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="box text-center">
                {item.icon}
                <span>{item.title}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </Fade>
  );
}

export default Project;
