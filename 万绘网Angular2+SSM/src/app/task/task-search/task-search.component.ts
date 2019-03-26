import { Component, OnInit } from '@angular/core';
import { TaskSearchService } from "../../service/task-search.service";

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css'],
  providers: [TaskSearchService]
})
export class TaskSearchComponent implements OnInit {

  search_title: string;
  search_money = '0';
  search_style = '0';
  searchForm = new FormData();
  searchTask = [];
  page;
  selectType = ['类别','风景画','素描','版画','油画','漫画','简笔画','国画','色彩'];
  seletcMoney = ['价格','¥ 1000 以下','¥ 1000 - ¥ 2,000','¥ 2,000 - ¥ 3,000','¥ 3,000 - ¥ 4,000','¥ 4,000 以上']


  //分页
  page_index=1;
  page_account:number;
  page_container=4;
  arr_page_container=[];
  constructor(
    private tss: TaskSearchService
  ) { }
  ngDoCheck(){
    //console.log(this.search_style);
  }

  ngOnInit() {
  }

  search(){
    console.log(this.search_title+"--"+this.search_money+"--"+this.search_style)
    if((this.search_title == null || this.search_title == undefined) && (this.search_money == null || this.search_money == '' || this.search_money == '0') && (this.search_style == null || this.search_style == undefined || this.search_style == '0')){
      return;
    }
    if(this.search_title != null || this.search_title != undefined){
      this.searchForm.set('taskTitle',this.search_title);
    }
    if(this.search_money != null || this.search_money != undefined || this.search_money != '0'){
      this.searchForm.set('taskAmount',this.search_money);
    }
    if(this.search_style != null || this.search_style != undefined || this.search_style != '0'){
      this.searchForm.set('taskPhotoTypeId',this.search_style);
    }
    this.tss.findAllTask(this.searchForm,res=>{
      this.searchTask = res.result;
      this.page = res.result.length;
      this.arr_page_container=[];
      this.page_account=Math.ceil(this.page/this.page_container);
      for(let i=1;i<=this.page_account;i++)
      {
        this.arr_page_container.push(i);
      }
    })
  }

}
