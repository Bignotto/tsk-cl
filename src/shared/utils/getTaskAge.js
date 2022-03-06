function getTaskAge(task) {
  const now = new Date().getTime();
  let unit = "m";
  let age = ((now - task.created) / 1000 / 60).toFixed(0);

  if (age > 59) {
    age = Math.floor(age / 60);
    unit = "h";
  }

  if (age > 23) {
    age = Math.floor(age / 24);
    unit = "d";
  }

  return `${age}${unit}`;
}

export { getTaskAge };
