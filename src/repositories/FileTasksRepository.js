import fs from "fs";
import { CliError } from "../shared/erros/CliError.js";

class FileTasksRepository {
  constructor() {
    this.tasks = [];
  }

  async parseFile(filePath) {
    const exist = await fs.existsSync(filePath);
    if (!exist) {
      await fs.writeFileSync(filePath, "");
    }

    const linesArray = fs.readFileSync(filePath).toString().split("\n");
    // const taskCount = parseInt(linesArray[0]);
    // if (taskCount !== taskCount)
    //   throw new CliError("something wrong", "tasks file looks wierd");
    this.tasks = linesArray;
    return linesArray;
  }

  async create({ description, priority }) {
    const lines = await this.parseFile(".tasks");

    let nextId = 1;
    if (lines.length > 1) nextId = lines[lines.length - 1];
    //TODO: got to parse lines first

    const task = {
      id: taskCount + 1,
      description,
      created: Date.now(),
      status: "pending",
      priority,
    };

    this.tasks.push(task);

    //TODO: task id strategy
    // find highest id and sum 1 to make new number id
    // save last id on file
    // - try to save a number on the file last line
    // - save next id on a task, so the last task will always have next id

    // await fs.appendFileSync(".tasks", `${JSON.stringify(task)}\n`);
  }
}

export { FileTasksRepository };
