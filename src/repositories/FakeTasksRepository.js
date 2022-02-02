class FakeTasksRepository {
  constructor() {
    this.tasks = [];
  }

  async create({ description, priority }) {
    // console.log({ id: this.tasks.length, description, priority, done: false });
    this.tasks.push({
      id: this.tasks.length,
      description,
      priority,
      done: false,
    });

    return {
      id: this.tasks.length,
      description,
      priority,
      done: false,
    };
  }
}

export { FakeTasksRepository };
