import { FakeTasksRepository } from "../../repositories/FakeTasksRepository";
import { CreateTaskService } from "../createTask/CreateTaskService";
import { ListTaskService } from "./ListTasksService";

import { CliError } from "../../shared/erros/CliError.js";

let tasksRepository;
let createTaskService;

let listTasksService;

let task1;
let task2;
let task3;

describe("List Tasks Service", () => {
  beforeEach(async () => {
    tasksRepository = new FakeTasksRepository();
    createTaskService = new CreateTaskService(tasksRepository);
    listTasksService = new ListTaskService(tasksRepository);

    task1 = await createTaskService.execute("this is task 1", "5");
    task2 = await createTaskService.execute("this is task 2", "8");
    task3 = await createTaskService.execute("this is task 3", "2");
  });

  it("should be able to list tasks correctly", async () => {
    const tasks = await listTasksService.execute();

    expect(tasks.length).toBe(3);
  });

  // it("should always create new tasks with status pending", async () => {
  //   const description = "this is a test task";
  //   const priority = "5";

  //   const createdTask = await createTaskService.execute(description, priority);

  //   expect(createdTask.status).toBe("pending");
  // });

  // it("should not accept new tasks with negative priority", async () => {
  //   const description = "this is a test task";
  //   const priority = "-1";

  //   const promise = createTaskService.execute(description, priority);

  //   expect(promise).rejects.toBeInstanceOf(CliError);
  // });
});
