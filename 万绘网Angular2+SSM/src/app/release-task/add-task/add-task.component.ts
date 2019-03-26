import {Component, DoCheck, OnInit} from '@angular/core';
import { Router} from '@angular/router'; //导入router服务

import { FormsModule } from '@angular/forms';
import {ReleaseTaskService } from "../../service/release-task.service";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [ReleaseTaskService]
})
export class AddTaskComponent implements OnInit{

  startCode: any;
  taskTitle: string;
  taskContent: string;
  photo: any;
  taskPhotoTypeId: any;
  taskCompleteTime: any;
  taskPay: any;
  reg = new RegExp('\d');
  addTask = new FormData();


  contentStart = false;
  titleStart = false;
  moneyStart = false;
  typeStart = false;
  timeStart = false;

  showAdd = true;
  constructor(
    private rts:ReleaseTaskService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  ngDoCheck(){
    // console.log(this.taskPhotoTypeId);
    if(this.taskPhotoTypeId>0){
      this.typeStart = false;
    }
    if(this.taskCompleteTime>0){
      this.timeStart = false;
    }
  }

  contentNotNull(){
    if(this.taskContent != null && this.taskContent != ''){
      if(this.taskContent.length<=10){
        this.contentStart = true;
        return true;
      }else {
        this.contentStart = false;
        return false;
      }
    }else {
      this.contentStart = true;
      return true;
    }
  }

  titleNotNull(){
    if(this.taskTitle!=null && this.taskTitle!=''){
      this.titleStart = false;
      return false;
    }else {
      this.titleStart = true;
      return true;
    }
  }

  moneyNotNull(){
    if(this.taskPay > 0){
      this.moneyStart = false;
      return false;
    }else {
      this.moneyStart = true;
      return true;
    }
  }

  release(){
    if(this.taskPhotoTypeId>0){
      if(this.taskCompleteTime>0){
        if(!this.moneyNotNull()){
          if(!this.titleNotNull()){
            if(!this.contentNotNull()){
              //提交数据
              this.addTask.set('taskPostUserId',localStorage.getItem('UD'));
              this.addTask.set('taskTitle',this.taskTitle);
              this.addTask.set('taskContent',this.taskContent);
              this.addTask.set('taskPhotoTypeId',this.taskPhotoTypeId);
              this.addTask.set('taskCompleteTime',this.taskCompleteTime);
              this.addTask.set('taskPay',this.taskPay);
              this.rts.addTask(this.addTask,res=>{
                // this.router.navigateByUrl("success");
                this.startCode = res.resultCode;
                console.log(res.resultCode)
                if(this.startCode == 601){
                  this.router.navigateByUrl("success");
                  this.showAdd = false;
                }else if(this.startCode == 602){
                  this.showAdd = true;
                }
              });
            }
          }
        }
      } else {
        this.timeStart = true;
      }
    } else {
      this.typeStart = true;
    }

    // console.log(data);
  }


  private getUpload(e) {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      document.getElementById('closeimg1').setAttribute('src',window.URL.createObjectURL(file));
      this.addTask.set('photo',file);
    }
  }

  delPhoto(){
    document.getElementById('closeimg1').setAttribute('src',"");
    this.addTask.delete('photo');
  }


}
