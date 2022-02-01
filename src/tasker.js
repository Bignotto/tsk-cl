import { CliError } from "./shared/erros/CliError.js";
import { commands } from "./commands/index.js";

function parse_comands(command) {
  if (!command)
    throw new CliError(
      "no command error",
      "should provide at least one command"
    );

  const cmd = commands.find((c) => c.command === command);
  cmd.action();

  // switch (command) {
  //   case "-v":
  //     console.log("BiG Tasker v0.0.0");
  //     return;

  //   case "add":
  //     console.log("create new task");
  //     break;

  //   case "complete":
  //     console.log("mark task complete");
  //     break;

  //   case "delete":
  //     console.log("mark task complete");
  //     break;

  //   case "list":
  //     console.log("mark task complete");
  //     break;

  //   case "next":
  //     console.log("mark task complete");
  //     break;

  //   default:
  //     throw new CliError("unknown command", `command ${command} is invalid`);
  // }
}

function tasker(args) {
  try {
    parse_comands(args[2]);
  } catch (error) {
    if (error instanceof CliError) console.log(error.error, error.description);
  }
}

export { tasker };
