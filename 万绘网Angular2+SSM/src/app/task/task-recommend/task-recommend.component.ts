import { Component, OnInit } from '@angular/core';

import {TaskNewService} from "../../service/task-new.service";

@Component({
  selector: 'app-task-recommend',
  templateUrl: './task-recommend.component.html',
  styleUrls: ['./task-recommend.component.css'],
  providers: [TaskNewService]
})


export class TaskRecommendComponent implements OnInit {


  photoType = ['风景画','素描','版画','油画','漫画','简笔画','国画','色彩'];
  allTask = [];
  constructor(
    private tns:TaskNewService
  ) { }



ngOnInit() {
    this.tns.findAllTask(res=>{
      console.log(res)
      let i = res.result.length;
      this.allTask = res.result.splice(0,10);
    })
  }

  // showTaskDetails(task){
  //   alert(task.taskPhotoUrl);
  // }
}
