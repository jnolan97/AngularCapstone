import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { UserService } from './user/user.service'
const routes: Routes = [
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'addtask', component: AddTaskComponent,
    canActivate: [UserService]
  },
  {
    path: 'showtask', component: ShowTaskComponent,
    canActivate: [UserService]
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
