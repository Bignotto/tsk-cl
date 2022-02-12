import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { CompleteTaskService } from "../completeTask/CompleteTaskService";
import { ListTasksService } from "./ListTasksService";

let tasksRepository;
let createTaskService;
let completeTask;

let listTasksService;

describe("List Tasks Service", () => {
  beforeEach(async () => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    completeTask = new CompleteTaskService(tasksRepository);
    listTasksService = new ListTasksService(tasksRepository);

    await createTaskService.execute("this is task 1", "5");
    await createTaskService.execute("this is task 2", "8");
    await createTaskService.execute("this is task 3", "2");
  });

  it("should be able to list tasks correctly", async () => {
    const tasks = await listTasksService.execute();

    expect(tasks.length).toBe(3);

    await completeTask.execute("1");

    const tasks2 = await listTasksService.execute();

    expect(tasks2.length).toBe(2);
  });

  it("should list only pending tasks", async () => {
    await completeTask.execute("1");

    const tasks = await listTasksService.execute();

    expect(tasks.length).toBe(2);
  });

  it("should list all pending and done tasks when provide -a parameter", async () => {
    await completeTask.execute("1");

    const tasks = await listTasksService.execute(true);

    expect(tasks.length).toBe(3);
  });
});
