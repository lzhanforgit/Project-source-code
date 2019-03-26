import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TaskSubmitService } from '../../service/task-submit.service'

@Component({
  selector: 'app-task-submit',
  templateUrl: './task-submit.component.html',
  styleUrls: ['./task-submit.component.css'],
  providers: [TaskSubmitService]
})
export class TaskSubmitComponent implements OnInit {

  title = this.route.snapshot.paramMap.get('taskTitle');

  taskSubmitDetail;
  submitTask = new FormData();
  constructor(
    private route:ActivatedRoute,
    private tss:TaskSubmitService
  ) {}

  ngOnInit() {
  }
  private getUpload(e) {
    if (e.target.files[0]) {
      console.log(e.target.files[0])
      const file = e.target.files[0];
      document.getElementById('closeimg1').setAttribute('src',window.URL.createObjectURL(file));
      this.submitTask.set('photo',file);
    }
  }

  delPhoto(){
    document.getElementById('closeimg1').setAttribute('src',"");
    this.submitTask.delete('photo');
  }

  taskSubmit(){
    console.log(this.taskSubmitDetail);
    if(this.taskSubmitDetail != null && this.taskSubmitDetail != ''){
      console.log(this.taskSubmitDetail);
      this.submitTask.set('taskSubmitUserId',localStorage.getItem('UD'));
      this.submitTask.set('taskSubmitTaskOrderNumber',this.route.snapshot.paramMap.get('taskOrderNumber'));
      this.submitTask.set('taskSubmitDetail',this.taskSubmitDetail);
      this.tss.submitTask(this.submitTask,res=>{
        if(res.resultCode == 625){
          window.history.back();
        } else if(res.resultCode == 626){
          alert('提交失败');
        }
      })
    }
  }


}
