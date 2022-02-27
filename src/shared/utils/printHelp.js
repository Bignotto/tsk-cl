function printHelp() {
  console.log(`tasker available commands:`);
  console.log(`tsk add <task description> [-p <priority>] create new task`);
  console.log(
    `tsk complete <id>                          mark task as complete`
  );
  console.log(`tsk delete <id>                            delete task`);
  console.log(
    `tsk list [-a]                              show pending tasks, -a to list all`
  );
  console.log(
    `tsk next                                   show next task of each priority`
  );
}

export { printHelp };
