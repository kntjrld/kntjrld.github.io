$(document).ready(function () {

    $(window).scroll(function () {
        //ScrollY to > 20 to show sticky navigation bar  
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // fade in - slide down animation
        if(this.scrollY > 2600){
            $('.project-box').fadeIn();
            $('.project-link').slideDown(1000);
        }
    });

    //animation using jquery
    $('.text-3').hide(0).slideDown(1000);

    //nav bar script ==> open navigation
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //close navigation when onclick
    $('.menu').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //display skills section using onclick
    // $('.menu').click(function () {
    //     $('.skills').css('display', 'block');
    // });

});