import { Component, OnInit } from '@angular/core';

import {TaskNewService } from "../../service/task-new.service";
import { TaskSearchService } from "../../service/task-search.service";

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css'],
  providers: [TaskNewService,TaskSearchService]
})
export class TaskNewComponent implements OnInit {

  newTask = [];
  liStart = [true,false,false,false];
  photoType;
  typeData = new FormData();
  constructor(
    // private tns:TaskNewService,
    private tss:TaskSearchService
  ) { }

  ngOnInit() {
    this.typeData.set('taskPhotoTypeId','1');
    this.tss.findAllTask(this.typeData,res=>{
      let i = res.result.length;
      if(i>10){
        this.newTask = res.result.splice(i-10,i).reverse();
      }else {
        this.newTask = res.result.splice(0,i).reverse();
      }
      this.typeData.delete('taskPhotoTypeId');
    })
  }

  liBack(e){

    this.photoType = e+1;
    this.liStart[e] = true;
    this.typeData.set('taskPhotoTypeId',this.photoType);
    this.tss.findAllTask(this.typeData,res=>{
      let i = res.result.length;
      if(i>10){
        this.newTask = res.result.splice(i-10,i).reverse();
      }else {
        this.newTask = res.result.splice(0,i).reverse();
      }
      this.typeData.delete('photoType');
    })
    if(e==0){
      this.liStart[1] = false;
      this.liStart[2] = false;
      this.liStart[3] = false;
    }
    if(e==1){
      this.liStart[0] = false;
      this.liStart[2] = false;
      this.liStart[3] = false;
    }
    if(e==2){
      this.liStart[1] = false;
      this.liStart[0] = false;
      this.liStart[3] = false;
    }
    if(e==3){
      this.liStart[1] = false;
      this.liStart[2] = false;
      this.liStart[0] = false;
    }
  }

}
