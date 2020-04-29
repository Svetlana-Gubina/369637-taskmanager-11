import BoardComponent from './components/board.js';
import FilterComponent from './components/filterSection.js';
import SiteMenuComponent from './components/menu.js';
import {generateFilters} from "./mock/filter.js";
import {generateTasks} from "./mock/task.js";
import {Position, render} from "./utils/render.js";
import BoardController from "./controllers/board.js";
import TasksModel from "./models/tasks.js";

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

render(siteHeaderElement, new SiteMenuComponent(), Position.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), Position.BEFOREEND);

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, Position.BEFOREEND);
const boardController = new BoardController(boardComponent, tasksModel);
boardController.render(tasks);
