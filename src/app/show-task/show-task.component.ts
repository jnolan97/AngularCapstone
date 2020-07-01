import { Component, OnInit } from '@angular/core';
import {DragDropModule, CdkDropList,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user/user.service';
interface taskData {
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

  constructor(private afs: AngularFirestore, private userServ: UserService) { }
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
    {
      taskName: 'Draggable items',
      taskDesc: 'Angular'
    }
  ];
  completed = [
    {
      taskName: 'Android',
      taskDesc: 'Mobile Development'
    },
    {
      taskName: 'MongoDB',
      taskDesc: 'Databases'
    }
  ];
  taskData;
  private getTaskData(){
    this.afs.collection('tasks').valueChanges().subscribe(data => {
      console.log(data)
      this.taskData = data
      /* .get() version of querying firebase firestore
      this.afs.collection('nbaPlayers').ref.get().then(data => {
        this.playerdata = data
      })
      */
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
  }

}
