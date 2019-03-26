import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-success',
  templateUrl: './add-success.component.html',
  styleUrls: ['./add-success.component.css']
})
export class AddSuccessComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    // window.history
  }

}
