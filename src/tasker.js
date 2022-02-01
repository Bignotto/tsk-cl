import { CliError } from "./shared/erros/CliError.js";
import { commands } from "./commands.js";

function parse_comands(command) {
  if (!command)
    throw new CliError(
      "no command error",
      "should provide at least one command"
    );

  const cmd = commands.find((c) => c.command === command);
  if (!cmd) throw new CliError("invalid command", `${command} is invalid`);
  return cmd;
}

function tasker() {
  try {
    const command = parse_comands(process.argv[2]);
    const args = process.argv.slice(3);
    command.action(args);
  } catch (error) {
    if (error instanceof CliError) console.log(error.error, error.description);
  }
}

export { tasker };
