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

async function tasker() {
  try {
    //the "command" will always be the first word after the command itself
    //return a function related to the command
    const command = parse_comands(process.argv[2]);

    //the arguments will always be all other words after the command
    const args = process.argv.slice(3);

    //calls command function with all arguments
    const result = await command.action(args);
  } catch (error) {
    if (error instanceof CliError) {
      console.log(error.error, error.description);
      return;
    }
    console.log(error);
  }
}

export { tasker };
