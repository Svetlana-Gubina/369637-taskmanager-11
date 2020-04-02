import {getSearch} from './components/search.js';
import {getLoadMore} from './components/loadMore.js';
import {getMenu} from './components/menu.js';
import {getMainFilter} from './components/mainFilter.js';
import {getBoard} from './components/board.js';
import {getBoardTasks} from './components/boardTasks.js';
import {getTaskCard} from './components/taskCard.js';


const render = (container, component) => {
  container.insertAdjacentHTML(`beforeend`, component);
};

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

render(mainControl, getMenu(), `beforeend`);
let labels = document.querySelectorAll(`.control__label`);
labels[0].classList.add(`control__label--new-task`);
render(main, getSearch(), `beforeend`);
render(main, getMainFilter(), `beforeend`);
render(main, getBoard(), `beforeend`);
const board = document.querySelector(`.board`);
render(board, getBoardTasks(), `beforeend`);
const boardTasks = document.querySelector(`.board__tasks`);
for (let i = 0; i < 3; i++) {
  render(boardTasks, getTaskCard(), `beforeend`);
}
render(board, getLoadMore(), `beforeend`);
