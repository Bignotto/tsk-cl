import { CreateTaskService } from "../services/createTask/CreateTaskService.js";
import { FileTasksRepository } from "../repositories/FileTasksRepository.js";
import { CompleteTaskService } from "../services/completeTask/CompleteTaskService.js";
import { ListTasksService } from "../services/listTasks/ListTasksService.js";
import { DeleteTaskService } from "../services/deleteTask/DeleteTaskService.js";
import { NextTaskService } from "../services/nextTask/NextTaskService.js";

import { taskListView } from "../views/taskListView.js";

class TasksController {
  async createTask(args) {
    // const tasksRepository = new FakeTasksRepository();
    const fileTasks = new FileTasksRepository();
    const createTaskService = new CreateTaskService(fileTasks);
    const arg_idx = args.findIndex((a) => a === "-p");

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : undefined;

    const descriptionArray = arg_idx === -1 ? args : args.slice(0, arg_idx);

    const task = await createTaskService.execute(
      descriptionArray.join(" "),
      priority
    );

    //TODO: format return to user: created task
    console.log({ task });
  }

  async completeTask(args) {
    const fileTasks = new FileTasksRepository();
    const completeTask = new CompleteTaskService(fileTasks);

    const updatedTask = await completeTask.execute(args[0]);

    //TODO: format return to user: completed task
    console.log({ updatedTask });
  }

  async listTasks(args) {
    const fileTasks = new FileTasksRepository();
    const listTasks = new ListTasksService(fileTasks);

    const arg_idx = args.findIndex((a) => a === "-a");
    const listAll = arg_idx !== -1;

    const tasks = await listTasks.execute(listAll);

    //TODO: format return to user: list tasks
    taskListView(tasks);
  }

  async deleteTask(args) {
    const fileTasks = new FileTasksRepository();
    const deleteTask = new DeleteTaskService(fileTasks);

    const tasks = await deleteTask.execute(args[0]);

    console.log({ tasks });
  }

  async nextTask(args) {
    const fileTasks = new FileTasksRepository();
    const nextTask = new NextTaskService(fileTasks);

    const response = await nextTask.execute();

    console.log({ response });
  }
}

export { TasksController };
