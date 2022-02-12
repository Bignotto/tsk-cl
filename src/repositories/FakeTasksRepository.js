class FakeTasksRepository {
  constructor() {
    this.tasks = [];
  }

  async create({ description, priority }) {
    const newtask = {
      id: this.tasks.length + 1,
      description,
      created: Date.now(),
      status: "pending",
      priority: priority,
    };

    this.tasks.push(newtask);

    return Promise.resolve(newtask);
  }

  async update({ id, description, created, status, priority }) {
    let task = {};
    const updatedTasks = this.tasks.map((t) => {
      if (t.id === id) {
        t.description = description;
        created = created;
        status = status;
        priority = priority;
        task = t;
      }
      return t;
    });

    this.tasks = updatedTasks;

    return Promise.resolve(task);
  }

  async findById(taskId) {
    // if (!taskId) return undefined;
    const task = this.tasks.find((t) => t.id === taskId);
    return Promise.resolve(task);
  }

  async list() {
    return Promise.resolve(this.tasks);
  }

  async delete(taskId) {
    const deletedTasks = this.tasks.filter((t) => t.id !== taskId);
    this.tasks = deletedTasks;
    return Promise.resolve();
  }
}

export { FakeTasksRepository };
