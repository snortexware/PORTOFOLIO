import Navbar_novo from "./navbar";
import Image from "./components/Image";
import Typewriter from './typed';
import Cards1 from "./cards";
import { motion, useScroll, useTransform } from "framer-motion";
import {AnimatePresence } from "framer-motion"
import Typography from '@mui/joy/Typography';


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
          marginLeft: '5%',
          marginTop: '4%',
        }}>
          <Typography style={{ fontFamily: 'Silla Slab', marginBottom: '10px', color: 'white' }}>Bem vindo, Eu sou</Typography>
          <Typewriter style={{ fontSize: '60px', marginBottom: '10px', color: 'white' }} text={"Lucas Moreira Albino."} delay={60} />
          <h1 style={{ fontSize: '60px', color: 'white', marginBottom: '20px' }}>Construo aplicações web e backend.</h1>
          <p style={{ fontSize: '15px', color: 'white', marginBottom: '10px' }}>
            Sou um desenvolvedor de software baseado em Gaspar, SC, 
            especializado <br></br>na criação de sites excepcionais, além de tudo que há entre eles.
          </p>
          <div style={{ height: '500px', width: '500px', backgroundColor: '#111d5e' }}></div>
        </div>
        
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
