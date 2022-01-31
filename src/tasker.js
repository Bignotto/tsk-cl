import { CliError } from "./shared/erros/CliError.js";

function parse_comands(command) {
  if (!command)
    throw new CliError(
      "no command error",
      "should provide at least one command"
    );

  switch (command) {
    case "-v":
      console.log("BiG Tasker v0.0.0");
      return;
    default:
      throw new CliError("unknown command", `command ${command} is invalid`);
  }
}

function tasker(args) {
  try {
    console.log({ argv2: args[2] });
    parse_comands(args[2]);
  } catch (error) {
    if (error instanceof CliError) console.log(error.error, error.description);
  }
}

export { tasker };
