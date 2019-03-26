var result=document.getElementById("result");
var file=document.getElementById("file");
var imgclose=document.getElementById('img_close1');
var imgLi=document.getElementById('img_li');
var num=0;

function re1() {
  jQuery(function($){
    // Create variables (in this scope) to hold the API and image size
    var jcrop_api,
      boundx,
      boundy,

      // Grab some information about the preview pane
      $preview = $('#preview-pane'),
      $pcnt = $('#preview-pane .preview-container'),
      $pimg = $('#preview-pane .preview-container img'),

      xsize = $pcnt.width(),
      ysize = $pcnt.height();

    $('#target').Jcrop({
      onChange: updatePreview,
      onSelect: updatePreview,
      aspectRatio: xsize / ysize
    },function(){
      // Use the API to get the real image size
      var bounds = this.getBounds();
      boundx = bounds[0];
      boundy = bounds[1];
      // Store the API in the jcrop_api variable
      jcrop_api = this;

      // Move the preview into the jcrop container for css positioning
      $preview.appendTo(jcrop_api.ui.holder);
    });

    function updatePreview(c)
    {
      if (parseInt(c.w) > 0)
      {
        var rx = xsize / c.w;
        var ry = ysize / c.h;

        $pimg.css({
          width: Math.round(rx * boundx) + 'px',
          height: Math.round(ry * boundy) + 'px',
          marginLeft: '-' + Math.round(rx * c.x) + 'px',
          marginTop: '-' + Math.round(ry * c.y) + 'px'
        });
      }
    };
  });
}

function readAsDataURL(){
  var file = document.getElementById("file").files;
  var result=document.getElementById("result");
  var faceimg=document.getElementById('face_id');
  var reader    = new FileReader();
  reader.readAsDataURL(file[0]);
  if (num==0){
    reader.onload=function(e){
      var str='<li class="preview-item" id="img_li">'+
        '<img src="'+this.result+'" alt="" />'+
        '<img src="assets/images/zja/close.png" alt="11111" id="img_close3">'+
        '<span>封面君</span>'+
        '</li>'
      //多图预览
      result.innerHTML = result.innerHTML + str;
      num++;
      /*预览照片*/
      var  str2='<span>预览封面</span>'+
        '<div class="file_img_pane">'+
        '<img src="'+this.result+'" alt="target" id="target"/>'+
        '<div id="preview-pane">'+
        '<div class="preview-container">'+
        '<img src="'+this.result+'" class="jcrop-preview" />'+
        '</div>'+
        '</div>'+
        '</div>'

      faceimg.innerHTML+=str2;

    }
    faceimg.style.display='none';
  }else {
    reader.onload=function(e){
      var str='<li class="preview-item" id="img_li">'+
        '<img src="'+this.result+'" alt="" />'+
        '<img src="assets/images/zja/close.png" alt="11111" id="img_close3">'+
        '</li>'
      //多图预览
      result.innerHTML = result.innerHTML + str;
    }
    faceimg.style.display='block';
  }
  re1();
}
