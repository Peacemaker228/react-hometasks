import { useState } from "react";
import "./styles.css";

const SIDES = new Map([
  [1, { x: 0, y: 0 }],
  [2, { x: 90, y: 180 }],
  [3, { x: 0, y: 90 }],
  [4, { x: 0, y: 270 }],
  [5, { x: 90, y: 0 }],
  [6, { x: 360, y: 180 }],
]);

export const HomeWork1 = () => {
  const [roll, setRoll] = useState(1);

  const handleClick = () => {
    setRoll(Math.floor(Math.random() * 6) + 1);
  };

  console.log(roll);

  return (
    <div className="roll">
      <button className="roll_btn" onClick={handleClick} type="button">
        ROLL ME!
      </button>
      <div
        // ref={testRef}
        className="cube"
        style={{
          transform: `rotateY(${SIDES.get(roll)?.y}deg) rotateX(${
            SIDES.get(roll)?.x
          }deg)`,
        }}
      >
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
