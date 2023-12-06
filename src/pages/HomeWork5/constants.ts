const arr: string[] = [
  "hello",
  "world",
  "decrement",
  "react",
  "axenix",
  "axteam",
  "worm",
  "hell",
];

const newArr: string[] = [];

for (let i = 0; i < 2000; i += 1) {
  newArr.push(...arr);
}

export { newArr };
