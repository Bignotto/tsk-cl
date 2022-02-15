import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { CompleteTaskService } from "../completeTask/CompleteTaskService";
import { ListTasksService } from "../listTasks/ListTasksService";
import { NextTaskService } from "./NextTaskService";

let tasksRepository;
let createTaskService;
let completeTaskService;
let nextTaskService;

let listTasksService;

describe("Next Task Service", () => {
  beforeEach(async () => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    completeTaskService = new CompleteTaskService(tasksRepository);
    listTasksService = new ListTasksService(tasksRepository);
    nextTaskService = new NextTaskService(tasksRepository);

    await createTaskService.execute("this is task 2", "normal");
    await createTaskService.execute("this is task 3", "low");
    await createTaskService.execute("this is task 1", "high");
  });

  it("should list next task correctly", async () => {
    const nextTasks = await nextTaskService.execute();
    expect(nextTasks[0].priority).toBe("high");
  });
});
