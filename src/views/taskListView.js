import * as icons from "../shared/utils/icons.js";
import * as colors from "../shared/utils/colors.js";

import { getTaskAge } from "../shared/utils/getTaskAge.js";

function taskListView(tasks) {
  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const pendingTasksCount = pendingTasks.length;
  const ratio = (1 - pendingTasksCount / tasks.length) * 100;

  console.log(`\ntasks » ${tasks.length - pendingTasksCount}/${tasks.length}`);

  tasks.forEach((t) => {
    let age = getTaskAge(t);

    console.log(
      `${colors.gray(`${t.id.toString().padStart(3, " ")}.`)} ${
        t.status === "done"
          ? icons.greenCheckMark()
          : icons.undoneMark(t.priority)
      } ${
        t.status === "done"
          ? colors.gray(t.description)
          : colors.white(t.description)
      } ${colors.gray(age)}`
    );
  });

  console.log(`\n${ratio.toFixed(1)}% done`);
  console.log(
    `${colors.green(
      (tasks.length - pendingTasksCount).toString()
    )} done, ${colors.red(tasks.length.toString())} pending`
  );
}

export { taskListView };
