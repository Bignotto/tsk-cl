import fs from "fs";
import { CliError } from "../shared/erros/CliError";

class FileTasksRepository {
  constructor() {}

  async parseFile(filePath) {
    const exist = await fs.existsSync(filePath);
    if (!exist) {
      await fs.writeFileSync(filePath, "0\n");
    }

    const linesArray = fs.readFileSync(filePath).toString().split("\n");
    const taskCount = parseInt(linesArray[0]);
    if (taskCount !== taskCount)
      throw new CliError("something wrong", "tasks file looks wierd");
  }

  async create({ description, priority }) {
    await this.parseFile(".tasks");

    // const lines = await fs.readFileSync(".tasks").toString();
    // const task = {
    //   id: lines.split("\n").length,
    //   description,
    //   created: Date.now(),
    //   status: "pending",
    //   priority,
    // };

    // await fs.appendFileSync(".tasks", `${JSON.stringify(task)}\n`);
  }
}

export { FileTasksRepository };
