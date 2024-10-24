import { TaskService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input({required:true}) userId!: string;

  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TaskService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask(
    {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
    this.userId);
    
    this.close.emit();
  }

}
