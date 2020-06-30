import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ShowTaskComponent } from './show-task/show-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DragDropModule, CdkDropList,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    ShowTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
