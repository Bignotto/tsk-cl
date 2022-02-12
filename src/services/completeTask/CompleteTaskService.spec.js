import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { CompleteTaskService } from "./CompleteTaskService";
import { CliError } from "../../shared/erros/CliError.js";

let tasksRepository;
let createTaskService;
let completeTaskService;

describe("Complete Task", () => {
  beforeEach(() => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    completeTaskService = new CompleteTaskService(tasksRepository);
  });

  it("should be able to complete a task", async () => {
    const description = "this is a test task";
    const priority = "7";

    const createdTask = await createTaskService.execute(description, priority);

    const updatedTask = await completeTaskService.execute(createdTask.id);

    expect(updatedTask.status).toBe("done");
  });

  it("should not be able to complete a task with invalid id", async () => {
    const description = "this is a test task";
    const priority = "7";

    await createTaskService.execute(description, priority);

    const promise = completeTaskService.execute(32);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });

  it("should not be able to complete a task without id", async () => {
    const description = "this is a test task";
    const priority = "7";

    const createdTask = await createTaskService.execute(description, priority);

    const promise = completeTaskService.execute();

    expect(promise).rejects.toBeInstanceOf(CliError);
  });
});
