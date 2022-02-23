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

  it("should list next task correctly - all tasks", async () => {
    const nextTasks = await nextTaskService.execute();
    expect(nextTasks[0].priority).toBe("high");
  });

  it("should list next task correctly - normal task complete", async () => {
    await completeTaskService.execute(1);
    const nextTasks = await nextTaskService.execute();
    expect(nextTasks.length).toBe(2);
    expect(nextTasks[0].priority).toBe("high");
  });

  it("should list next task correctly - high task complete", async () => {
    await completeTaskService.execute(3);
    const nextTasks = await nextTaskService.execute();
    expect(nextTasks.length).toBe(2);
    expect(nextTasks[0].priority).toBe("normal");
  });

  it("should list next task correctly - more than one task on each priority", async () => {
    await createTaskService.execute("should not be next", "normal");
    await createTaskService.execute("should not be next", "low");
    await createTaskService.execute("should not be next", "high");

    const nextTasks = await nextTaskService.execute();
    expect(nextTasks.length).toBe(3);
    expect(nextTasks[0].description).toBe("this is task 1");
  });

  it("should list next task correctly - more than one task on each priority - complete high task", async () => {
    await createTaskService.execute("should not be next", "normal");
    await createTaskService.execute("should not be next", "low");
    await createTaskService.execute("should be next", "high");

    await completeTaskService.execute(3);

    const nextTasks = await nextTaskService.execute();
    expect(nextTasks.length).toBe(3);
    expect(nextTasks[0].description).toBe("should be next");

    await completeTaskService.execute(6);
    const nextTasks2 = await nextTaskService.execute();
    expect(nextTasks2.length).toBe(2);
    expect(nextTasks2[0].priority).toBe("normal");
  });
});
