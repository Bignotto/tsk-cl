import * as icons from "../shared/utils/icons.js";
import * as colors from "../shared/utils/colors.js";

import { getTaskAge } from "../shared/utils/getTaskAge.js";
import { AppTitle } from "./components/AppTitle.js";
import { NoTasksMessage } from "./components/NoTasksMessage.js";
import { NoPendingTasksMessage } from "./components/NoPendingTasksMessage.js";

class NextTaskView {
  render(tasks, totalTasks, pendingTotal) {
    if (totalTasks === 0) {
      NoTasksMessage();
      return;
    }

    if (pendingTotal === 0) {
      NoPendingTasksMessage();
      return;
    }

    console.log(colors.brightWhite("\nnext tasks"));
    tasks.forEach((t) => {
      let age = getTaskAge(t);

      console.log(
        `${colors.gray(
          `${t.id.toString().padStart(3, " ")}.`
        )} ${icons.undoneMark(t.priority)} ${colors.white(
          t.description
        )} ${colors.gray(age)} ${icons.priorityTag(t.priority)}`
      );
    });

    const ratio = (1 - pendingTotal / totalTasks) * 100;
    console.log(`\n${ratio.toFixed(1)}% done`);
    console.log(
      `${colors.green(
        (totalTasks - pendingTotal).toString()
      )} done, ${colors.red(pendingTotal)} pending`
    );
    AppTitle("");
  }
}

export { NextTaskView };
