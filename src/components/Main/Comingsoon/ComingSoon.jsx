import React, { useState } from "react";
import { Navbar, Footer } from "../..";
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import "./comingsoon.css";
import "./contact.css";

const ComingSoon = () => {
  const handleSubmit = (e) => {
    return e.preventDefault();
  };

  const [contactSection, setcontactSection] = useState({
    arrowClicked: false,
  });

  const contactStyle = {
    opacity: 0,
  };
  const footerStyle = {
    paddingTop: "3em",
    filter: "",
  };
  const inputStyle = {
    display: "grid",
    opacity: 1,
  };
  const mainStyle = {
    filter: "",
  };
  function arrowClick() {
    setcontactSection((prevcontactSection) => {
      return {
        ...prevcontactSection,
        arrowClicked: !contactSection.arrowClicked,
      };
    });
  }

  function red() {
    if (contactSection.arrowClicked) {
      contactStyle.opacity = 1;
      contactStyle.display = "block";
      inputStyle.display = "none";
      mainStyle.filter = "blur(10px)";
      footerStyle.paddingTop = "2em";
      footerStyle.filter = "blur(10px)";
    } else {
      contactStyle.display = "none";
      inputStyle.display = "grid";
      mainStyle.filter = "";
    }
  }
  red();

  return (
    <div className="comingsoon">
      <div style={mainStyle}>
        <Navbar
          setcontactSection={setcontactSection}
          contactSection={contactSection}
        />
      </div>
      <main className="homepage" style={mainStyle}>
        <h1>
          SOMETHING AWESOME IS <br />
          COMING SOON
        </h1>
        <p className="homepage-showcase">
          <span>Your all-in-one affiliate marketing tracking software </span>
          track, automate<span> and</span>
          <br /> optimize
          <span> your campaigns.</span>
        </p>
        <div className="counter-container">
          <div>
            <p>7</p>
            <p>Days</p>
          </div>
          <div>
            <p>24</p>
            <p>Hours</p>
          </div>
          <div>
            <p>54</p>
            <p>Minutes</p>
          </div>
          <div>
            <p>11</p>
            <p>Second</p>
          </div>
        </div>

        <div className="input-container" style={inputStyle}>
          <input type="text" placeholder="First Name.." />
          <input type="text" placeholder="Last Name.." />
        </div>

        <Fade
          bottom={contactSection.arrowClicked ? true : false}
          when={contactSection.arrowClicked ? true : false}
        >
          <div className="waitinglist-container">
            <input
              className="email"
              type="text"
              placeholder="Enter your email address..."
            />
            <div>
              <button>JOIN OUR WAITING LIST..</button>
            </div>
          </div>
        </Fade>

        <div className="shapes-container">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>
      </main>
      <Fade when={contactSection.arrowClicked}>
        <aside className="contact-container" style={contactStyle}>
          <div>
            <IconContext.Provider value={{ className: "arrow-right" }}>
              <BsArrowRightShort onClick={arrowClick} />
            </IconContext.Provider>
            <form onSubmit={handleSubmit}>
              <h3>
                Hey, we are still in the works, <br /> but you can send us a
                message!
              </h3>
              <fieldset className="form-field">
                <label htmlFor="firstName">First name</label>
                <input type="text" placeholder="Enter your first name" />
                <label htmlFor="lastName">Last name</label>
                <input type="text" placeholder="Enter your Last name" />
                <label htmlFor="email">Email address</label>
                <input type="text" placeholder="Enter your Email Address" />
                <label htmlFor="textArea">
                  Tell us what you need help with:
                </label>
                <textarea
                  placeholder='Enter a topic, like "channel problem..."'
                  rows="5"
                  cols="52"
                ></textarea>
              </fieldset>
              <button type="submit">SEND NOW</button>
            </form>
            <div className="contact-circle"></div>
          </div>
        </aside>
      </Fade>
      <div style={footerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoon;
