$(document).scroll(function(){
	if($('.product-sidebar').length) {
		if ($(this).scrollTop() > $('.sidebar-close').offset().top + 30) {
            $('.product-sidebar').addClass("sticky");
        } else {
            $('.product-sidebar').removeClass("sticky");
        }
	}

	if($('.service-form').length && $(document).width() < 768) {
		if ($(this).scrollTop() > $('.request-btn').offset().top + 30) {
            $('.close-form').addClass("sticky");
        } else {
            $('.close-form').removeClass("sticky");
        }
	}
});

$(document).ready(function(){
	$('header .menu a').on('click',function(){
		$('nav').removeClass('nav-closed');
		$('nav').addClass('nav-open');
		$('body').css('overflow','hidden');
		$(this).css('display','none');
		return false;
	});

	$('nav .menu a').on('click',function(){
		$('nav').addClass('nav-closed');
		$('nav').removeClass('nav-open');
		$('body').css('overflow','auto');
		$('header .menu a').css('display','block');
		return false;
	});

	$('.sidebar-close').on('click', function(){
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).find('span').html('Hide Side Menu');
			$('.product-right, .product-left').removeClass('expanded');
		}
		else {
			$(this).addClass('open');
			$(this).find('span').html('Show Side Menu');
			$('.product-right, .product-left').addClass('expanded');
		}
		
	});
	
	/*if($(document).width() > 768) {
		var h=0;
		if($('.related-products').length) {
			setTimeout(function(){
				$('.related-products img').each(function(){
					if($(this).height() > h) {
						h = $(this).height();
					}
				});
				$('.related-products .img-wrapper').css('height',h);
			}, 500);
			
		}
	}*/
	
/* being worked on by Vuejs
	$('.show-hide a.show-job').on('click',function(){
		$(this).parents('.vacancy-list-item').find('.details').slideDown();
		$(this).parents('.vacancy-list-item').addClass('active');
		$(this).parents('.vacancy-list-item').find('a.hide-job').css('display','block');
		$(this).css('display','none');
		return false;
	});
	$('.show-hide a.hide-job').on('click',function(){
		$(this).parents('.vacancy-list-item').find('.details').slideUp();
		$(this).parents('.vacancy-list-item').removeClass('active');
		$(this).css('display','none');
		$(this).parents('.vacancy-list-item').find('a.show-job').css('display','block');
		return false;
	});

	if($('.vacancy-list-item').length == 1 ) {
		$('.show-hide a.show-job').trigger('click');
	}
*/
	$('.product-switcher li a').on('click',function(){
		$('.product-switcher li a').removeClass('active');
		var imgSrc = $(this).attr('data-image');
		$(this).addClass('active');
		$('.product-switcher figure img')
	        .fadeOut(400, function() {
	            $('.product-switcher figure img').attr('src',imgSrc);
	        })
	        .fadeIn(400);
	});

	$('.service-form-btn a').on('click',function(){
		$(this).addClass('active');
		$(this).parent('.service-form-btn').next('.service-form').slideDown();
		$(this).parents('.service-forms-wrapper').addClass('active');
		$('.service-form-background').addClass('active');
		$("html, body").animate({ 
			scrollTop: $(this).offset().top-20 
		}, 1000);
	});

	$('.close-form').on('click',function(){
		$(this).parents('.service-forms-wrapper').find('.service-form-btn a').removeClass('active');
		$(this).parents('.service-forms-wrapper').find('.service-form').slideUp();
		$(this).parents('.service-forms-wrapper').removeClass('active');
		$('.service-form-background').removeClass('active');
		$("html, body").animate({ 
			scrollTop: $('.close-form').parents('.service-forms-wrapper').find('.service-form-btn a').offset().top-($(window).height()/2.5)
		}, 1000);
	});

	$('.service-form-background').on('click',function(){
		console.log('here');
		$('.request-btn.active, .quotation-btn.active').parent('.service-form-btn').next('.service-form').find('.close-form').click();
	});

	$('.search-item h4 a').on('click',function(){
		if($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).parents('.search-item').find('.search-item-files').slideUp();
		}
		else {
			$(this).addClass('open');
			$(this).parents('.search-item').find('.search-item-files').slideDown();
		}
		return false;
	});

	$('.list-item h4 a').on('click',function(){
		
		if($(this).parents('.list-item').hasClass('open')) {
			$(this).parents('.list-item').removeClass('open');
			$(this).parents('.list-item').find('.list-item-files').slideUp();
		}
		else {
			$('.list-item').removeClass('open');
			$('.list-item').find('.list-item-files').slideUp();

			$(this).parents('.list-item').addClass('open');
			$(this).parents('.list-item').find('.list-item-files').slideDown();
		}

		return false;
	});

	$('.scroll-top a').on('click', function(){
		$("html, body").animate({ scrollTop: "0" });
	});

	$('.service-form form .form-control').on('blur',function(){
		if($(this).val().length) {
			$(this).parent('.form-group').addClass('filled');
		}
		else {
			$(this).parent('.form-group').removeClass('filled');
		}

	})
	
	
});
$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        $('nav').addClass('nav-closed');
		$('nav').removeClass('nav-open');
		$('body').css('overflow','auto');
		$('header .menu a').css('display','block');
		return false;
    }
});