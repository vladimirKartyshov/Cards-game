// фун-я перемешивает элементы массива (stackoverflow)
export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// фун-я дублирует элементы массива (stackoverflow)
export const duplicateArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

//фун-ция в зависимости от сложности создает нужный массив иконок
export const createIconsArray = (initialCount) => {
  const cardsIcons = [
    "hippo",
    "truck-fast",
    "user",
    "phone",
    "thumbs-up",
    "globe",
    "hashtag",
    "bath",
  ];

  switch (initialCount) {
    case 10:
      return cardsIcons.slice(0, 5);
    case 12:
      return cardsIcons.slice(0, 6);
    case 14:
      return cardsIcons.slice(0, 7);
    case 16:
      return cardsIcons;
    default:
      break;
  }
};
