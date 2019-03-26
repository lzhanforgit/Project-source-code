import { Component, OnInit } from '@angular/core';
import { PhotoNewService } from "../../service/photo-new.service";
// import { Router} from '@angular/router'; //导入router服务

@Component({
  selector: 'app-index-recommend',
  templateUrl: './index-recommend.component.html',
  styleUrls: ['./index-recommend.component.css'],
  providers: [PhotoNewService]
})
export class IndexRecommendComponent implements OnInit {

  allPhoto = [];
  photourls=[];
  pData = new FormData();
  constructor(
    private pns: PhotoNewService,
    // private router: Router
  ) { }

  ngOnInit() {
    this.pData.set('date','2017/12/10');
    this.pns.findNewPhoto(this.pData,res=> {
      this.allPhoto = res.photoList.splice(0,4);
      for(let i = 0;i<4;i++){
        this.photourls.push(this.allPhoto[i].photoUrl.split(',')[0]);
      }
    });
  }

  // details(photoId){
  //   this.router.navigateByUrl('details/'+photoId);
  // }

}
