import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-new',
  templateUrl: './index-new.component.html',
  styleUrls: ['./index-new.component.css']
})
export class IndexNewComponent implements OnInit {

  constructor() { }

  liStart = [true,false,false,false];
  ngOnInit() {
  }

  liBack(e){

    // this.photoType = e+1;
    this.liStart[e] = true;
    // this.typeData.set('taskPhotoTypeId',this.photoType);
    // this.tss.findAllTask(this.typeData,res=>{
    //   let i = res.result.length;
    //   if(i>10){
    //     this.newTask = res.result.splice(i-10,i).reverse();
    //   }else {
    //     this.newTask = res.result.splice(0,i).reverse();
    //   }
    //   this.typeData.delete('photoType');
    // })
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
