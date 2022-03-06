export function white(text) {
  return `\x1b[37m${text}\x1b[0m`;
}

export function gray(text) {
  return `\x1b[90m${text}\x1b[0m`;
}

export function green(text) {
  return `\x1b[92m${text}\x1b[0m`;
}

export function red(text) {
  return `\x1b[91m${text}\x1b[0m`;
}

export function brightWhite(text) {
  return `\x1b[97m${text}\x1b[0m`;
}

// console.log("\x1b[90m FgBlack  \x1b[0m");
// console.log("\x1b[91m FgRed  \x1b[0m");
// console.log("\x1b[92m FgGreen  \x1b[0m");
// console.log("\x1b[93m\x1b[101m FgYellow  \x1b[0m");
// console.log("\x1b[94m FgBlue  \x1b[0m");
// console.log("\x1b[95m FgMagenta  \x1b[0m");
// console.log("\x1b[96m FgCyan  \x1b[0m");
// console.log("\x1b[97m FgWhite  \x1b[0m");

// console.log("\x1b[100m BgBlack  \x1b[0m");
// console.log("\x1b[101m BgRed  \x1b[0m");
// console.log("\x1b[102m BgGreen  \x1b[0m");
// console.log("\x1b[103m BgYellow  \x1b[0m");
// console.log("\x1b[104m BgBlue  \x1b[0m");
// console.log("\x1b[105m BgMagenta  \x1b[0m");
// console.log("\x1b[106m BgCyan  \x1b[0m");
// console.log("\x1b[107m BgWhite  \x1b[0m");
