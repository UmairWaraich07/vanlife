import "./About.css";
import aboutImg from "../../assets/about.png";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className="about">
      <div className="about__div">
        <div className="about__content">
          <h2 className="about__heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="about__content-para2">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <img src={aboutImg} alt="VANLIFE" className="about__img" />
      </div>

      <div className="about__cta">
        <div className="about__cta-content">
          <h2 className="about__cta-heading">
            Your destination is waiting. <br /> Your van is ready.
          </h2>
          <Button label="Explore our vans" link="/vans" black={true} />
        </div>
      </div>
    </div>
  );
};

export default About;
