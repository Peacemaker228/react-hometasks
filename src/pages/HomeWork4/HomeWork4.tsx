import { useRefCustom } from "./useRefCustom";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
  Math.ceil(min);

export const HomeWork4 = () => {
  const customRef = useRefCustom<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!customRef.current) return;

    const red = getRandomInt(0, 255);
    const green = getRandomInt(0, 255);
    const blue = getRandomInt(0, 255);

    customRef.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div>
      <button
        ref={customRef}
        onClick={handleClick}
        style={{ transition: "background-color 0.2s ease-in-out" }}
      >
        Click me!!!!!!
      </button>
    </div>
  );
};
