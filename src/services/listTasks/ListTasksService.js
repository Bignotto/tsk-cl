class ListTasksService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute(listAll) {
    const tasks = await this.tasksRepository.list();

    //TODO: move date formatting to create task service
    const transform = tasks.map((t) => {
      t.created = new Date(t.created)
        .toISOString()
        .replace(/T/, " ") // replace T with a space
        .replace(/\..+/, "");
      return t;
    });

    if (listAll) return transform;

    const pendingTasks = transform.filter((t) => t.status === "pending");

    return pendingTasks;
  }
}

export { ListTasksService };
