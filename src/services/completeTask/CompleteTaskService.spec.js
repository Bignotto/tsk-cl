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
    const priority = "high";

    const { tasks } = await createTaskService.execute(description, priority);

    const { tasks: updatedTask } = await completeTaskService.execute(
      tasks[0].id
    );

    expect(updatedTask[0].status).toBe("done");
  });

  it("should not be able to complete a task with invalid id", async () => {
    const description = "this is a test task";
    const priority = "normal";

    await createTaskService.execute(description, priority);

    const promise = completeTaskService.execute(32);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });

  it("should not be able to complete a task without id", async () => {
    const description = "this is a test task";
    const priority = "low";

    await createTaskService.execute(description, priority);

    const promise = completeTaskService.execute();

    expect(promise).rejects.toBeInstanceOf(CliError);
  });
});
