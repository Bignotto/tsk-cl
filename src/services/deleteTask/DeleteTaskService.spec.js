import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { ListTasksService } from "../listTasks/ListTasksService";

import { DeleteTaskService } from "./DeleteTaskService";
import { CliError } from "../../shared/erros/CliError";

let tasksRepository;
let createTaskService;
let deleteTaskService;

let listTasksService;

describe("Delete Task Service", () => {
  beforeEach(async () => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    listTasksService = new ListTasksService(tasksRepository);
    deleteTaskService = new DeleteTaskService(tasksRepository);

    await createTaskService.execute("this is task 1", "high");
    await createTaskService.execute("this is task 2", "normal");
    await createTaskService.execute("this is task 3", "low");
  });

  it("should be able to delete a task", async () => {
    await deleteTaskService.execute(1);

    const tasks = await listTasksService.execute(true);
    expect(tasks.length).toBe(2);
  });

  it("should not be able to delete task without id", async () => {
    const promise = deleteTaskService.execute();

    expect(promise).rejects.toBeInstanceOf(CliError);
  });

  it("should not be able to delete task with invalid id", async () => {
    const promise = deleteTaskService.execute(32);

    expect(promise).rejects.toBeInstanceOf(CliError);
  });
});
