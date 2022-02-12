class ListTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute() {
    const tasks = await this.tasksRepository.list();
    return tasks;
  }
}

export { ListTaskService };
