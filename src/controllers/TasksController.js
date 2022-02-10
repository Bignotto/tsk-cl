import { CreateTaskService } from "../services/createTask/CreateTaskService.js";
import { FileTasksRepository } from "../repositories/FileTasksRepository.js";
import { CompleteTaskService } from "../services/completeTask/CompleteTaskService.js";

class TasksController {
  async createTask(args) {
    // const tasksRepository = new FakeTasksRepository();
    const fileTasks = new FileTasksRepository();
    const createTaskService = new CreateTaskService(fileTasks);
    const arg_idx = args.findIndex((a) => a === "-p");

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : 1;
    const descriptionArray = arg_idx === -1 ? args : args.slice(0, arg_idx);

    const task = await createTaskService.execute(
      descriptionArray.join(" "),
      priority
    );

    //TODO: format return to user
    console.log({ task });
  }

  async completeTask(args) {
    const fileTasks = new FileTasksRepository();
    const completeTask = new CompleteTaskService(fileTasks);

    const updatedTask = await completeTask.execute(args[0]);

    console.log({ updatedTask });
  }
}

export { TasksController };
