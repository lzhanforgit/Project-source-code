function scrolladdclass(){
        $("#top_nav_control").addClass("top_nav_control_animate");
        $("#top_nav_control").addClass("all_animate");
        $("#gongGe_control").addClass("gongGe_control_animate");
        $("#gongGe_control").addClass("all_animate");
        $("#list_control").addClass("list_control_animate");
        $("#list_control").addClass("all_animate");
        $("#bottom_nav_control").addClass("bottom_nav_control_animate");
        $("#bottom_nav_control").addClass("all_animate");
        $("#team_exp_iphone").addClass("team_exp_iphone_img");
}
function scroolremoveclass(){
    $("#top_nav_control").removeClass("top_nav_control_animate");
    $("#top_nav_control").removeClass("all_animate");
    $("#gongGe_control").removeClass("gongGe_control_animate");
    $("#gongGe_control").removeClass("all_animate");
    $("#list_control").removeClass("list_control_animate");
    $("#list_control").removeClass("all_animate");
    $("#bottom_nav_control").removeClass("bottom_nav_control_animate");
    $("#bottom_nav_control").removeClass("all_animate");
    $("#team_exp_iphone").removeClass("team_exp_iphone_img");
}
function show_exam_img(clickIndex){
    $('#exam_img').empty();
    $('#exam_img').append('<div class="item active"> <div> <img src="../img/index-'+clickIndex+'-1.jpg"> </div> </div>')
    for(var i=2;i<4;i++){
        $('#exam_img').append('<div class="item"> <div> <img src="../img/index-'+clickIndex+'-'+i+'.jpg"> </div> </div>')
    }
}


function showtime(t) {
    document.myform.phone.disabled = true;
    for (i = 1; i <= t; i++) {
        window.setTimeout("update_p(" + i + "," + t + ")", i * 1000);
    }

}

function update_p(num, t) {
    if (num == t) {
        document.myform.phone.value = " 重新发送 ";
        document.myform.phone.disabled = false;
    }
    else {
        printnr = t - num;
        document.myform.phone.value = " (" + printnr + ")秒后重新发送";
    }
}


$(function() {
    $(window).scroll(function() {
            var steam = $("#screen_team").offset().top;//元素相对于窗口的距离
            var nscroll = $(window).scrollTop(); //监控窗口已滚动的距离;
            var fullscreen = $(document).height();//整个文档的高度
            var browserheight = $(window).height();//浏览器窗口的高度
            if (browserheight + nscroll > steam+200){
                scrolladdclass();
            }
            if (browserheight + nscroll > steam+1200) {
               scroolremoveclass();
            }
        }
    );
    show_exam_img(-1);
    $('#exa_list li').bind('click', function(){
        var clickIndex=$(this).index();
        show_exam_img(clickIndex)
    });

    $("#sign").hide(function () {
            $("#div_login").css('background-color', 'transparent');
        }
    );

    $("#div_login").click(function () {
        $("#sign").hide(function () {
                $("#div_login").css('background-color', 'transparent');
            }
        );
        $("#login").show(function () {
                $("#div_sign").css('background-color', '#fbb040');
            }
        );
        ;
    });
    $("#div_sign").click(function () {
        $("#sign").show(function () {
                $("#div_login").css('background-color', '#fbb040');
            }
        );
        $("#login").hide(function () {
                $("#div_sign").css('background-color', 'transparent');
            }
        );
    });
});
