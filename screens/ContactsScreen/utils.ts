export const findSelectedContactIndex = (
  positionX: number,
  itemWidth: number,
  usersCount: number,
): number => {
  const lengthX = (usersCount - 1) * itemWidth;
  let currentPosition = 0;
  if (positionX < itemWidth / 2) {
    currentPosition = 0;
  } else if (positionX > lengthX - itemWidth / 2) {
    currentPosition = usersCount - 1;
  } else {
    const positionCalc = Math.trunc((positionX + itemWidth / 2) / itemWidth);
    currentPosition = positionCalc;
  }

  return currentPosition;
};
