import { Component, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({required: true}) task!:Task;

  constructor(private taskService: TaskService){}

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }

}
