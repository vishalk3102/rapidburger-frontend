import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>RAPID BURGER</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @rapidburger</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/vishalk3102/">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/vishal_k_31/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/vishalk3102">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
