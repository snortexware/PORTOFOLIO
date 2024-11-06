import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);


  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&family=Rowdies:wght@300;400;700&family=Varela+Round&display=swap');
      </style>
      <h1 style={{fontFamily: "Lexend Deca",
            fontSize: "clamp(28px, 5vw, 70px)", // Dynamic size for <h1> with limits
             }}>{currentText}</h1>
    </>
  );
};

export default Typewriter;
