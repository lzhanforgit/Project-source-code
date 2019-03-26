import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  pic_arr : string [] = [
    'assets/images/class2.jpg',
    'assets/images/class3.jpg',
    'assets/images/class4.jpg',
    'assets/images/class5.png',
    'assets/images/class6.jpg',
    'assets/images/class7.jpg',
    'assets/images/class8.jpg',
  ]

  constructor() { }

  ngOnInit() {
  }

}
