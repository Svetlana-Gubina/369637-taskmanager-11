import {HOURS_LIMIT, MINUTES_LIMIT, AVAILABLE_COLORS, TAGS_SET, AVAILABLE_DESCS} from './constants.js';
import {getRandomBoolean, getRandomOfArray, getRandomInteger, shuffle} from './utils.js';


export const getTask = () => ({
  description: getRandomOfArray(AVAILABLE_DESCS),
  dueDate: getRandomInteger() > 0 ? Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000 : Date.now() - 1 - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  hours: getRandomInteger(10, HOURS_LIMIT),
  minutes: getRandomInteger(10, MINUTES_LIMIT),
  tags: shuffle(Array.from(TAGS_SET).slice(0, Math.floor(Math.random() * 3))),
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  color: getRandomOfArray(AVAILABLE_COLORS),
  isFavorite: false, // getRandomBoolean(),
  isArchived: getRandomBoolean(),
});

const TASK_COUNT = getRandomInteger(1, 30);

export const getSampleData = () => {
  const randomTasks = new Array(TASK_COUNT).fill().map(() => getTask());

  const filters = {
    all: {
      title: `All`,
      count: randomTasks.length + 1,
      isChecked: true,
    },
    overdue: {
      title: `Overdue`,
      count: randomTasks.map(({dueDate}) => dueDate).filter((value) => value < Date.now() * 24 * 60 * 60 * 1000).length,
      isChecked: true,
    },
    today: {
      title: `Today`,
      count: randomTasks.map(({dueDate}) => dueDate).filter((value) => value === Date.now() * 24 * 60 * 60 * 1000).length,
      isChecked: true,
    },
    favorites: {
      title: `Favorites`,
      count: randomTasks.map(({isFavorite}) => isFavorite).filter((value) => value > 0).length,
      isChecked: true,
    },
    repeating: {
      title: `Repeating`,
      count: randomTasks.map(({repeatingDays}) => Object.values(repeatingDays)).filter((value) => value.some((elem) => elem)).length + 1,
      isChecked: true,
    },
    tags: {
      title: `Tags`,
      count: randomTasks.map(({tags}) => tags).filter((value) => value.length > 0).length + 1,
      isChecked: true,
    },
    archive: {
      title: `Archive`,
      count: randomTasks.map(({isArchived}) => isArchived).filter((value) => value > 0).length,
      isChecked: true,
    },
  };
  return {
    filters,
    tasks: randomTasks,
  };
};
