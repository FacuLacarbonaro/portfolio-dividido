import React from "react";

import "./Projects.scss";
import Card from "./Card";

import ecommerce from '../../assets/Images/jpg/ecommerce.jpg';
import soccer from '../../assets/Images/jpg/soccer.jpg';
import chat from '../../assets/Images/jpg/chat.jpg';
import weather from '../../assets/Images/jpg/weather.jpg';
import music from '../../assets/Images/jpg/music.jpg';
import comingSoon from '../../assets/Images/jpg/comingSoon.jpg';



const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects__title">Projects</h2>

      <div className="projects__container">
        <Card
          className="projects__container__card1"
          image={ecommerce}
          alt="hola"
          title="Ecommerce "
          description="Technologies "
        />

        <Card
          className="projects__container__card2"
          image={soccer}
          alt="Soccer Team Fanpage"
          title="Soccer Team Fanpage"
          description="Technologies"
        />

        <Card
          className="projects__container__card3"
          image={chat}
          alt="Chat app "
          title="Chat app"
          description="Technologies"
        />

        <Card
          className="projects__container__card4"
          image={weather}
          alt='Weather app'
          title="Weather app"
          description="Technologies"
        />

        <Card
          className="projects__container__card5"
          image={music}
          alt="Music player"
          title="Music player"
          description="Technologies"
        />

        <Card
          className="projects__container__card6"
          image={comingSoon}
          alt="Coming Soon"
          title="Coming Soon"
          description="Technologies"
        />
      </div>
    </div>
  );
};

export default Projects;
