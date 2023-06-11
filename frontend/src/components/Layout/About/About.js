import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "../../../images/logo1.png";

function About() {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/vatspranjay.2206/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>
        <div>
          <div>
            <img
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Founder"
            />

            <Typography>ZealousCoders</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample SMART-KART ecommerce Website made by Team
              ZealousCoders.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Socials</Typography>
            <a
              href="https://www.linkedin.com/in/pranjay-vats-4bb250205/"
              target="blank"
            >
              <LinkedInIcon className="linkedInSvg" />
            </a>
            <a
              href="https://www.instagram.com/vatspranjay.2206/"
              target="blank"
            >
              <InstagramIcon className="instagramSvg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
