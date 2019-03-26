import {Component, OnInit, Input} from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {GlobalPropertyService} from './../../services/global-property.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  providers: [MenuServiceService, GlobalPropertyService]
})
export class RecipeDetailsComponent implements OnInit {
  details: any;
  steps: any;
  _name: any;
  _cover_pic: any;
  _descripe: any;
  _cook_times: any;
  _collect_times: any;
  _create_time: any;
  _tips: any;
  _creater: any;
  _creater_id: any;
  flag: boolean;
  flagcollect: boolean;
  flagcollect1: boolean;

  constructor(private route: ActivatedRoute,
              private MenuD: MenuServiceService,
              private router: Router,
              private glo: GlobalPropertyService, ) {
  }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    that.MenuD.getDetails(val, function (result) {
     // console.log(result);
      if (result.length) {
        that.details = result;
        that._name = result[0].name;
        that._cover_pic = result[0].cover_pic;
        that._descripe = result[0].descripe;
        that._cook_times = result[0].cook_times;
        that._collect_times = result[0].collect_times;
        that._create_time = result[0].create_time;
        that._tips = result[0].tips;
        that._creater = result[0].creater;
        that._creater_id = result[0].creater_id;
        if (that._tips) that.flag = true;
        else that.flag = false;
      } else {
        that.router.navigate(['/index']);
      }
    });


    that.MenuD.getSteps(val, function (result) {
      if (result.length) {
        that.steps = result;
      } else {
        that.router.navigate(['/index']);
      }
    });

    const reciperid = that.route.snapshot.paramMap.get('val'); //菜谱id
    const userid = sessionStorage.getItem('ID'); //用户id
    that.MenuD.checkcollect(reciperid, userid, function (result) {
      if (result.stageCode == 1) {
        that.flagcollect = false;
      }
      else {
        that.flagcollect = true;
      }
      that.flagcollect1 = that.flagcollect;
    });
  }

  collect() {
    if(sessionStorage.getItem('ID')){
      const that = this;
      that.flagcollect1 = !that.flagcollect1;
    }else{
      if(confirm("你还没有登录，是否去登录？")){
        this.router.navigate(['/login']);
      }
    }
  }

  ngOnDestroy() {
    const that = this;
    const reciperid = that.route.snapshot.paramMap.get('val'); //菜谱id
    const userid = sessionStorage.getItem('ID');
    if (that.flagcollect != that.flagcollect1){
      if (that.flagcollect1){
        that.MenuD.uncollectRecipe(reciperid, userid, function (result) {});
      }else{
        that.MenuD.collectRecipe(reciperid, userid, function (result) {});
      }
    }
  }
}
