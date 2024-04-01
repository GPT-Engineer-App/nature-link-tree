import React, { useState, useEffect } from "react";
import FloatingHeart from "../components/FloatingHeart";

const Index = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };
    setHearts((currentHearts) => [...currentHearts, newHeart]);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "a" || event.key === "A") {
        addHeart();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      {hearts.map((heart, index) => (
        <FloatingHeart key={index} top={heart.top} left={heart.left} />
      ))}
    </>
  );
};

export default Index;
