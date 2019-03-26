import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-search',
  templateUrl: './drawer-search.component.html',
  styleUrls: ['./drawer-search.component.css']
})
export class DrawerSearchComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }
  arr = [1,2,3,4,5,6,7,8,9,10];

  contentClick(){
    let content = document.getElementById('content');
    let label = document.getElementById('label');
    content.style.background = '#007BFF';
    content.style.color = '#FFFFFF';
    label.style.background = '#F0F0F0';
    label.style.color = '#000000';
  }

  labelClick(){
    let content = document.getElementById('content');
    let label = document.getElementById('label');
    label.style.background = '#007BFF';
    label.style.color = '#FFFFFF';
    content.style.background = '#F0F0F0';
    content.style.color = '#000000';
  }
  //加载更多
  loadMoreMsg(){

  }
}
