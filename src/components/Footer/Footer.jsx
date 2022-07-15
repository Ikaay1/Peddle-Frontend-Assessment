import React from "react";
import { IconContext } from "react-icons";
import { GrYoutube } from "react-icons/gr";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitterSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links-container">
        <IconContext.Provider value={{ className: "youtube" }}>
          <GrYoutube className="social-links" />
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <RiFacebookBoxFill className="social-links" />
          <FaLinkedin className="social-links" />
          <TiSocialInstagram className="social-links" />
          <FaTwitterSquare className="social-links" />
        </IconContext.Provider>
      </div>
      <div className="policies">
        <p>Terms of services</p>
        <p>Privacy policy</p>
      </div>
      <p className="copyright">
        Copyright 2021 @ Peddle Technologies. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
