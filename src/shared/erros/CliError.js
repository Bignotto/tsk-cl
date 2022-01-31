class CliError {
  error = "";
  description = "";

  constructor(error, description) {
    this.error = error;
    this.description = description;
  }
}

export { CliError };
