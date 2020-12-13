import image from "../images/image2.svg";
const Section1 = () => {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="3000">
      <div className="wrapper">
        <div className="about-left">
          <img src={image} alt="img" />
        </div>

        <div className="about-right">
          <h1>Severless App Development</h1>
          <p>
            Consume out-of-the-box data analytics anywhere, anytime. Take
            advantage of rich domain content , pre-built industry metrics,
            stunning visualizations, and data adaptors for cloud/business
            applications as well as big data sources.
          </p>
          <a href="#home" className="cta">
            Learn More
          </a>
        </div>
      </div>

      <div className="top-right-gradient"></div>
    </section>
  );
};

export default Section1;
