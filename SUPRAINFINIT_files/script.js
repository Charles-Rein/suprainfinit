$(document).ready(function() {
	

/*active page(flip text)*/
    
	// active navbar
        $( '.' + page + ' > a' ).addClass("reverse");
        $( '.' + page ).css('display' , 'block');
        $('.' + underline).addClass("underline").parent().parent().css('display' , 'block');
        if(underline == 'no-underline')
        // $('#exhibition').css('display' , 'block');
        // $('.' + underline).parent().parent().addClass("open");
// slider image

        $('.image_container').height($('.jbox-container').height() - $('#gallery_header').height());


/* end active page(flip text)*/



function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var imageContainer = $('.image_container');
    var newHeight = $('.jbox-container').height() - $('#gallery_header').height();
    $(imageContainer).height(newHeight);
        


    /* Black Canvas Fix */        
        var xFactorNew = ( $(imageContainer).width() ? $(imageContainer).width() : width) / $(imageContainer).height();    
        
        var img = $('.image_container').find('img'); // Get my img elem
        var image = new Image();
        image.src = $(img).attr('src');
        var xFactorOriginal = image.naturalWidth / image.naturalHeight;
        if(xFactorNew < xFactorOriginal) {
            var marginTop = (newHeight - width / xFactorOriginal) / 2;
            $('.jbox-container img').css({
                'height' : 'auto', 
                'margin-top' : marginTop + 'px', //(($(img).parent().height() - $(img).height() ) / 2) + 'px',
                'width' : '100%',
            });
        }
        else   {
            $('.jbox-container img').css({
                'height' : '100%', 
                'margin-top' : '0',
                'width' : 'auto',
            });
        }
    /* END Black Canvas Fix */        
            
   
    if (width > 767) {

        

        
    }

    if (width > 767 && width < 1200) {
       
        
    }

    if (width < 767) {

    }

}

$(window).load(respResize);
$(window).bind('resize', function() {
           respResize();
        });




/*press text * /
$(".article_description").each(function() {
    var txt = $(this).text();
    if(txt.length > 120)
        $(this).text(txt.substring(0,115) + '.....');
});
/* end press */

/*Scroll to top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('#goTop').fadeIn();

        } else {
            $('#goTop').fadeOut();

        }
    });
    $('#goTop').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
/* end Scroll to top*/

});
// end document ready

