import fs from "fs";

class FileTasksRepository {
  constructor() {}
  async create({ description, priority }) {
    //TODO: move this to constructor
    const exist = await fs.existsSync(".tasks");
    if (exist) return true;
    return false;
  }
}

export { FileTasksRepository };
