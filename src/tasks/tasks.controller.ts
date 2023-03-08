import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { responseError } from 'src/helper/helper.response';
import { TaskDto } from './tasks.dto';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post('/')
  createTask(@Body() taskDto: TaskDto): Task | any {
    try {
      return this.tasksService.createTask(taskDto);
    } catch (e) {
      return responseError(e.message);
    }
  }

  @Get('/')
  getAllTasks(): Task[] | any {
    try {
      return this.tasksService.getAllTasks();
    } catch (e) {
      return responseError(e.message);
    }
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task | any {
    try {
      return this.tasksService.getTaskById(id);
    } catch (e) {
      return responseError(e.message);
    }
  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    try {
      return this.tasksService.deleteTask(id);
    } catch (e) {
      return responseError(e.message);
    }
  }
}
