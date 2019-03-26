import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-hairpin',
  templateUrl: './hairpin.component.html',
  styleUrls: ['./hairpin.component.css']
})
export class HairpinComponent implements OnInit {

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
