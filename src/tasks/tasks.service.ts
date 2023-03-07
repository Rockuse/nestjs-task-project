import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { TaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  getTaskById(id: string): Task {
    try {
      const task = this.tasks.find((i) => i.id === id);
      if (typeof task === 'undefined') throw new Error('Tidak ditemukan');
      return task;
    } catch (error) {
      throw error;
    }
  }
  createTask(taskDto: TaskDto): Task {
    const { title, description } = taskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
