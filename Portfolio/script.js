$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        
        if(this.window = '.skills'){
            $('.html').toggleClass("htmlstart");
            $('.css').toggleClass("cssstart");
            $('.Javascript').toggleClass("javascriptstart");
            $('.jquery').toggleClass("jquerystart");
            $('.Sqlite').toggleClass("sqlitestart");
            $('.Microsoft').toggleClass("microsoftstart");
            $('.Access').toggleClass("accessstart");
            $('.Java').toggleClass("javastart");
            $('.NET').toggleClass("netstart");
            $('.C').toggleClass("cstart");
            $('.Python').toggleClass("pythonstart");
            $('.MySql').toggleClass("sqlstart");
        }
    });

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

});