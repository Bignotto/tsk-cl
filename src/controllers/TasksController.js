class TasksController {
  async createTask(args) {
    const words = [];
    let priority = 0;

    args.forEach((word, i) => {
      if (word[0] === "-") {
        priority = args[i + 1];
        return;
      }
      if (priority > 0) return;

      words.push(word);
    });

    console.log({
      words: words.join(" "),
      priority,
    });
  }
}

export { TasksController };
