import { Component, OnInit } from '@angular/core';


import { AddTaskComponent } from "./add-task/add-task.component";
import { AddSuccessComponent } from "./add-success/add-success.component";

@Component({
  selector: 'app-release-task',
  templateUrl: './release-task.component.html',
  styleUrls: ['./release-task.component.css']
})
export class ReleaseTaskComponent implements OnInit {

  showAdd = true;
  constructor() { }

  ngOnInit() {
  }

}
