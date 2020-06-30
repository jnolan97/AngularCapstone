import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

const routes: Routes = [
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'addtask', component: AddTaskComponent
  },
  {
    path: 'showtask', component: ShowTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
