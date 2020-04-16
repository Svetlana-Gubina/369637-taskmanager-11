import Board from '../components/board.js';
import BoardTasks from '../components/board-tasks.js';
import {Position, render} from '../utils.js';
import Task from '../components/task.js';
import TaskEdit from '../components/task-edit.js';
import NoTasks from '../components/no-task.js';
import Sort from '../components/sort.js';

export default class BoardController {
  constructor(container, tasks) {
    this._container = container;
    this._tasks = tasks;
    this._board = new Board();
    this._taskList = new BoardTasks();
    this._noTasks = new NoTasks();
    this._sort = new Sort();
    this._shownTasks = [];
  }

  init() {
    render(this._container, this._board.getElement(), Position.BEFOREEND);
    render(this._board.getElement(), this._sort.getElement(), Position.AFTERBEGIN);
    render(this._board.getElement(), this._taskList.getElement(), Position.BEFOREEND);
    const newShowTasks = this._tasks.splice(0, 8);
    if (newShowTasks.length) {
      newShowTasks.forEach((taskMock) => this._renderTask(taskMock));
    } else {
      render(this._board.getElement(), this._noTasks.getElement(), Position.AFTERBEGIN);
    }
    this._shownTasks = this._shownTasks.concat(newShowTasks);
    this._sort.getElement().addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderTask(task) {
    const taskComponent = new Task(task);
    const taskEditComponent = new TaskEdit(task);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._taskList.getElement().replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    taskComponent.getElement()
      .querySelector(`.card__btn--edit`)
      .addEventListener(`click`, () => {
        this._taskList.getElement().replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
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
        this._taskList.getElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    render(this._taskList.getElement(), taskComponent.getElement(), Position.BEFOREEND);
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    this._taskList.getElement().innerHTML = ``;

    switch (evt.target.dataset.sortType) {
      case `date-up`:
        const sortedByDateUpTasks = this._shownTasks.slice().sort((a, b) => a.dueDate - b.dueDate);
        sortedByDateUpTasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
      case `date-down`:
        const sortedByDateDownTasks = this._shownTasks.slice().sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
      case `default`:
        this._shownTasks.forEach((taskMock) => this._renderTask(taskMock));
        break;
    }
  }
}
