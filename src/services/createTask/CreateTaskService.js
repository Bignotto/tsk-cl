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

    return newTask;
  }
}

export { CreateTaskService };
