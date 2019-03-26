import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( function() {

      $(".page_container").jumpto({

        firstLevel: "> h2",

        // secondLevel: "> h3"

      });

    });
  }

}
