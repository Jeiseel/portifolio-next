import Link from "next/link";
import React from "react";
import style from "../styles/jobs.module.css"

const Jobs = () => {

  return (
    <div className={style.jobsContainer}>
      <div className={style.card}>
        <h1>Point-of-Sale</h1>
        <p>Projeto de um ponto de vendas, desenvolvido junto a colegas, usando Angular 9
          e Spring Boot.

        </p>
      </div>

      <div className={style.card}>
        <h1>Housemarket</h1>
        <p>Projeto backend de uma aplicação Web que tinha como finalidade realizar anûncio 
          e divulgação de residencias para alugar oa publico iniversitário.</p>
          
      </div>
      
    </div>
    
  );
};

export default Jobs;