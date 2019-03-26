
//header 导航栏
var header = document.getElementById('header');
var new_scroll_position = 0;
var last_scroll_position;

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
});

//
// var headerlogo = document.getElementById('logo');
// var headerNav = document.getElementById('header_nav');
// headerNav.onclick = function (ev) {
//     if(ev.target.tagName.toLowerCase() == 'li'){
//         headerlogo.style.borderBottom = '#000';
//         headerlogo.setAttribute('box-sizing','');
//         var ul = ev.target.parentNode.parentNode.children;
//         console.log(ul+'----------------')
//         for(var item of ul){
//             console.log(item)
//             item.children[0].style.borderBottom = '';
//             item.children[0].style.boxSizing = '';
//         }
//         ev.target.style.borderBottom = 'solid 0.125em white';
//         ev.target.style.boxSizing = 'border-box';
//     }else {
//         return;
//     }
// }
// headerlogo.onclick = function () {
//     var li = headerNav.children[0].children;
//     for(var item of li){
//         item.style.borderBottom = '';
//         item.style.boxSizing = '';
//     }
//     headerlogo.style.borderBottom = 'solid 0.125em white';
//     headerlogo.style.boxSizing = 'border-box';
// }

