class ListTasksService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(listAll) {
    const tasks = await this.tasksRepository.list();

    if (listAll) return tasks;

    const pendingTasks = tasks.filter((t) => t.status === "pending");

    return pendingTasks;
  }
}

export { ListTasksService };
