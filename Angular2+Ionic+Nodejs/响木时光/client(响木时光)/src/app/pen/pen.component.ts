import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.css']
})
export class PenComponent implements OnInit {

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
