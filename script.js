$(document).ready(function(){
    $('#menu').click(function()
    {
        $(this).toggleClass('fa-class');
        $('header').toggleClass('toggle')

    });

    $(window).on('scroll load' ,function(){
    
    $('menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    });

    $(window).on ('scroll load',function(){
        $('#menu').removeClass('fa-class');
        $('header').removeClass('toggle')


    })
});
