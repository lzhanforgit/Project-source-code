import { Component, OnInit } from '@angular/core';


import {TaskNewService} from "../service/task-new.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskNewService]
})
export class TaskComponent implements OnInit {

  allTask = [];
  constructor(
    private tns: TaskNewService
  ) { }

  ngOnInit() {
    this.tns.findAllTask(res=>{
      this.allTask = JSON.parse(res);
    })
  }

}
