import { CreateTaskService } from "../services/CreateTaskService.js";
import { FakeTasksRepository } from "../repositories/FakeTasksRepository.js";
import { CliError } from "../shared/erros/CliError.js";

class TasksController {
  async createTask(args) {
    const tasksRepository = new FakeTasksRepository();
    const createTaskService = new CreateTaskService(tasksRepository);
    const arg_idx = args.findIndex((a) => a === "-p");

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : 0;
    const descriptionArray = arg_idx === -1 ? args : args.slice(0, arg_idx);

    const task = await createTaskService.execute(
      descriptionArray.join(" "),
      priority
    );

    return task;
  }

  async updateTask(args) {}
}

export { TasksController };
