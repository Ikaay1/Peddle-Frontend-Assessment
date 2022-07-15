import React from "react";
import { Footer } from "../..";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import darkLogo from "../../../assets/metricks-logo-dark-removebg-preview.png";
import { NavLink, Link } from "react-router-dom";
import { dataSet, articleset } from "../../../services/data";
import "./blog.css";

const Blog = () => {
  const activeStyle = {
    color: "#FF00F7",
  };

  const blogData = dataSet.map((data, i) => (
    <div key={i} className="blog-card">
      <img src={data.image} alt="post" />
      <h4>{data.datePosted}</h4>
      <h5>{data.heading}</h5>
      <h5>{data.subHeading}</h5>
      <p>{data.content}</p>
      <p>READ MORE</p>
    </div>
  ));

  const articleData = articleset.map((data, i) => (
    <div key={i} className="article-card">
      <h4>{data.datePosted}</h4>
      <h5>{data.heading}</h5>
      <p>{data.content}</p>
      <p>READ MORE</p>
    </div>
  ));

  return (
    <>
      <header className="navbar-container">
        <nav className="nav">
          <NavLink to="/">
            <img className="logo" src={darkLogo} alt="logo" />
          </NavLink>

          <ul>
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blog
              </NavLink>
            </li>
            <li className="contactus-link">
              <Link to="/" alt="contact" setcontactSection={null}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="blog-hero">
          <div>
            <h3>BLOG</h3>
            <h4>Articles and News</h4>
          </div>
        </section>
        <section className="blog-post">
          <div className="blog-post-heading">
            <div>
              <h4>Latest From The Blog</h4>
              <p style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam <br className="linebreak2" /> nonumy eirmod tempor invidunt
                ut labore et dolore magna aliquyam
              </p>
            </div>

            <div className="blog-search">
              <input type="text" placeholder="Search here" />
              <IconContext.Provider value={{ className: "youtube" }}>
                <BiSearch className="search" />
              </IconContext.Provider>
            </div>
          </div>
          <div className="blog-card-container">{blogData}</div>
        </section>
      </main>
      <article className="article">
        <h4>Recent Articles</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam{" "}
          <br /> nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam{" "}
        </p>
        <div className="article-card-container">{articleData}</div>
        <button className="load-more">LOAD MORE</button>
      </article>

      <aside className="faqs">
        <div>
          <h4>What To Know More About Metrics ?</h4>
          <p>Learn who we are and what drives us</p>
          <p>Contact Us</p>
        </div>
        <div className="faqs-square-container">
          <div className="faqs-square"></div>
        </div>
      </aside>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
