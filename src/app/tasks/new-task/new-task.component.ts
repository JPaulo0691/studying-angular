import { TaskService } from './../tasks.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: false,
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
