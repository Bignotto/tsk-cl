import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { ListTaskService } from "./ListTasksService";

let tasksRepository;
let createTaskService;

let listTasksService;

describe("List Tasks Service", () => {
  beforeEach(async () => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    listTasksService = new ListTaskService(tasksRepository);

    await createTaskService.execute("this is task 1", "5");
    await createTaskService.execute("this is task 2", "8");
    await createTaskService.execute("this is task 3", "2");
  });

  it("should be able to list tasks correctly", async () => {
    const tasks = await listTasksService.execute();

    expect(tasks.length).toBe(3);
  });
});
