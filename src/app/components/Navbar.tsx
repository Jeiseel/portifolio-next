import Link from "next/link";
import React from "react";
import style from "../styles/navbar.module.css"

const Navbar = () => {

  return (
    <header>
      <nav className={style.navbar}>
        <Link legacyBehavior href={"https://www.linkedin.com/in/jeiseel-rodrigues-918310146/"} 
        target="_blank" >
          <a className={style.logo}>
          <i className="symbol">terminal</i>
            <h1 className="logo">Jeiseel, Analista de Testes</h1>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;