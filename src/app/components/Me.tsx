import Link from "next/link";
import React from "react";
import style from "../styles/me.module.css"
import Image from 'next/image'
import me from '../../../assets/images/me.jpg'

import Jobs from "./Jobs";

const Me = (props: any) => {

  return (
    <div className={style.about}>
        <Image src={me} className={style.image}
        alt="Picture of the author"
        width={250}
        height={250}/>

        <p className={style.p}>  Oá! Me chamo Jeiseel, sou Bacharel em Sistemas de Informação, atuei por 2 anos como desenvolvedor backend desenvolvendo em C e em JAVA.
        Atualmente atuo como analista de testes, realizando automação de testes E2E com Cypress e testes de API com Postman, além de analisar, modelar e implementar
        os testes que seram executados durante durante a execução.
        </p>

        <Jobs/>
    </div>
 
  );
};

export default Me;