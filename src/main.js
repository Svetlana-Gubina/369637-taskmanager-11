import {getBoard} from './components/board.js';
import {getBoardTasks} from './components/boardTasks.js';
import {getEditTaskCard} from './components/editTaskCard.js';
import {getFilterSection} from './components/filterSection.js';
import {getLoadMore} from './components/loadMore.js';
import {makeFilter} from './components/mainFilter.js';
import {getMenu} from './components/menu.js';
import {getSearch} from './components/search.js';
import {makeTask} from './components/taskCard.js';
import {getSampleData, getTask} from './data.js';

export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

render(mainControl, getMenu(), `beforeend`);
let labels = document.querySelectorAll(`.control__label`);
labels[0].classList.add(`control__label--new-task`);
render(main, getSearch(), `beforeend`);
render(main, getFilterSection(), `beforeend`);
render(main, getBoard(), `beforeend`);
const board = document.querySelector(`.board`);
render(board, getBoardTasks(), `beforeend`);
const boardTasks = document.querySelector(`.board__tasks`);

const {tasks: allTasks, filters} = getSampleData();
let shownTasks = allTasks.splice(0, 8);

const getTasksToRender = () => {
  if (shownTasks.length) {
    return shownTasks.map(makeTask).join(``);
  }
  return ``;
};

render(boardTasks, getEditTaskCard(getTask()), `afterbegin`);
render(boardTasks, getTasksToRender(), `beforeend`);
const filterContainer = document.querySelector(`.filter`);
render(filterContainer, makeFilter({filters}), `afterbegin`);
render(board, getLoadMore(), `beforeend`);
const button = document.querySelector(`.load-more`);

const renderNewTasks = () => {
  render(boardTasks, allTasks.splice(0, 7).map(makeTask).join(``), `beforeend`);
  if (allTasks.length === 0) {
    button.style = `display: none`;
  }
  return allTasks;
};
button.addEventListener(`click`, renderNewTasks);
