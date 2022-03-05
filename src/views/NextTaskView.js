import * as icons from "../shared/utils/icons.js";
import * as colors from "../shared/utils/colors.js";

import { getTaskAge } from "../shared/utils/getTaskAge.js";
import { AppTitle } from "./components/AppTitle.js";
import { NoTasksMessage } from "./components/NoTasksMessage.js";

class NextTaskView {
  render(tasks) {
    if (tasks.length === 0) {
      NoTasksMessage();
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

    AppTitle("");
  }
}

export { NextTaskView };
