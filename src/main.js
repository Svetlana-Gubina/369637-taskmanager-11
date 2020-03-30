'use strict';

const getSectionElement = function (classNames) {
  let section = document.createElement(`section`);
  section.className = `${classNames}`;
  return section;
};

const getFilterElement = function (id, amount, isChecked = false) {
  return `
    <input
      type="radio"
      id="filter__${id.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    /><br />
    <label for="filter__${id.toLowerCase()}" class="filter__label">${id} <span class="filter__${id}-count">${amount}</span></label>
  `;
};

const getControlElement = function (id, caption, isChecked = false) {
  return `
    <input
      type="radio"
      id="control__${id.toLowerCase()}"
      class="control__input visually-hidden"
      name="control"
      ${isChecked ? `checked` : ``}
    /><br />
    <label for="filter-${id.toLowerCase()}" class="control__label">${caption}</label>
  `;
};

const getSearch = () => {
  return `<section class="main__search search container">
         <input
           type="text"
           id="search__input"
           class="search__input"
           placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
         />
         <label class="visually-hidden" for="search__input">Search</label>
       </section>`;
};

const getLinkElement = (linktext) => {
  return `<a href="#" class="board__filter">SORT BY ${linktext}</a>`;
};

const getTaskCard = () => {
  return `<article class="card card--black">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled"
          >
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <p class="card__text">Example default task with default color.</p>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">23 September</span>
                  <span class="card__time">11:15 PM</span>
                </p>
              </div>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #todo
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #personal
                  </span>
                </span>

                <span class="card__hashtag-inner">
                  <span class="card__hashtag-name">
                    #important
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
};

const getLoadMore = () => {
  return `<button class="load-more" type="button">load more</button>`;
};

const getMenu = () => {
  const menuSection = getSectionElement(`control__btn-wrap`);
  mainControl.appendChild(menuSection);
  menuSection.insertAdjacentHTML(`beforeend`, getControlElement(`new-task`, `+ ADD NEW TASK`));
  menuSection.insertAdjacentHTML(`beforeend`, getControlElement(`task`, `TASKS`, true));
  menuSection.insertAdjacentHTML(`beforeend`, getControlElement(`statistic`, `STATISTICS`));
  let labels = document.querySelectorAll(`.control__label`);
  labels[0].classList.add(`control__label--new-task`);
  return menuSection;
};

const getMainFilter = () => {
  const mainFilter = getSectionElement(`main__filter filter container`);
  const filtersArr = [{code: `All`, count: 13, isChecked: true},
    {code: `Overdue`, count: 0, isChecked: false},
    {code: `Today`, count: 0, isChecked: false},
    {code: `Favorites`, count: 0, isChecked: false},
    {code: `Repeating`, count: 1, isChecked: false},
    {code: `Tags`, count: 1, isChecked: false},
    {code: `Archive`, count: 115, isChecked: false}];

  for (let n = 0; n < filtersArr.length; n++) {
    render(mainFilter, getFilterElement(filtersArr[n].code, filtersArr[n].count, filtersArr[n].isChecked));
  }
  return mainFilter;
};

const getBoard = () => {
  const boardElement = getSectionElement(`board container`);
  const boardFilterList = document.createElement(`div`);
  boardFilterList.classList.add(`board__filter-list`);
  boardElement.appendChild(boardFilterList);
  const links = [`DEFAULT`, `DATE up`, `DATE down`];
  for (let j = 0; j < links.length; j++) {
    boardFilterList.insertAdjacentHTML(`beforeend`, getLinkElement(links[j]));
  }
  return boardElement;
};

const getBoardTasks = () => {
  const boardTasks = document.createElement(`div`);
  boardTasks.classList.add(`board__tasks`);
  for (let i = 0; i < 3; i++) {
    render(boardTasks, getTaskCard());
  }
  return boardTasks;
};

const render = (container, component) => {
  container.insertAdjacentHTML(`beforeend`, component);
};

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

mainControl.appendChild(getMenu());
render(main, getSearch());
main.appendChild(getMainFilter());
main.appendChild(getBoard());

const board = document.querySelector(`.board`);
board.appendChild(getBoardTasks());
render(board, getLoadMore());

