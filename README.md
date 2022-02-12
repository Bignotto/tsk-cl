```
task <subcommand> # Accepts add, complete, delete, list and next as subcommands

task add <description> [-p <priority>] # Adds a pending task. Can set the task's priority to low, normal or high with the -p (or --priority) option

task complete <id> # Marks a task as done
task delete <id> # Deletes a task
task list [-a] # Shows pending tasks. The -a (or --all) option shows all tasks
task next # Shows the next task of each priority
```

https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

### fev/07/2022

Implemented tests for Create Task Service:

- should be able to create new task
- should always create new tasks with status pending
- should not accept new tasks with negative priority
- should not accept new tasks with priority higher than 10
- should not accept new tasks with 0 priority

---

### fev/12/2022

## Task Complete command

Implemented task complete command.

### Refactored both file and memory repositories

- implemented `findById` function in both repositories
- implemented `update` function in both repositores

### Tests

Implemented tests:

- should be able to complete a task
- should not be able to complete a task with invalid id
- should not be able to complete a task without id

## List Tasks command

Implemented list tasks command.

List all tasks pending on database file. If parameter -a is provided, all tasks are listed;

Implemented tests:

- should be able to list tasks correctly
- should list done tasks when -a parameter is provided
- should list only pending tasks
