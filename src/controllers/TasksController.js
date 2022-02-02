import { CreateTaskService } from "../services/CreateTaskService.js";
import { FakeTasksRepository } from "../repositories/FakeTasksRepository.js";
import { CliError } from "../shared/erros/CliError.js";

class TasksController {
  async createTask(args) {
    const tasksRepository = new FakeTasksRepository();
    const createTaskService = new CreateTaskService(tasksRepository);
    const arg_idx = args.findIndex((a) => a === "-p");

    //TODO: move this business rule to service
    if (arg_idx === 0)
      throw new CliError(
        "no description",
        "cant add new task without description"
      );

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : 0;
    const descriptionArray = arg_idx === -1 ? args : args.slice(0, arg_idx);

    const task = await createTaskService.execute(
      descriptionArray.join(" "),
      priority
    );

    console.log({
      words: descriptionArray.join(" "),
      priority: priority ?? 0,
      result: task,
    });

    //TODO: return service result
    //TODO: should return TASK ID
  }

  async updateTask(args) {}
}

export { TasksController };
