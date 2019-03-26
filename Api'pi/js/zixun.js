$(function() {
    $('.tab-pane').hide();
    $('#relli0').fadeIn();
    var divid;
    var current_page = 4;
    var current_num = 1;
    var total_page;
    var total_q;

    $("#catalog").children('li').click(function() {
        divid = $(this).find('a').attr('did');
        $('.tab-pane').hide();
        $(divid).fadeIn();
        $('#catalog').children('li').removeClass('qa-nav-cat-item-selected');
        $(this).addClass('qa-nav-cat-item-selected');

        //current_num = 1;
        page(divid);
    });

    $('#mainwenda').children('li').each(function(i) {
        var ask = $(this).find('h3').html();
        var answer = $(this).find('p').html();
        var typ = $(this).attr('rel');
        var ul = $('#relli'+typ).children('ul').eq(0);
        ul.append('<li><div class="qa-q-list-item"><h3><span class="qa-ask">问</span>' + ask + '</h3><p><span class="qa-answer">答</span>'+ answer + '</p></div></li>');

        //所有的内容都放到relli0中：
        ul = $('#relli0').children('ul').eq(0);
        ul.append('<li><div class="qa-q-list-item"><h3><span class="qa-ask">问</span>' + ask + '</h3><p><span class="qa-answer">答</span>'+ answer + '</p></div></li>');
    });

    page('#relli0');
    divid = '#relli0';

    //数量设置：
    $(".all_total").text($("#relli0 ul li").length ); //所有分类
    $(".total1").text($("#relli1 ul li").length ); //基础建设
    $(".total2").text($("#relli2 ul li").length ); //自定义菜单
    $(".total3").text($("#relli3 ul li").length ); //微服务
    $(".total4").text($("#relli4 ul li").length ); //粉丝管理





    function page(divid) {
        $(divid +" li").show();
        $(divid +" li:gt(5)").hide();//初始化，前面【6】条数据显示，其他的数据隐藏。
        total_q=$(divid + " ul li").length;//总数据

        current_num=1;//当前页数
        total_page = Math.round(total_q/current_page);//总页数
        if (total_page == 0) {
            total_page = 1;
        }
        var next=$(".next1");//下一页
        var prev=$(".prev1");//上一页
        $(".total").text(total_page);//显示总页数
        $(".current_page").text(current_num);//当前的页数
    }

    //下一页
    $(".next1").click(function(){
        if(current_num==total_page){
            return false;//如果大于总页数就禁用下一页
        } else {
            $(".current_page").text(++current_num);//点击下一页的时候当前页数的值就加1
            $.each($(divid + " li"), function(index) {
                var start = current_page* (current_num-1);//起始范围
                var end = current_page * current_num;//结束范围
                if(index >= start && index < end){//如果索引值是在start和end之间的元素就显示，否则就隐
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });

        }
    });

    //上一页方法
    $(".prev1").click(function(){
        if(current_num==1){
            return false;
        }else{
            $(".current_page").text(--current_num);
            $.each($(divid + " li"),function(index,item) {
                var start = current_page* (current_num-1);//起始范围
                var end = current_page * current_num;//结束范围
                if(index >= start && index < end){//如果索引值是在start和end之间的元素就显示，否则就隐藏
                    $(this).show();
                }else {
                    $(this).hide();
                }
            });
        }

    });

});
