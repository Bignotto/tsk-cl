import * as colors from "../../shared/utils/colors.js";

export function NoTasksMessage() {
  console.log(`\nYou have not created any tasks yet\n`);
  console.log(`Try:`);
  console.log(
    colors.brightWhite(`tsk add New task description [-p] <high|normal|low>`)
  );
}
