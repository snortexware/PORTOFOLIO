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
      style={{
        display: "flex",
        alignItems: "center",
        margin: "5 auto",
        padding: "30px 0px",
        minHeight: "100vh",
        maxWidth:"900px",
        marginTop: "-5%"
      }}>

      <div
        style={{
          display: "flex",
          flexDirection: "column",

        }}
      >
        <div>


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
                fontSize: "clamp(30px, 7vw, 70px)", // Dynamic size for <h1> with limits
                color: "#00bbf0",
                margin: "0px 0px 0px",
                LineWeight: "0.9"
              }}
            >
              Construo aplicações web<br></br> e back-end.
            </Typography>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1.5, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "anticipate" }}
          >
            <div style={{maxWidth:"500px"}}>

            <p
              style={{
                fontSize: "clamp(10px, 2vw, 15px)", // Responsive paragraph font size
                color: '#d1d5db',
              }}
            >
              Sou um desenvolvedor de software baseado em Gaspar, SC,
              <br></br>
              especializado na criação de sites excepcionais, além de tudo que há
              entre eles.
            </p>
                </div>
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

        </div>
      </div>

    </div>
  );

};

export default FRONT;
