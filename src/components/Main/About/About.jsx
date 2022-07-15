import React from "react";
import { Navbar, Footer } from "../..";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar setcontactSection={null} />
      <main className="about">
        <section className="about-hero">
          <div className="about-hero-heading">
            <h3>ABOUT US</h3>

            <h4>
              Built for SaaS <br /> and E-commerce
            </h4>
          </div>
          <div className="about-hero-content">
            <p>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
          </div>
        </section>

        <section className="about-content">
          <h3>
            Metricks was developed because just like you, we needed a product
            that could give us <span className="value">good value</span> .
          </h3>
          <div className="about-content-container">
            <div className="about-content-info">
              <h5>
                <span className="numbering"> 01</span> WHY US?
              </h5>
              <p>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>

              <div className="dots"></div>
            </div>
            <div>
              <h5>
                <span className="numbering"> 02</span>GROWING WITH YOU
              </h5>
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p>
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
        </section>

        <section className="about-query">
          <h5>Got a Question?</h5>
          <p>
            See how Metricks can help your business grow with best affiliate
            marketing tracking <br className="linebreak" /> software.
          </p>
          <Link to="/">Contact us</Link>
        </section>

        <div className="box-container">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <div className="box-3"></div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
