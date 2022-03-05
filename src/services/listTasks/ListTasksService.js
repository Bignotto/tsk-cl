class ListTasksService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(listAll) {
    const tasks = await this.tasksRepository.list();

    const pendingTasks = tasks.filter((t) => t.status === "pending");

    if (listAll)
      return {
        tasks,
        totalTasks: tasks.length,
        pendingTotal: pendingTasks.length,
      };

    return {
      tasks: pendingTasks,
      totalTasks: tasks.length,
      pendingTotal: pendingTasks.length,
    };
  }
}

export { ListTasksService };
