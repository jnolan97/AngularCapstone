import { Component, OnInit } from '@angular/core';
import {DragDropModule, CdkDropList,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user/user.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
interface taskData {
  id: string,
  taskName: string,
  taskDesc: string,
  taskStatus: string

}
interface progressData {
  id: string,
  taskName: string,
  taskDesc: string,
  taskStatus: string
}
interface completeData {
  id: string,
  taskName: string,
  taskDesc: string,
  taskStatus: string

}
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})

export class ShowTaskComponent implements OnInit {
  taskData;
  progressData;
  completeData;
  constructor(private afs: AngularFirestore, private userServ: UserService) {

  }

  


  dataArray = [];
  todos = [
    {
      taskName: 'Angular',
      taskDesc: 'Web Development'
    },
    {
      taskName: 'Flexbox',
      taskDesc: 'Web Development'
    }
  ];
  progress = [

  ];
  completed = [
  ];

  private getTaskData(){
    this.taskData = this.afs.collection<taskData>('tasks', ref => ref.where('taskStatus', '==', 'todos')).valueChanges({idField:"id"}).subscribe(data =>{
      this.taskData = data;
      console.log(`finding the type of data we have ${typeof(this.taskData)}`)
    })
  }

  getProgressData(){
      this.afs.collection<progressData>('tasks', ref => ref.where('taskStatus', '==', 'progress')).valueChanges({idField:'id'})
        .subscribe(data => {  
          this.progressData = data
          
        })
    }
    
    getCompleteData(){
     this.completeData = this.afs.collection<completeData>('tasks', ref => ref.where('taskStatus', '==', 'complete')).valueChanges({idField:'id'})
      .subscribe(data => {  
        this.completeData = data
        
      })
    }


delTask(id){
  this.afs.collection('tasks').valueChanges().subscribe(data =>{
    console.log(data)
    return this.afs.collection('tasks').doc(id).ref.delete()
  })
}

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
        
    }
  }
  ngOnInit(): void {
    this.userServ.getUser().then(data => console.log(data))
    this.getTaskData()
    this.getProgressData()
    this.getCompleteData()
  }

}
