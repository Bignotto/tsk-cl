```
task <subcommand> # Accepts add, complete, delete, list and next as subcommands

task add <description> [-p <priority>] # Adds a pending task. Can set the task's priority to low, normal or high with the -p (or --priority) option

task complete <id> # Marks a task as done
task delete <id> # Deletes a task
task list [-a] # Shows pending tasks. The -a (or --all) option shows all tasks
task next # Shows the next task of each priority
```
