import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({required: true}) name!: string;
  @Input({required:true}) userId!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    return this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }
}
