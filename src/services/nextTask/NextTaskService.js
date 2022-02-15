class NextTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute() {
    const tasks = await this.tasksRepository.list();
    //TODO: implement task service
    // find first high, first normal and first low priorities tasks
    return tasks;
  }
}

export { NextTaskService };
