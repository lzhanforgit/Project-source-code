import { Component, OnInit } from '@angular/core';
import {DrawerService} from "../service/drawer.service";
import {DetailsPhotoService} from "../service/details-photo.service";
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  providers:[DrawerService,DetailsPhotoService]
})
export class DrawerComponent implements OnInit {
  path:string='http://localhost:4200/';
  loadNum:number=10;
  constructor(private ds:DrawerService,private detailService:DetailsPhotoService) {
  }
  data = [];
  painterIdArr = [];
  loadData = [];
  ngOnInit() {
    this.findAllDrawerInfo();
  }

  follow(painterId){
    for(let i = 0;i < this.loadData.length;i++){
        if(this.loadData[i].painterId === painterId){
          let dgz = document.getElementById(this.loadData[i].user.userNikeName);
          if( this.loadData[i].gz === "关注"){
            this.loadData[i].gz = "已关注";
            dgz.style.background = "gray";
            // this.loadData[i].fans++;
            this.addRelationship(this.loadData[i].painterUserId);
            this.loadData[i].fans.push(1);
            this.painterIdArr.push(painterId);
          }
        }
      }

    }

  findAllDrawerInfo(){
    this.ds.findAllDrawerInfo(res=>{
      this.data = res.result;
      for(let i = 0;i < this.data.length;i++){
        this.data[i].gz = "关注";
        for(let j = 0;j < this.painterIdArr.length;j++){
          if(this.painterIdArr[j] === this.data[i].painterId){
            this.data[i].gz = "已关注";
          }
        }
        if(i < this.loadNum){
          this.loadData.push(this.data[i]);
        }
      }
    })
  }
  /*点击关注作者*/
  addRelationship(photoUserId){
    let data= new FormData();
    data.set("photoUserId",photoUserId);
    data.set("userId",localStorage.getItem("UD"));
    this.detailService.addRelationship(data,res=>
    {
     console.log(res.resultCode);
    })
  }

  loadMore(){
    this.loadData = [];
    this.loadNum+=2;
    this.findAllDrawerInfo();
  }

}
