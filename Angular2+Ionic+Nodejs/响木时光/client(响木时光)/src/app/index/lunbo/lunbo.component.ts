import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-lunbo',
  templateUrl: './lunbo.component.html',
  styleUrls: ['./lunbo.component.css']
})
export class LunboComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

    $("#modal-default").iziModal({
      title: "响木时光",
      subtitle: "欢迎加入响木时光，以下是关于教师课程服务的具体说明",
      iconClass: 'icon-announcement',
      width: 700,
      padding: 20
    });
    $(document).on('click', '.trigger-default', function (event) {
      event.preventDefault();
      $('#modal-default').iziModal('open');
    });
    $("#modal-large").iziModal({
      title: "温馨小提示",
      subtitle: "开始创作前，需要注意以下说明",
      iconClass: 'icon-chat',
      overlayColor: 'rgba(255, 255, 255, 0.4)',
      headerColor: '#334c7b',
      iconColor: '#00ffba',
      width: 700,
      padding: 20
    });
    $(document).on('click', '.trigger-large', function (event) {
      event.preventDefault();
      $('#modal-large').iziModal('open');
    });
    $(window).ready(function() {
      $('#visual').pignoseParallaxSlider({
        play    : '.btn-play',
        pause   : '.btn-pause',
        next    : '.btn-next',
        prev    : '.btn-prev'
      });
    });
  }
}
