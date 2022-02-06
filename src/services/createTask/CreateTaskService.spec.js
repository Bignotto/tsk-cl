import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "./CreateTaskService";

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
});
