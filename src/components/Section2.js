import image from "../images/image3.svg";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

const Section1 = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translateX(0px)" },
      { transform: "translateX(100px)" },
      ,
    ],
    timing: {
      duration: 4000, // Run for 1000ms
      iterations: Infinity, // Repeat once
    },
  });
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="3000">
      <div className="wrapper">
        <div className="about-right">
          <h1>Web Development</h1>
          <p>
            Consume out-of-the-box data analytics anywhere, anytime. Take
            advantage of rich domain content , pre-built industry metrics,
            stunning visualizations, and data adaptors for cloud/business
            applications as well as big data sources.
          </p>
          <a href="#" className="cta">
            Learn More
          </a>
        </div>

        <div className="about-left">
          <img src={image} alt="img" ref={ref} />
        </div>
      </div>
    </section>
  );
};

export default Section1;
