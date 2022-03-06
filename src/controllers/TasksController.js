import { CreateTaskService } from "../services/createTask/CreateTaskService.js";
import { FileTasksRepository } from "../repositories/FileTasksRepository.js";
import { CompleteTaskService } from "../services/completeTask/CompleteTaskService.js";
import { ListTasksService } from "../services/listTasks/ListTasksService.js";
import { DeleteTaskService } from "../services/deleteTask/DeleteTaskService.js";
import { NextTaskService } from "../services/nextTask/NextTaskService.js";

import { TaskListView } from "../views/TaskListView.js";
import { NextTaskView } from "../views/NextTaskView.js";
import { CreateTaskView } from "../views/CreateTaskView.js";
import { CompleteTaskView } from "../views/CompleteTaskView.js";

class TasksController {
  async createTask(args) {
    // const tasksRepository = new FakeTasksRepository();
    const fileTasks = new FileTasksRepository();
    const createTaskView = new CreateTaskView();
    const createTaskService = new CreateTaskService(fileTasks);
    const arg_idx = args.findIndex((a) => a === "-p");

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : undefined;

    const descriptionArray = arg_idx === -1 ? args : args.slice(0, arg_idx);

    const { tasks, totalTasks, pendingTotal } = await createTaskService.execute(
      descriptionArray.join(" "),
      priority
    );

    createTaskView.render(tasks, totalTasks, pendingTotal);
  }

  async completeTask(args) {
    const fileTasks = new FileTasksRepository();
    const completeTaskView = new CompleteTaskView();
    const completeTask = new CompleteTaskService(fileTasks);

    const { tasks, totalTasks, pendingTotal } = await completeTask.execute(
      args[0]
    );

    completeTaskView.render(tasks, totalTasks, pendingTotal);
  }

  async listTasks(args) {
    const fileTasks = new FileTasksRepository();
    const taskListView = new TaskListView();
    const listTasks = new ListTasksService(fileTasks);

    const arg_idx = args.findIndex((a) => a === "-a");
    const listAll = arg_idx !== -1;

    const { tasks, totalTasks, pendingTotal } = await listTasks.execute(
      listAll
    );

    taskListView.render(tasks, listAll, totalTasks, pendingTotal);
  }

  async deleteTask(args) {
    const fileTasks = new FileTasksRepository();
    const deleteTask = new DeleteTaskService(fileTasks);

    const tasks = await deleteTask.execute(args[0]);

    console.log({ tasks });
  }

  async nextTask(args) {
    const fileTasks = new FileTasksRepository();
    const nextTaskView = new NextTaskView();

    const nextTask = new NextTaskService(fileTasks);

    const { tasks, totalTasks, pendingTotal } = await nextTask.execute();

    nextTaskView.render(tasks, totalTasks, pendingTotal);
  }
}

export { TasksController };
