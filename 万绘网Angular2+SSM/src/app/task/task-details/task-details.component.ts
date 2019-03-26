import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AgreeAcceptTaskService } from "../../service/agree-accept-task.service";
import { TaskSearchService } from "../../service/task-search.service";
import { TaskSubmitService } from '../../service/task-submit.service'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [ AgreeAcceptTaskService,TaskSearchService,TaskSubmitService ]
})
export class TaskDetailsComponent implements OnInit {

  taskOrderNumber;
  taskPostUserId;


  task = [];
  taskList = [];

  //提交作品的用户
  postUser = [];
  //是否可以接受此任务
  sOrF = 631;
  data = new FormData();
  acc = new FormData();
  submitTask = new FormData();
  avatar;
  show = true;
  //是否是自己的任务
  isMe = false;
  del = [];
  getNum;
  constructor(
    private aats:AgreeAcceptTaskService,
    private route: ActivatedRoute,
    private router: Router,
    private tss:TaskSearchService,
    private tsus:TaskSubmitService
  ) {
    this.taskDetail();
    this.findUser();
    sessionStorage.setItem('ordernum',this.route.snapshot.paramMap.get('taskOrderNumber'))
  }

  ngOnInit() {
    this.submitTask.set('taskSubmitUserId',localStorage.getItem('UD'));
    this.submitTask.set('taskSubmitTaskOrderNumber',sessionStorage.getItem('ordernum'));
    this.tsus.findSubmitTask(this.submitTask,res=>{
      if(res.resultCode == 627){
        this.show = false;
      }else if(res.resultCode == 628){
        this.show = true;
      }
    })

  }

  taskDetail(){
    this.taskOrderNumber = this.route.snapshot.paramMap.get('taskOrderNumber');
    this.taskPostUserId = this.route.snapshot.paramMap.get('taskPostUserId');
    this.acc.set("taskUserId",localStorage.getItem('UD'));
    this.acc.set("taskOrderNumber",this.taskOrderNumber);
    // this.data.set('taskOrderNumber',this.taskOrderNumber)
    this.data.set('taskPostUserId',this.taskPostUserId);
    this.tss.taskDetail(this.data,res=>{
      this.taskList = res.resurt;
      for(let i =0;i<res.resurt.length;i++){
        if(res.resurt[i].taskOrderNumber == this.taskOrderNumber){
          this.task = res.resurt[i];
          this.tss.findGetOrderNumber(res.resurt[i].taskOrderNumber,res=>{
            this.getNum = res.result;
          })
        }
        if(localStorage.getItem('UD') == res.resurt[i].taskPostUserId){
          //不显示
          this.isMe = true;
          this.tss.findGetOrderNumber(res.resurt[i].taskOrderNumber,res=>{
            console.log(res.result+"res.result")
            if(res.result > 0){
              this.del[i] = false;
            }else {
              console.log(i)
              this.del[i] = true;
            }
          })
        } else {
          this.isMe = false;
          this.del[i] = false;
        }
      }
    })
    //查询是否接受过此任务
    this.tss.selectTaskGet(this.acc,res=>{
      this.sOrF = res.resultCode;
    })
  }
  findUser(){
    this.tss.findUserById(this.data,res=>{
      this.postUser = res.resurt;
      this.avatar =  res.resurt.userAvatar;
      sessionStorage.setItem('userAvator',res.resurt.userAvatar);
    })
  }


  infoTask(id,ordernum){
    this.taskOrderNumber = ordernum;
    this.taskPostUserId = id;
    sessionStorage.setItem('ordernum',ordernum);

    this.acc.set("taskUserId",localStorage.getItem('UD'));
    this.acc.set("taskOrderNumber",this.taskOrderNumber);
    // this.data.set('taskOrderNumber',this.taskOrderNumber)
    this.data.set('taskPostUserId',this.taskPostUserId);
    this.tss.taskDetail(this.data,res=>{
      this.taskList = res.resurt;
      for(let i =0;i<res.resurt.length;i++){
        if(res.resurt[i].taskOrderNumber == this.taskOrderNumber){
          this.task = res.resurt[i];
          continue;
        }
      }
    })

    //查询是否接受过此任务
    this.tss.selectTaskGet(this.acc,res=>{
      this.sOrF = res.resultCode;
    })

    //查询是否提交过此任务
    this.submitTask.set('taskSubmitTaskOrderNumber',this.taskOrderNumber);
    this.tsus.findSubmitTask(this.submitTask,res=>{
      if(res.resultCode == 627){
        this.show = false;
      }else if(res.resultCode == 628){
        this.show = true;
      }
    })
  }





  //接受任务
  //userId   taskOrderNumber
  accept(){
    this.tss.acceptTask(this.acc,res=>{
      this.sOrF = res.resultCode;
    })
  }


  //删除任务
  delTask(taskOrderNumber){
    console.log(taskOrderNumber)
    let dataT = new FormData();
    dataT.set('taskOrderNumber',taskOrderNumber);
    this.tss.delTask(dataT,res=>{
      if(res.resultCode == 623){
        this.tss.taskDetail(this.data,res=>{
          this.taskList = res.resurt;
          for(let i =0;i<res.resurt.length;i++){
            if(res.resurt[i].taskOrderNumber == this.taskOrderNumber){
              this.task = res.resurt[i];
              if(localStorage.getItem('UD') == res.resurt[i].taskPostUserId){
                //不显示
                this.isMe = true;
                this.tss.findGetOrderNumber(res.resurt[i].taskOrderNumber,res=>{
                  console.log(res.result+"res.result")
                  if(res.result > 0){
                    this.del[i] = false;
                  }else {
                    console.log(i)
                    this.del[i] = true;
                  }
                })
              } else {
                this.isMe = false;
                this.del[i] = false;
              }
              continue;
            }
          }
        })
        console.log("删除成功");
      }else {
        console.log("删除失败");
      }
    })
  }

}
