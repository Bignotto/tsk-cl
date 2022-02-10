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
    action: (taskId) => {
      console.log("delete function");
    },
  },
  {
    command: "list",
    action: () => {
      console.log("list function");
    },
  },
  {
    command: "next",
    action: () => {
      console.log("next function");
    },
  },
];

export { commands };
