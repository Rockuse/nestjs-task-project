import { IsNotEmpty } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  id: string;
  title: string;
  description: string;
}
