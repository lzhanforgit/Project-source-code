import { Component, OnInit } from '@angular/core';
import {BackService} from './../services/back.service';
import {GlobalPropertyService} from './../services/global-property.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BackService]
})
export class AdminComponent implements OnInit {
  tab_index= 0;
  tabs= ['菜谱', '留言'];
  AllMessage:any;
  Allrecipes:any;
  index = 0;
  _content:any;
  constructor(
    private back: BackService,
    private glo: GlobalPropertyService,
  ) { }

  ngOnInit() {
    const that = this;
    this.glo.hiddenNavs = true;
    that.back.getAllmessage(function (reslut) {
      if (reslut.length) {
        that.AllMessage = reslut;
        // console.log(that.AllMessage)
      }
    });

    that.back.getAllrecipes(function (reslut) {
      if (reslut.length) {
        that.Allrecipes = reslut;
        // console.log(that.AllMessage)
      }
    });
  }
  delComment(id){
    const that = this;
    that.back.delComment(id, function (result) {
      // console.log(result);
      if (result.stageCode == 1) {
        that.back.getAllmessage(function (reslut) {
          if (reslut.length) {
            that.AllMessage = reslut;
          }
        });
      }else {
      }
    });
  }
  delRecipe(id){
    const that = this;
    that.back.delRecipe(id, function (result) {
      // console.log(result);
      if (result.stageCode == 1) {
        that.back.getAllrecipes(function (reslut) {
          if (reslut.length) {
            that.Allrecipes = reslut;
            // console.log(that.AllMessage)
          }
        });
      }else {
      }
    });
  }
  ngOnDestroy() {
    this.glo.hiddenNavs = false;
  }
}
