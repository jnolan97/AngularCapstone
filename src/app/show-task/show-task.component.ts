import { Component, OnInit } from '@angular/core';
import {DragDropModule, CdkDropList,CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user/user.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subject } from 'rxjs';
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
  inprogress;
  tasks$: Observable<taskData[]>;
  taskStatus$: BehaviorSubject<string|null>;
  constructor(private afs: AngularFirestore, private userServ: UserService) {

  }

  


// gettingData(){
//   return this.getProgressData().subscribe(data =>{
//     console.log("testingagain",data)
//     this.progressData = data
//   })
// }

  filterStatus(status: string|null){
    this.taskStatus$.next(status)
    console.log(this.progressData)
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
    this.taskData = this.afs.collection<taskData>('tasks').valueChanges({idField:"id"}).subscribe(data =>{
      this.taskData = data;
      console.log(`finding the type of data we have ${typeof(this.taskData)}`)
     // console.log(data);
    })
  }
  // private getProgressData(){
  //   this.progressData = this.afs.collection<progressData>('tasks').valueChanges({idField:"id"}).subscribe(data =>{
  //     if(data['taskStatus'] == 'progress'){
  //     this.progressData = data;
  //     console.log(`Tasks with priority ${data}`)
  //     }
  //   })
  // }
  // private getProgressData(){
  //   this.progressData = this.afs.collection<taskData>('tasks', ref => ref.where('taskStatus','==','progress'))
  // }

  getProgressData(){
    //this.taskStatus$ = new BehaviorSubject(null);
    // return of(this.tasks$).pipe(
      // switchMap(() => 
      this.afs.collection<progressData>('tasks', ref => ref.where('taskStatus', '==', 'progress')).valueChanges({idField:'id'})
        .subscribe(data => {  
          this.progressData = data
          console.log(this.progressData) 
        
        })

      //   console.log("hello world",res)
      //   var temp = this.afs.collection('tasks').doc().ref;
  
      //   res.forEach(item => {
      //     var quer  = temp.where("taskStatus", "==", "progress");
      //     console.log(item)
      //   })
      // })
    //     let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    //     //this.taskData.taskStatus == 'progress' ?  query.get() : null
    //       console.log("testing123", query.get())
    //       return query
  
     // }).valueChanges()
  //   )
  // );
    }


  // public taskStatus$ = new Subject<string>();
  // queryObservable = this.taskStatus$.pipe(
  //   switchMap(status =>
  //     this.progressData = this.afs.collection('tasks', ref => ref.where('progress','==', status)).valueChanges()
  //     )
  // );
delTask(id){
  this.afs.collection('tasks').valueChanges().subscribe(data =>{
    console.log(data)
    return this.afs.collection('tasks').doc(id).ref.delete()
    // console.log(task) passes undefined?
  })
}
  // jobskill_query = this.afs.collection('tasks').where('job_id','==',post.job_id);
  // jobskill_query.get().then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //     doc.ref.delete();
  //   });
//   async getMarker() {
//     const snapshot = await this.afs.collection('tasks').get()
//     return this.afs.collection('tasks').doc(snapshot).ref.delete()
// }
//   delTask(tsk:string) {
//     const index: number = this.taskData.indexOf(tsk);
//     if (index !== -1) {
//         this.taskData.splice(index, 1);
//     }        
// }
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
    //this.gettingData()
  }

}
