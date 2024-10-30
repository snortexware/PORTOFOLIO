import Navbar_novo from "./navbar";
import Image from "./components/Image";
import Typewriter from './typed';
import Cards1 from "./cards";
import { motion, useScroll, useTransform } from "framer-motion";
import {AnimatePresence } from "framer-motion"
import Typography from '@mui/joy/Typography';
import {Button} from "@nextui-org/react";


function App() {
  const { scrollYProgress } = useScroll();
  // Transform the scroll progress to move from left (-200) to right (0)
  const xTransform = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <>
      <div
        style={{
          backgroundColor: '#111d5e',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'auto',
        }}
      >
        <Navbar_novo />
        
        {/* Centered content */}
        <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          maxWidth: '80%',
          marginLeft: '10%',
          marginTop: '2%',
        }}>
          <style>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

          </style>
          <div>

          <Typography style={{ marginLeft:"0.5%", fontSize: "13px", fontFamily: 'Roboto Mono', marginBottom: '5px', color: '#00bbf0' }}>Bem vindo, Eu sou</Typography>
          <Typewriter style={{ fontSize: '60px',  color: 'white' }} text={"Lucas Moreira Albino."} delay={60} />
          <h1 style={{ fontFamily: 'Lexend Deca', fontSize: '75px', color: '#00bbf0', marginBottom: '10px' }}>Construo aplicações web e backend.</h1>
          <p style={{ fontSize: '15px', color: 'white' }}>
            Sou um desenvolvedor de software baseado em Gaspar, SC, 
            especializado <br></br>na criação de sites excepcionais, além de tudo que há entre eles.
          </p>
          </div>
        <Button style={{marginTop: '30px'}}color="primary" variant="bordered">
        Teste
      </Button>
        </div>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Rowdies:wght@300;400;700&family=Varela+Round&display=swap');
        
      </style>
        {/* Spacing before the Cards component */}
        <AnimatePresence>
        <div style={{ marginTop: '30px', width: '100%' }}>

          <motion.div 
            style={{ x: xTransform }} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            <Cards1 />
          </motion.div>
        </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
