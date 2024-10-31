import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Cards1 from '../cards';

const TESTE = () => {
    useEffect(() => {
        console.log("ScrollReveal is:", ScrollReveal); // Check if it's loading correctly
        ScrollReveal().reveal('.box', {
          delay: 500,
          distance: '100px',
          origin: 'bottom',
          opacity: 0,
          duration: 800
        });
      }, []);

  return (
    
    <Cards1 />
  );
};

export default TESTE;
