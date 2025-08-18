import React, { useEffect, useRef, useState } from "react";
import "./dino.css";
import dino_img from "./assets/pink_dino.webp";
import block_img from "./assets/cactus.webp";

const Dino = () => {
  const characterRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const [isJumping, setIsJumping] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [score, setScore] = useState(0);

  
  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") jump();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);


  useEffect(() => {
    const checkDead = setInterval(() => {
      if (!characterRef.current || !blockRef.current) return;

      const characterTop = parseInt(
        window.getComputedStyle(characterRef.current).getPropertyValue("top")
      );
      const blockLeft = parseInt(
        window.getComputedStyle(blockRef.current).getPropertyValue("left")
      );

      if (blockLeft > 0 && blockLeft < 3 * window.innerWidth / 100 && characterTop >= 5 * window.innerHeight / 100) {
        if (blockRef.current) {
          blockRef.current.style.animation = "none";
          blockRef.current.style.display = "none";
        }
        setTimeout(() => setResetKey(prev => prev + 1), 500);
      }
    }, 10);

    return () => clearInterval(checkDead);
  }, [resetKey]);


  useEffect(() => {
    setScore(0);
    const scoreInterval = setInterval(() => setScore(prev => prev + 1), 100);
    return () => clearInterval(scoreInterval);
  }, [resetKey]);

  return (
    <div className="game" key={resetKey}>
      <div className="score">Score: {score}</div>
      <div
        className={`character ${isJumping ? "animate" : ""}`}
        ref={characterRef}
      >
        <img src={dino_img} alt="dino" />
      </div>
      <div className="block" ref={blockRef}>
        <img src={block_img} alt="block" />
      </div>
    </div>
  );
};

export default Dino;
