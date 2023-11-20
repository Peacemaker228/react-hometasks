import { useState } from "react";
import "./styles.css";

// testRef.current
//   ?.animate(
//     [
//       { transform: `rotateY(0) rotateX(0) rotateZ(0)` },
//       {
//         transform: `rotateY(${roll * 20}deg) rotateX(${
//           roll * 20
//         }deg) rotateZ(0)`,
//       },
//     ],
//     {
//       duration: 100,
//     }
//   )
//   .play();

// useEffect(() => {
//   if (testRef.current) {
//     // testRef.current.style.transform = `rotateY(${roll * 50}deg) rotateX(${
//     //   roll * 30
//     // }deg)`;
//     // testRef.current.style.transition = "transform 2s";
//   }
// }, [roll]);
// const testRef = useRef<HTMLDivElement | null>(null);

const sides = new Map([
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
          transform: `rotateY(${sides.get(roll)?.y}deg) rotateX(${
            sides.get(roll)?.x
          }deg)`,
          transition: "transform 1s",
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
