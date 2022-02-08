import { CliError } from "../../shared/erros/CliError";

class CompleteTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(taskId) {
    if (taskId === undefined)
      throw new CliError("invalid parameter", "should provide task id");

    const task = await this.tasksRepository.findById(taskId);
    if (!task) throw new CliError("invalid parameter", "task not found");

    task.status = "done";

    const updatedTask = await this.tasksRepository.update(task);
    return updatedTask;
  }
}

export { CompleteTaskService };
