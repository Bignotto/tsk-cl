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
    const priority = "normal";

    const createdTask = await createTaskService.execute(description, priority);

    expect(createdTask).toHaveProperty("id");
  });

  it("should always create new tasks with status pending", async () => {
    const description = "this is a test task";
    const priority = "normal";

    const createdTask = await createTaskService.execute(description, priority);

    expect(createdTask.status).toBe("pending");
  });

  it('"should not create new task if priority is not equal to high, normal or low"', async () => {
    const description = "this is a test task";
    const priority = "4";

    const promise = createTaskService.execute(description, priority);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });
});
