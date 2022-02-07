class FakeTasksRepository {
  constructor() {
    this.tasks = [];
  }

  async create({ description, priority }) {
    const newtask = {
      id: this.tasks.length,
      description,
      created: Date.now(),
      status: "pending",
      priority: priority,
    };

    this.tasks.push(newtask);

    return Promise.resolve(newtask);
  }
}

export { FakeTasksRepository };
