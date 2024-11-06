import Typography from "@mui/joy/Typography";
import Typewriter from "./typed";
import { Button } from "@nextui-org/react";
import ScrollRevealWrapper from "./wrapper";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { React, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Cards1 from "./cards";
import { LineWeight } from "@mui/icons-material";

const FRONT = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <div
    style={{margin: ""}}
    className="relative gap-8 flex grid pb-24 grid-cols-1 sm:grid-cols-1 flex items-center justify-center w-[300px] sm:w-[600px] md:w-[900px]    h-screen">

      

    <div style={{marginTop:"0"}}>

          <ScrollRevealWrapper duration={0.6}> 
            <Typography
              style={{
                fontSize: "clamp(14px, 2.5vw, 14px)", // Minimum 10px, ideal 2vw, max 16px
                fontFamily: "Roboto Mono",
                margin:"0",
                color: "#00bbf0",
              }}
              >
              Bem vindo, Eu sou
            </Typography>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper duration={0.8}
          >
            <Typewriter text={"Lucas Moreira Albino."} delay={60} />
          </ScrollRevealWrapper>
          <ScrollRevealWrapper duration={1}
          >
            <Typography
              style={{
                fontFamily: "Lexend Deca",
                fontSize: "clamp(28px, 5vw, 70px)", // Dynamic size for <h1> with limits
                color: "#00bbf0",
                margin:"0",
                
                LineWeight: "0.9"
              }}
              >
              Construo aplicações web<br></br> e back-end.
            </Typography>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper
            duration={1.2}
            >
            <div style={{display:"flex"}}>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 15px)", // Responsive paragraph font size
                color: '#d1d5db',
              }}
              >
              Sou um desenvolvedor de software baseado em Gaspar, SC,
              <br></br>
              especializado na criação de sites excepcionais, além de tudo que há
              entre eles.
            </p>
                </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper duration={1.4}>
            <Button
            onClick={()=> window.location = "mailto:lucasmoreiraprivado@proton.me"}
            style={{ fontFamily: "Lexend Deca", marginTop: "30px" }}
            color="primary"
            radius="full"
            variant="bordered"
            >
              Entre em contato
            </Button>
          </ScrollRevealWrapper>

                </div>
              </div>

  );

};

export default FRONT;
