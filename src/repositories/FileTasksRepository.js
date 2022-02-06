import fs from "fs";

class FileTasksRepository {
  constructor() {
    this.tasks = [];
  }

  async parseFile(filePath) {
    const exist = await fs.existsSync(filePath);
    if (!exist) {
      const task0 = {
        id: 0,
        description: "config task",
        created: Date.now(),
        status: "done",
        priority: 0,
      };

      this.tasks.push(task0);
      await fs.writeFileSync(".tasks", `${JSON.stringify(this.tasks)}\n`);
    }

    const fileContent = await fs.readFileSync(filePath).toString();
    const linesArray = JSON.parse(fileContent);
    return linesArray;
  }

  async create({ description, priority }) {
    //get tasks from file database
    const tasksArray = await this.parseFile(".tasks");

    //create new task
    const task = {
      id: tasksArray[tasksArray.length - 1].id + 1,
      description,
      created: Date.now(),
      status: "pending",
      priority,
    };

    //add new task to tasks array
    tasksArray.push(task);

    //save new array
    await fs.writeFileSync(".tasks", `${JSON.stringify(tasksArray)}\n`);
    return task;
  }
}

export { FileTasksRepository };
