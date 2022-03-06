import { CliError } from "../../shared/erros/CliError.js";

class CreateTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(description, priority) {
    if (!description)
      throw new CliError(
        "no description",
        "cant add new task without description"
      );

    if (!priority) priority = "normal";

    const priorities = ["high", "normal", "low"];

    if (!priorities.includes(priority))
      throw new CliError(
        "invalid argument",
        "priority should be high, normal or low"
      );

    const newTask = await this.tasksRepository.create({
      description,
      priority,
    });

    const tasks = await this.tasksRepository.list();

    return {
      tasks: [newTask],
      totalTasks: tasks.length,
      pendingTotal: tasks.filter((t) => t.status === "pending").length,
    };
  }
}

export { CreateTaskService };
