import Menu from './components/menu.js';
import Search from './components/search.js';
import FilterSection from './components/filter-section.js';
import Board from './components/board.js';
import Filters from './components/main-filter.js';
import LoadMore from './components/load-more.js';
// import BoardTasks from './components/board-tasks.js';
import {getSampleData} from './data.js';
import {Position, render} from './utils.js';
import {makeTask} from './components/task-card.js';
// import Task from './components/task.js';
// import TaskEdit from './components/task-edit.js';


const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);
const menu = new Menu();

render(mainControl, menu.getElement(), Position.BEFOREEND);
let labels = document.querySelectorAll(`.control__label`);
labels[0].classList.add(`control__label--new-task`);
const search = new Search();
render(main, search.getElement(), Position.BEFOREEND);
const filterSection = new FilterSection();
render(main, filterSection.getElement(), Position.BEFOREEND);
const board = new Board();
render(main, board.getElement(), Position.BEFOREEND);
const boardTasks = document.querySelector(`.board__tasks`);

const {filters, tasks: allTasks} = getSampleData();
let shownTasks = allTasks.splice(0, 8);
const getTasksToRender = () => {
  if (shownTasks.length) {
    return shownTasks.map(makeTask).join(``);
  }
  return ``;
};

boardTasks.insertAdjacentHTML(`beforeend`, getTasksToRender());
const filterContainer = document.querySelector(`.filter`);
const filtersElements = new Filters(filters);
filtersElements.getElement(filterContainer);
const loadMore = new LoadMore();
render(board.getElement(), loadMore.getElement(), Position.BEFOREEND);
const button = document.querySelector(`.load-more`);

const renderNewTasks = () => {
  let moreTasks = allTasks.splice(0, 7).map(makeTask).join(``);
  boardTasks.insertAdjacentHTML(`beforeend`, moreTasks);
  if (allTasks.length === 0) {
    button.style = `display: none`;
  }
  return allTasks;
};
button.addEventListener(`click`, renderNewTasks);

