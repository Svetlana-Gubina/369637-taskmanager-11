import Menu from './components/menu.js';
import Search from './components/search.js';
import FilterSection from './components/filter-section.js';
import Board from './components/board.js';
import Filters from './components/main-filter.js';
import LoadMore from './components/load-more.js';
// import BoardTasks from './components/board-tasks.js';
import {getSampleData} from './data.js';
import {Position, render} from './utils.js';
import Task from './components/task.js';
import TaskEdit from './components/task-edit.js';
import NoTasks from './components/no-task.js';

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
const renderTask = (task) => {
  const taskComponent = new Task(task);
  const taskEditComponent = new TaskEdit(task);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      boardTasks.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  taskComponent.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      boardTasks.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`focus`, () => {
        document.removeEventListener(`keydown`, onEscKeyDown);
      });
  taskEditComponent.getElement().querySelector(`textarea`)
      .addEventListener(`blur`, () => {
        document.addEventListener(`keydown`, onEscKeyDown);
      });

  taskEditComponent.getElement()
      .querySelector(`.card__form`)
      .addEventListener(`submit`, () => {
        boardTasks.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });


  render(boardTasks, taskComponent.getElement(), Position.BEFOREEND);
};

let shownTasks = allTasks.splice(0, 8);
if (shownTasks.length) {
  shownTasks.forEach((taskMock) => renderTask(taskMock));
} else {
  const noTasks = new NoTasks();
  render(board.getElement(), noTasks.getElement(), Position.BEFOREEND);
}

const filterContainer = document.querySelector(`.filter`);
const filtersElements = new Filters(filters);
filtersElements.getElement(filterContainer);
const loadMore = new LoadMore();
render(board.getElement(), loadMore.getElement(), Position.BEFOREEND);

const button = document.querySelector(`.load-more`);
const renderNewTasks = () => {
  let moreTasks = allTasks.splice(0, 7);
  moreTasks.forEach((taskMock) => renderTask(taskMock));
  if (allTasks.length === 0) {
    button.style = `display: none`;
  }
  return allTasks;
};
button.addEventListener(`click`, renderNewTasks);

