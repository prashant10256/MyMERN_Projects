import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            facere quo ducimus incidunt alias quam saepe dolorem maxime
            temporibus! Similique alias, dicta officia, asperiores sunt pariatur
            veritatis qui explicabo culpa accusamus quod quam harum repellat non
            sapiente. Quia dolor doloremque possimus? Consectetur impedit labore
            quo magnam officia sit nemo quis.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
