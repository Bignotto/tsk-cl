import { CliError } from "../shared/erros/CliError.js";

class TasksController {
  async createTask(args) {
    const arg_idx = args.findIndex((a) => a === "-p");

    if (arg_idx === 0)
      throw new CliError(
        "no description",
        "cant add new task without description"
      );

    const priority = arg_idx >= 1 ? args[arg_idx + 1] : 0;
    const words = arg_idx === -1 ? args : args.slice(0, arg_idx);

    //TODO: call service
    console.log({
      words: words.join(" "),
      priority: priority ?? 0,
    });

    //TODO: return service result
    //TODO: should return TASK ID
  }
}

export { TasksController };
