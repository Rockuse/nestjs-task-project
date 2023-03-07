import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { responseError } from 'src/helper/helper.response';
import { TaskDto } from './tasks.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getAllTasks(): Task[] {
    try {
      return this.tasksService.getAllTasks();
    } catch (e) {
      return responseError(e);
    }
  }
  @Get('/:id')
  getTaskById(@Param() Param: TaskDto): Task {
    try {
      return this.tasksService.getTaskById(Param.id);
    } catch (e) {
      return responseError(e);
    }
  }
  @Post('/')
  createTask(@Body() taskDto: TaskDto): Task {
    try {
      return this.tasksService.createTask(taskDto);
    } catch (e) {
      return responseError(e);
    }
  }
}
