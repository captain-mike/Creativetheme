$(function(){
    
    $('.btn-container').on('click', function(){
        $('.navigation-bar').addClass('navigation-toggle');
    });
    
    $('.close-icon').on('click',function(){
        $('.navigation-bar').removeClass('navigation-toggle');
    })
    //svg resposnvie
    
    function resizeSvg(){
    var wW = jQuery(window).width();
    var cH = jQuery('.header-triangle').height();
        if( wW > 480){
            jQuery('.header-triangle svg polygon').attr('points','0,0 '+wW+',0 0,'+cH);
        }else{
            jQuery('.header-triangle svg polygon').attr('points','0,0 '+wW+',0 0,0');
        }
        
    };
    resizeSvg();
    jQuery(window).on('resize', function(){
        resizeSvg();
    });
    
    /*background items*/
    
    jQuery('.item').each(function(ind){
        var imgH = jQuery(this).children('.pics-wrapper').children.height();
        var imgW = jQuery(this).children('.pics-wrapper').children.width();
        var imgsrc = jQuery(this).children('.pics-wrapper').children.attr('src');
        jQuery(this).children('.pics-wrapper').append('<div class="item-bg"></div>');
        jQuery(this).children('.item-bg').css('height', imgH).css('width', imgW).css('background-image', 'url('+imgsrc+')');
        
        
    })
});