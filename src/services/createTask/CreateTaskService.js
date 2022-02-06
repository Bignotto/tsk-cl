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

    const priorityValue = parseInt(priority);

    if (priorityValue !== priorityValue)
      throw new CliError("invalid argument", "priority should be a number");

    if (priorityValue < 0 || priorityValue > 10)
      throw new CliError(
        "invalid argument",
        "priority should be a number between 0 and 10"
      );

    const newTask = await this.tasksRepository.create({
      description,
      priority,
    });

    return newTask;
  }
}

export { CreateTaskService };
