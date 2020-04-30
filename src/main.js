import BoardComponent from './components/board.js';
import FilterController from "./controllers/filter.js";
import SiteMenuComponent from './components/menu.js';
import {generateTasks} from "./mock/task.js";
import {Position, render} from "./utils/render.js";
import BoardController from "./controllers/board.js";
import TasksModel from "./models/tasks.js";

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, new SiteMenuComponent(), Position.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, Position.BEFOREEND);
const boardController = new BoardController(boardComponent, tasksModel);
boardController.render(tasks);
