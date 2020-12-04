import React from "react";

import Portrait from "../../assets/Images/jpg/portrait.jpg";
import Projects from "./Projects.js";
import Hello from "../../assets/Images/png/hello.png";
import Job from "../../assets/Images/png/job.png";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <section className="main__container__section__introduction">
          <img src={Portrait} alt="" />
        </section>
        <section className="main__container__section__about">
          <div className="main__container__section__about__first">
            <h2>About me</h2>
            <h3>
              I enjoy working closely with design teams to faithfully translate
              their designs right down to the last pixel. Daily, you'll find me
              using modern frontend technologies that bring the creative process
              to life just as designers intended them to be.
            </h3>
          </div>

          <div className="main__container__section__about__second">
            <h4>Technical</h4>
            <p>
              Right now I am honing my skills as a Frontend Developer and trying
              to perfect myself as a Full Stack. For my projects I use HTML, CSS
              (Grid, Flexbox, Sass), Javascript, Reactjs, Redux, Firebase,
              Nodejs, Git, Responsive Design.
            </p>
          </div>

          <div className="main__container__section__about__third">
            <h4>Personal</h4>
            <p>
              I grew up in Mar del Plata, a beautiful city with beach and
              skate.I love sports like football soccer and basketball.
              Constantly improving my English to be able to live in a country
              with that language.
            </p>
          </div>

          <h3 className="main__container__section__about__footer">
            Contact me!
          </h3>
        </section>

        <section className="main__container__section__projects">
          <Projects />
        </section>

        <section className="main__container__section__contact">
          <h2>Contact me</h2>
          <div className="main__container__section__contact__description">
            <h4> Don't be shy! </h4>
            <p>
              If you have a project in mind or would like to make an enquiry
              simply select one of the following options.
            </p>
          </div>

          <div className="main__container__section__contact__options">
            <div className="main__container__section__contact__options__option">
              <img src={Job} alt="Job" style={{backgroundColor:'#fd8e8e'}} />
              <span>I would like help for a project.</span>
            </div>
          </div>
          <div className="main__container__section__contact__options">
            <div className="main__container__section__contact__options__option">
              <img src={Hello} alt="Hello"  />
              <span>I’d just like to say hello</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
