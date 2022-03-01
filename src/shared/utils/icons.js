export function greenCheckMark() {
  return "\x1b[92m✓\x1b[0m";
}

export function redSquare() {
  return "\x1b[91m□\x1b[0m";
}

export function highTag() {
  return "\x1b[31m HIGH   \x1b[0m";
}

export function normalTag() {
  return "\x1b[33m NORMAL \x1b[0m";
}

export function lowTag() {
  return "\x1b[37m LOW    \x1b[0m";
}

export function undoneMark(priority) {
  let priorityColor;
  switch (priority) {
    case "high":
      priorityColor = "\x1b[91m";
      break;
    case "normal":
      priorityColor = "\x1b[33m";
      break;
    case "low":
      priorityColor = "\x1b[37m";
      break;
  }
  return `${priorityColor}□\x1b[0m`;
}
