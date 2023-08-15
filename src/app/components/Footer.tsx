import Link from "next/link";
import React from "react";
import style from "../styles/footer.module.css"

const Footer = () => {

  return (
    <div className={style.footer}>
      <nav className={style.footerContent}>
        <Link legacyBehavior href={"mailto:jeiseel60@gmail.com?subject=subject text"} >
          <a  target="_blank" rel="noopener noreferrer">
          <i className="symbol">alternate_email</i>
          <h3 className="logo">Contato</h3>
          </a>
        </Link>

        <Link legacyBehavior href={"https://github.com/Jeiseel"} >
          <a  target="_blank" rel="noopener noreferrer">
          <i className="symbol">hub</i>
          <h3 className="logo">GitHub</h3>
          </a>
        </Link>

        <Link legacyBehavior href={"https://www.linkedin.com/in/jeiseel-rodrigues-918310146/"} >
          <a target="_blank" rel="noopener noreferrer">
          <i className="symbol">contact_page</i>
          <h3 className="logo">Linkedin</h3>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;