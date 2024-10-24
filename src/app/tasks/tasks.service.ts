import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})
export class TaskService{
  private tasks = DUMMY_TASKS;

  constructor(){
    const task = localStorage.getItem('tasks');

    if(task){
      this.tasks = JSON.parse(task);
    }
  }

  getUserTasks(userId:string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })

    this.saveTasks();
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }


  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
