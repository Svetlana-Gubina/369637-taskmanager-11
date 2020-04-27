import Task from '../components/task.js';
import TaskEdit from '../components/task-edit.js';
import {Position, render} from '../utils.js';
// import flatpickr from '../../node_modules/flatpickr';
// import '../../node_modules/flatpickr/dist/flatpickr.min.css';
// import '../../node_modules/flatpickr/dist/themes/light.css';

export default class TaskController {
  constructor(container, data, onChangeView, onDataChange) {
    this._container = container;
    this._data = data;
    this._data.isFavorite = false;
    this._onChangeView = onChangeView;
    this._onDataChange = onDataChange;
    this._taskView = new Task(data);
    this._taskEdit = new TaskEdit(data);
  }

  init() {
    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.getElement().replaceChild(this._taskView.getElement(), this._taskEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    this._taskEdit.getElement().querySelector(`textarea`)
     .addEventListener(`blur`, () => {
       document.addEventListener(`keydown`, onEscKeyDown);
     });

    this._taskEdit.getElement().querySelector(`textarea`)
     .addEventListener(`focus`, () => {
       document.removeEventListener(`keydown`, onEscKeyDown);
     });

    // this._taskEdit.getElement().querySelector(`.card__btn--favorites`).classList.remove(`.card__btn--disabled`);

    this._taskView.getElement().querySelector(`.card__btn--edit`)
     .addEventListener(`click`, (evt) => {
       evt.preventDefault();
       this._onChangeView();
       this._container.getElement().replaceChild(this._taskEdit.getElement(), this._taskView.getElement());
       document.addEventListener(`keydown`, onEscKeyDown);
     });

    this._taskView.getElement().querySelector(`.card__btn--archive`)
     .addEventListener(`click`, (evt) => {
       evt.preventDefault();
       this._container.getElement().removeChild(this._taskView.getElement());
     });

    // this._taskEdit.getElement().querySelector(`.card__btn--favorites`)
    //  .addEventListener(`click`, (evt) => {
    //    evt.preventDefault();
    //    this._data.isFavorite = true;
    //  });

    this._taskEdit.getElement().querySelector(`.card__save`)
     .addEventListener(`click`, (evt) => {
       evt.preventDefault();
       const formData = new FormData(this._taskEdit.getElement().querySelector(`.card__form`));
       const entry = {
         description: formData.get(`text`),
         color: formData.get(`color`),
         tags: Array.from(new Set(formData.getAll(`hashtag`))),
         dueDate: new Date(formData.get(`date`)),
         repeatingDays: formData.getAll(`repeat`).reduce((acc, it) => {
           acc[it] = true;
           return acc;
         }, {
           'mo': false,
           'tu': false,
           'we': false,
           'th': false,
           'fr': false,
           'sa': false,
           'su': false,
         })
       };
       this._onDataChange(entry, this._data);
       document.removeEventListener(`keydown`, onEscKeyDown);
     });
    render(this._container.getElement(), this._taskView.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
    if (this._container.getElement().contains(this._taskEdit.getElement())) {
      this._container.getElement().replaceChild(this._taskView.getElement(), this._taskEdit.getElement());
    }
  }
}
