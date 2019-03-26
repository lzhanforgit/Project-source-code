import { Component, OnInit } from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-referto-do',
  templateUrl: './referto-do.component.html',
  styleUrls: ['./referto-do.component.css'],
  providers: [MenuServiceService]
})
export class RefertoDoComponent implements OnInit {
  MenuWorks: any;
  length: any;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
    that.MenuD.getMenuWorks(val, function(result){
      /*console.log('1111');*/
      /*console.log(result);*/
      if (result.length){
        that.MenuWorks = result;
      }
      that.length = result.length;
     // console.log(that.MenuWorks);
    });
  }

}
