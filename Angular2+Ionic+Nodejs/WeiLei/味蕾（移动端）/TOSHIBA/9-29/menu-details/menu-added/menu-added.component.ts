import {Component, OnInit} from '@angular/core';
import {MenuServiceService} from './../../services/menu-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-added',
  templateUrl: './menu-added.component.html',
  styleUrls: ['./menu-added.component.css'],
  providers: [MenuServiceService]
})
export class MenuAddedComponent implements OnInit {
  MenuLists: any;
  constructor(
    private route: ActivatedRoute,
    private MenuD: MenuServiceService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    const that = this;
    const val = that.route.snapshot.paramMap.get('val');
   // console.log(val+"1111111");
    that.MenuD.getMenuLists( val,function (result){
    //  console.log(result)
      if (result.length){
        that.MenuLists = result;
     //   console.log(that.MenuLists);
      }else {
      }
    });
  }
}
