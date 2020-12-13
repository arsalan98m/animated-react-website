import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

import me from "../images/me.svg";
const Intro = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0px)" },
      { transform: "translateY(100px)" },
      ,
    ],
    timing: {
      duration: 4000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });

  return (
    <section id="intro">
      <div className="top-right-gradient"></div>
      <div className="wrapper">
        <div className="intro-left">
          <h1>
            Full Stack Serverless Multi-Tenant SaaS Apps and APIs in Baby Steps
            and Build Your SaaS Startup
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus facere tempore culpa quo quidem praesentium dolor
            pariatur perferendis, earum dolores!{" "}
          </p>
          <a
            href="https://panacloud.github.io/bootcamp-2020/"
            className="intro-cta"
            target="_blank"
          >
            Join Free Bootcamp
          </a>
        </div>
        <div className="intro-right">
          <img src={me} alt="me svg background laptop" ref={ref} />
        </div>
      </div>
      <div className="bottom-left-gradient"></div>
    </section>
  );
};

export default Intro;
