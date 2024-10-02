export const getRandomItems = (items: string[], count: number) => {
  return items.sort(() => 0.5 - Math.random()).slice(0, count);
};
