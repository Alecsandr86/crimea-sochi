//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    $(function() {
        $('.tabs-big-a .list-ferry-a').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs-big-a').find('.items').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

    $(function() {
        $('.tabs-min-a ul').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.tabs-min-a').find('.item').removeClass('active').eq($(this).index()).addClass('active');
        });

    });

});