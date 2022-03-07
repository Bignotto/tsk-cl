import * as colors from "../shared/utils/colors.js";
import * as icons from "../shared/utils/icons.js";

import { AppTitle } from "./components/AppTitle.js";
import { getTaskAge } from "../shared/utils/getTaskAge.js";

class DeleteTaskView {
  render(tasks, totalTasks, pendingTotal) {
    console.log("\ntask deleted");

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

export { DeleteTaskView };
