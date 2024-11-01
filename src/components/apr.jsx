import Typography from "@mui/joy/Typography";
import Typewriter from "../typed";
import { Button } from "@nextui-org/react";
import ScrollRevealWrapper from "./wrapper";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import  {React, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Cards1 from "../cards";

const APR = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  return (
    <div
      style={{
        height: '100vh',
        justifyContent:'center',
        alignItems:'center',
        maxWidth: "100vw",
        margin: '0 auto'
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "anticipate" }}
      >
        <Typography
          style={{
            fontSize: "clamp(10px, 2.5vw, 14px)", // Minimum 10px, ideal 2vw, max 16px
            fontFamily: "Roboto Mono",
            marginBottom: "5px",
            color: "#00bbf0",
          }}
        >
          Bem vindo, Eu sou
        </Typography>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1.5, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "anticipate" }}
      >
        <Typewriter text={"Lucas Moreira Albino."} delay={60} />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "anticipate" }}
      >
        <Typography
          style={{
            fontFamily: "Lexend Deca",
            fontSize: "clamp(25px, 5vw, 100px)", // Dynamic size for <h1> with limits
            color: "#00bbf0",
            marginBottom: "10px",
          }}
        >
          Construo aplicações web<br></br> e backend.
        </Typography>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1.5, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "anticipate" }}
      >
      <p
        style={{
          fontSize: "clamp(10px, 2.5vw, 10px)", // Responsive paragraph font size
          color: '#d1d5db',
        }}
      >
        Sou um desenvolvedor de software baseado em Gaspar, SC,
        <br></br>
        especializado na criação de sites excepcionais, além de tudo que há
        entre eles.
      </p>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1.5, y: 0 } : {}}
        transition={{ duration: 1.4, ease: "anticipate" }}
      >
      <Button
        style={{ fontFamily: "Lexend Deca", marginTop: "30px" }}
        color="primary"
        radius="full"
        variant="bordered"
      >
        Entre em contato
      </Button>
      </motion.div>
      <div>

      </div>
    </div>
  );
};

export default APR;
