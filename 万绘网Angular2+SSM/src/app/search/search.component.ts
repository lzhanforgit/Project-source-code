import { Component, OnInit } from '@angular/core';
import { TaskSearchService } from '../service/task-search.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [TaskSearchService]
})
export class SearchComponent implements OnInit {


  flag = [false,true,false];

  photoList = [];
  taskList = [];
  drawerList = [];
  showData = [];
  selectType = ['风景画','素描','版画','油画','漫画','简笔画','国画','色彩'];
  num;

  /*双向绑定  搜索数据*/
  searchData;

  //分页
  page;
  page_index=1;
  page_account:number;
  page_container=4;
  arr_page_container=[];
  searchInput;
  constructor(
    private tss:TaskSearchService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.searchData == undefined || this.searchData == '' || this.searchData == null){
      this.searchInput = this.route.snapshot.paramMap.get('searchInput');
      this.searchData = this.searchInput;
    }
    this.search();
    this.show(this.searchData);
    this.page = this.showData.length;
    this.arr_page_container=[];
    this.page_account=Math.ceil(this.page/this.page_container);
    for(let i=1;i<=this.page_account;i++)
    {
      this.arr_page_container.push(i);
    }
  }


  show(data){
    switch (data){
      case 1:
        this.showData = this.photoList;
        this.flag = [true,false,false];
        break;
      case 2:
        this.showData = this.taskList;
        this.flag = [false,true,false];
        break;
      case 3:
        this.showData = this.drawerList;
        this.flag = [false,false,true];
        break;
    }
  }

  search(){
    let taskTypeData = new FormData();
    switch (this.searchData){
      case '风景画':
        this.num = '1';
        break;
      case '素描':
        this.num = '2';
        break;
      case '版画':
        this.num = '3';
        break;
      case '油画':
        this.num = '4';
        break;
      case '漫画':
        this.num = '5';
        break;
      case '简笔画':
        this.num = '6';
        break;
      case '国画':
        this.num = '7';
        break;
      case '色彩':
        this.num = '8';
        break;
      default:
        break;
    }
    if(this.num){
      taskTypeData.set('taskPhotoTypeId',this.num);
      this.tss.findAllTask(taskTypeData,res=>{
        if(res!=null){
          this.taskList = res.result;
          this.showData = this.taskList;

          this.page = this.showData.length;
          this.arr_page_container=[];
          this.page_account=Math.ceil(this.page/this.page_container);
          for(let i=1;i<=this.page_account;i++)
          {
            this.arr_page_container.push(i);
          }
        }
      })
    }else{
      this.taskList = null;
    }

    /*查询作品*/
    let photoData = new FormData();
    if(this.num){

    }
  }

}
