import Menu from './components/menu.js';
import Search from './components/search.js';
import FilterSection from './components/filter-section.js';
import Filters from './components/main-filter.js';
import LoadMore from './components/load-more.js';
import {getSampleData} from './data.js';
import {Position, render, unrender} from './utils.js';
import BoardController from './controllers/board.js';

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

const taskMocks = getSampleData();

let all = taskMocks.filters.all.count;
let arch = taskMocks.filters.archive.count;
if (all === arch) {
  taskMocks.tasks.length = 0;
}

const boardController = new BoardController(main, taskMocks.tasks);
boardController.init();

const filterContainer = document.querySelector(`.main__filter`);
const filters = new Filters(taskMocks.filters);
filters.getElement(filterContainer);

const board = document.querySelector(`.board`);
const loadMore = new LoadMore();
render(board, loadMore.getElement(), Position.BEFOREEND);

const button = document.querySelector(`.load-more`);
const renderNewTasks = () => {
  unrender(button);
  boardController.init();
  render(board, loadMore.getElement(), Position.BEFOREEND);
  if (taskMocks.tasks.length === 0) {
    loadMore.removeElement();
    button.style = `display: none`;
  }
  return taskMocks.tasks;
};
button.addEventListener(`click`, renderNewTasks);
