import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  arr_company:string[]=[
    'assets/images/qiye1.jpg',
    'assets/images/qiye2.jpg',
    'assets/images/qiye3.jpg',
    'assets/images/qiye4.jpg',
    'assets/images/qiye5.jpg',
    'assets/images/qiye6.jpg',
    'assets/images/qiye7.jpg',
    'assets/images/qiye8.jpg',
    'assets/images/qiye9.jpg',
    'assets/images/qiye10.jpg',
    'assets/images/qiye11.jpg',
    'assets/images/qiye12.jpg',
    'assets/images/qiye13.jpg',
    'assets/images/qiye14.jpg',
    'assets/images/qiye15.jpg',
    'assets/images/qiye16.jpg',
    'assets/images/qiye17.jpg',
    'assets/images/qiye18.jpg'
  ]
  constructor() { }

  ngOnInit() {
  }

}
