import React from "react";
import "./about.css";
import ImageCard from '../ImageCard';
import header from "../../img/header.png";
import santhoshImage from "../../img/abi.jpg";  // Import Image
import { BsAlignBottom } from "react-icons/bs";

function About() {
  const CardData = [
    {
      id: 1,
      imageSrc: santhoshImage, // Use Imported Image
      name: "ABISHEK B",
      role: "Project Developer",
      linkedin: "https://www.linkedin.com/in/abishek-babu-career/",
      insta: "https://www.instagram.com/crush_on_1dx/",
      github: "https://github.com/abishekbabuofficial",
    }
  ];

  return (
    <>
      <h1 id="img-h1">Our Team</h1>
      <img id="one" src={header} alt="Header" />
      <div className="images">
        {CardData.map((card) => (
          <ImageCard
            key={card.id}
            imageSrc={card.imageSrc}
            name={card.name}
            role={card.role}
            linkedin={card.linkedin}
            insta={card.insta}
            github={card.github}
          />
        ))}
        
      </div><br>
      </br>
      <br></br>
      <p>Credits to the other contributors Gurunathan T, Logeshwaran S R and Srinivasan S R</p>
    </>
  );
}

export default About;
