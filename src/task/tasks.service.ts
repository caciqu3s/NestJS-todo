import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { CreateTask } from "./create-task.model";
import { Task } from "./task.entity";

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    findOne(id: number): Promise<Task> {
        return this.taskRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }

    async create(request: CreateTask): Promise<void> {
        let task = new Task();
        task.title = request.title;
        task.description = request.description;
        await this.taskRepository.save(task);
    }

    async editInfo(id: number, request: CreateTask): Promise<void> {
        const task: Task = await this.taskRepository.findOne(id);
        task.title = request.title;
        task.description = request.description;
        await this.taskRepository.save(task);
    }

    async changeCompletedStatus(id: number, isCompleted: boolean): Promise<void> {
        const task: Task = await this.taskRepository.findOne(id);
        task.isCompleted = isCompleted;
        await this.taskRepository.save(task);
    }
}