$(document).ready(function(){

    $(window).scroll(function(){
    //ScrollY to > 20 to show sticky navigation bar  
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    //ScrollY to > 1800 to show skills section
        if(this.scrollY > 1800){
            $('.skills').css('display', 'block');
        }
    });

    //animation using jquery
    $('.text-3').hide(0).slideDown(1000);
    
    //nav bar script ==> open navigation
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    });
    //close navigation when onclick
    $('.menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active"); 
    });

    //display skills section
    $('.menu').click(function(){
        $('.skills').css('display', 'block');
    });
    
});