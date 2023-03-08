import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { TaskDto } from './tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }
  async getTaskById(id: string): Promise<Task> {
    try {
      const task = await this.tasks.find((i) => i.id === id);
      if (typeof task === 'undefined') throw new Error('Tidak ditemukan');
      return task;
    } catch (error) {
      throw error;
    }
  }
  async createTask(taskDto: TaskDto): Promise<Task> {
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
  async deleteTask(id: string) {
    try {
      await this.getTaskById(id);
      this.tasks.splice(
        this.tasks.findIndex((a) => (a.id = id)),
        1,
      );
      return 'Data berhasil dihapus';
    } catch (error) {
      return error;
    }
  }
}
