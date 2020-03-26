jQuery(document).ready(function() {
			
    // switching display mode responsive and non-responsive
    var key = 'display_mode';
    var current = localStorage.getItem(key);
    if(current == 'responsive'){
        jQuery('#viewport').attr('content','width=device-width, initial-scale=1, shrink-to-fit=yes');
        jQuery('html').removeClass('non-responsive');
        jQuery('html').addClass('responsive');
        jQuery('#desktop-mode').removeClass('active');
        jQuery('#mobile-mode').addClass('active');
    }
    if(current == 'non-responsive'){
        jQuery('#viewport').attr('content','width=device-width, initial-scale=0, shrink-to-fit=yes');
        jQuery('html').removeClass('responsive');
        jQuery('html').addClass('non-responsive');
        jQuery('#mobile-mode').removeClass('active');
        jQuery('#desktop-mode').addClass('active');
    }
    var current_mode = localStorage.getItem(key);
    jQuery('#mobile-mode').on('click', function(){
        localStorage.setItem(key, 'responsive');
        location.reload();
    });
    jQuery('#desktop-mode').on('click', function(){
        localStorage.setItem(key, 'non-responsive');
        location.reload();
    });
    
    // action on responsive and mobile mode
    jQuery('.nav-button').on('click', function() {
        jQuery('.content').toggleClass('isOpen');
        jQuery(this).find(".nav-icon").toggleClass("oi-menu oi-x");
    });
    
    // adding html from desktop main nav to sm navabar
    jQuery('.sm-navbar ul').html(jQuery('.lg-main-nav ul').html());
    
    // collapse navbar
    jQuery(".collapse-navbar .menu-item-has-children").append("<span class='oi oi-chevron-bottom right'></span>");
    jQuery(".collapse-navbar .menu-item-has-children ul").hide();
    jQuery(".collapse-navbar .menu-item-has-children ul").parent(".current-menu-ancestor").find("ul").show();
    jQuery(".collapse-navbar .menu-item-has-children ul").parent(".current-menu-ancestor").find(".right").toggleClass("oi-chevron-top oi-chevron-bottom");
    jQuery(".collapse-navbar .menu-item-has-children span").click(function () {
        jQuery(this).parent(".menu-item-has-children").children("ul").slideToggle("slow");
        jQuery(this).parent(".menu-item-has-children").find(".right").toggleClass("oi-chevron-top oi-chevron-bottom");
    });
    
    // fix marquee to top 
    jQuery(document).on("scroll", function() {
        scroll = jQuery(document).scrollTop();
        height = jQuery("#lg-header").outerHeight() + 45;
        
        //console.log(scroll +'>='+height);
        if(scroll >= height){ 
            jQuery("#marquee").addClass("fix-top");
        }else{
            jQuery("#marquee").removeClass("fix-top");
        }
    });
    
    // slick slideshow
    jQuery(".slick-slideshow").slick({
        dots: true,
        speed: 500,
        autoplay: true,
        adaptiveHeight: true,
        mobileFirst: true,
        nextArrow: '<div class="slick-arrow slick-next"><span class="oi oi-chevron-right"></span></div>',
        prevArrow: '<div class="slick-arrow slick-prev"><span class="oi oi-chevron-left"></span></div>'
    });
    
    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        nextArrow: '<div class="slick-arrow slick-next"><span class="oi oi-chevron-right"></span></div>',
        prevArrow: '<div class="slick-arrow slick-prev"><span class="oi oi-chevron-left"></span></div>'
    });
    
    
    
    // hot for 1 day
    var hot = 1;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = yyyy+'/'+mm+'/'+dd;
    
    today = '2019/02/02'; //set temp cur date
    
    jQuery('.hot').each(function(){
        var post_date = jQuery(this).attr('post-date');
        var cur = new Date(today);
        var cur = new Date(today);
        var post = new Date(post_date);
        var timeDiff = Math.abs(cur.getTime() - post.getTime());
        var day = Math.ceil(timeDiff / (1000 * 3600 * 24));
        //console.log(day);
        if(day>hot){
            jQuery(this).attr('class','');
            if(day<7){
                jQuery(this).text('0'+day+' ថ្ងៃមុន');
            }else{
                if(day==7){
                    jQuery(this).text('1 សប្តាហ៍មុន');
                }else{
                    jQuery(this).attr('class','d-none');
                }
            }
        }
    });
    
    jQuery("ul.youtube-player").ytplaylist({
        addThumbs:true, 
        autoPlay: false, 
        playerWidth: '100%',
        playerHeight: '100%',
        thumbSize: 'large',
        showInline: true,
        start: 1
    });
});