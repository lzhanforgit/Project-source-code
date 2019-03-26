import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  userId2 = this.route.snapshot.url.toString().split(',')[1];
  number=0;
  userId = localStorage.getItem('UD');

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.panduan()
  }

  panduan(){
    console.log(this.userId+"===="+this.route.snapshot.url.toString().split(',')[1]);
    if(this.userId != this.userId2){
      var shezi1=document.getElementById("shezhi");
      var xiaoxi=document.getElementById("xiaoxi");
      var dizhi=document.getElementById("dizhi");
      var mima=document.getElementById("mima");
      var yuegao=document.getElementById("yuegao");
      // console.log(id);
     shezi1.style.display='none';
      xiaoxi.style.display='none';
      dizhi.style.display='none';
      mima.style.display='none';
      yuegao.style.display='none';
    }

  }

  re(a){
    this.number=a;

  }

}
