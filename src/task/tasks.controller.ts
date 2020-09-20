import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTask } from "./create-task.model";
import { Task } from "./task.entity";
import { TasksService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    async findAll(): Promise<Task[]> {
      return await this.tasksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Task> {
        return await this.tasksService.findOne(id);
    }

    @Post()
    async createTask(@Body() request: CreateTask) {
        return await this.tasksService.create(request);
    }

    @Put(':id/completed')
    async turnCompleted(@Param('id') id: number) {
        return await this.tasksService.changeCompletedStatus(id, true);
    }

    @Put(':id/uncompleted')
    async turnUnCompleted(@Param('id') id: number) {
        return await this.tasksService.changeCompletedStatus(id, false);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number) {
        return await this.tasksService.remove(id);
    }
}