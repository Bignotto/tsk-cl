import { CliError } from "../../shared/erros/CliError.js";

class DeleteTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }
  async execute(taskId) {
    if (taskId === undefined)
      throw new CliError("invalid parameter", "should provide task id");

    if (isNaN(taskId))
      throw new CliError("invalid parameter", "task id should be a number");

    const task = await this.tasksRepository.findById(Number(taskId));
    if (!task) throw new CliError("invalid parameter", "task not found");

    await this.tasksRepository.delete(Number(taskId));
    const tasks = await this.tasksRepository.list();

    return {
      tasks: [task],
      totalTasks: tasks.length,
      pendingTotal: tasks.filter((t) => t.status === "pending").length,
    };
  }
}

export { DeleteTaskService };
