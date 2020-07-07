import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'addtask', component: AddTaskComponent
  },
  {
    path: 'showtask', component: ShowTaskComponent
  },
  {
    path: 'updatetask/:id', component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
