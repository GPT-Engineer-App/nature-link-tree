import React, { useState, useEffect } from "react";
import FloatingHeart from "../components/FloatingHeart";

const Index = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "a" || e.key === "A") {
        const newHeart = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        };
        setHearts((currentHearts) => [...currentHearts, newHeart]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {hearts.map((heart, index) => (
        <FloatingHeart key={index} top={heart.top} left={heart.left} />
      ))}
    </div>
  );
};

export default Index;
