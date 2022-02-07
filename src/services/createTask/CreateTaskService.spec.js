import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "./CreateTaskService";
import { CliError } from "../../shared/erros/CliError.js";

let tasksRepository;
let createTaskService;

describe("Create Task Service", () => {
  beforeEach(() => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
  });

  it("should be able to create new task", async () => {
    const description = "this is a test task";
    const priority = "7";

    const createdTask = await createTaskService.execute(description, priority);

    expect(createdTask).toHaveProperty("id");
  });

  it("should always create new tasks with status pending", async () => {
    const description = "this is a test task";
    const priority = "5";

    const createdTask = await createTaskService.execute(description, priority);

    expect(createdTask.status).toBe("pending");
  });

  it("should not accept new tasks with negative priority", async () => {
    const description = "this is a test task";
    const priority = "-1";

    const promise = createTaskService.execute(description, priority);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });

  it("should not accept new tasks with priority higher than 10", async () => {
    const description = "this is a test task";
    const priority = "11";

    const promise = createTaskService.execute(description, priority);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });

  it("should not accept new tasks with 0 priority", async () => {
    const description = "this is a test task";
    const priority = "0";

    const promise = createTaskService.execute(description, priority);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });
});
