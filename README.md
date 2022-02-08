```
task <subcommand> # Accepts add, complete, delete, list and next as subcommands

task add <description> [-p <priority>] # Adds a pending task. Can set the task's priority to low, normal or high with the -p (or --priority) option

task complete <id> # Marks a task as done
task delete <id> # Deletes a task
task list [-a] # Shows pending tasks. The -a (or --all) option shows all tasks
task next # Shows the next task of each priority
```

https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

### 07/fev/2022

Implemented tests for Create Task Service:

- should be able to create new task
- should always create new tasks with status pending
- should not accept new tasks with negative priority
- should not accept new tasks with priority higher than 10
- should not accept new tasks with 0 priority
