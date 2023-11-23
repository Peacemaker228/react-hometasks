import { useEffect, useRef, useState } from "react";
import "../HomeWork1/styles.css";

const SIDES = {
  1: { x: 0, y: 0 },
  2: { x: 90, y: 180 },
  3: { x: 0, y: 90 },
  4: { x: 0, y: 270 },
  5: { x: 90, y: 0 },
  6: { x: 360, y: 180 },
};

export const HomeWork1Second = () => {
  const [roll, setRoll] = useState(1);

  const cubeRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setRoll(Math.floor(Math.random() * 6) + 1);
  };

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateY(${
        SIDES[roll as keyof typeof SIDES]?.y
      }deg) rotateX(${SIDES[roll as keyof typeof SIDES]?.x}deg)`;
    }
  }, [roll]);

  console.log(roll);

  return (
    <div className="roll">
      <button className="roll_btn" onClick={handleClick} type="button">
        ROLL ME!
      </button>
      <div ref={cubeRef} className="cube">
        <div className="side one"></div>
        <div className="side six"></div>
        <div className="side three"></div>
        <div className="side four"></div>
        <div className="side two"></div>
        <div className="side five"></div>
      </div>
    </div>
  );
};
