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
