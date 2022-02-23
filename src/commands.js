import { TasksController } from "./controllers/TasksController.js";

const tasksController = new TasksController();

const commands = [
  {
    command: "add",
    action: tasksController.createTask,
  },
  {
    command: "complete",
    action: tasksController.completeTask,
  },
  {
    command: "delete",
    action: tasksController.deleteTask,
  },
  {
    command: "list",
    action: tasksController.listTasks,
  },
  {
    command: "next",
    action: tasksController.nextTask,
  },
];

export { commands };
