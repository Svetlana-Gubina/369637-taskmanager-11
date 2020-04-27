import {createBoardTemplate} from './components/board.js';
// import {getBoardTasks} from './components/boardTasks.js';
import {createTaskEditTemplate} from './components/editTaskCard.js';
import {createFilterTemplate} from './components/filterSection.js';
import {createLoadMoreButtonTemplate} from './components/loadMore.js';
import {createSiteMenuTemplate} from './components/menu.js';
import {createTaskTemplate} from './components/taskCard.js';
import {getSampleData, getTask} from './data.js';


// let labels = document.querySelectorAll(`.control__label`);
// labels[0].classList.add(`control__label--new-task`);
// render(main, getFilterSection(), `beforeend`);

// render(board, getBoardTasks(), `beforeend`);
// const boardTasks = document.querySelector(`.board__tasks`);
//
// const {tasks: allTasks, filters} = getSampleData();
// let shownTasks = allTasks.splice(0, 8);
//
// const getTasksToRender = () => {
//   if (shownTasks.length) {
//     return shownTasks.map(makeTask).join(``);
//   }
//   return ``;
// };

// render(boardTasks, getEditTaskCard(getTask()), `afterbegin`);
// render(boardTasks, getTasksToRender(), `beforeend`);
// const filterContainer = document.querySelector(`.filter`);
// render(filterContainer, makeFilter({filters}), `afterbegin`);
// render(board, getLoadMore(), `beforeend`);
// const button = document.querySelector(`.load-more`);
//
// const renderNewTasks = () => {
//   render(boardTasks, allTasks.splice(0, 7).map(makeTask).join(``), `beforeend`);
//   if (allTasks.length === 0) {
//     button.style = `display: none`;
//   }
//   return allTasks;
// };
// button.addEventListener(`click`, renderNewTasks);
const TASK_COUNT = 3;


export const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);


render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);
// const board = document.querySelector(`.board`);
// const boardTasks = document.querySelector(`.board__tasks`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
