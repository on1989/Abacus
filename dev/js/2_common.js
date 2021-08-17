jQuery(document).ready(function($){
	$(".search button").click(function(e){
		if($(this).parents('form').hasClass('open') === false){
			e.preventDefault();
			$(this).parents('form').toggleClass('open');
			$(this).parents('form').find('[type="text"],[type="search"]').focus();
		}
	});
	$('.search').mouseleave(function(){
		$(this).removeClass('open');
	});
	if($('.clients-slider').length){
		$('.clients-slider').slick({
			dots: true,
			speed: 300,
			slidesToShow: 7,
			slidesToScroll: 1,
			infinite: true,
			responsive: [{
				breakpoint: 1400,
				settings: {
					slidesToShow: 6,
				}
			},{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		});
	}
	if($('.team').length == 0){
		if($('.partners.slider').length){
			$('.partners.slider').slick({
				dots: false,
				speed: 300,
				slidesToShow: 7,
				slidesToScroll: 1,
				infinite: true,
				prevArrow:'<i class="icon-left"></i>',
				nextArrow:'<i class="icon-right"></i>',

				responsive: [{
					breakpoint: 1429,
					settings: {
						slidesToShow: 6,
					}
				},{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4,
					}
				},{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
					}
				},{
					breakpoint: 768,
					settings: {
						focusOnSelect:true,
						touchMove:true,
						arrows:false,
						swipeToSlide:true,
						slidesToShow: 3,

					}
				}]
			});
		}
	}
	if($('.team').length){
		$('.partners.slider').slick({
			dots: false,
			speed: 300,
			slidesToShow: 7,
			slidesToScroll: 1,
			infinite: true,
			prevArrow:'<i class="icon-left"></i>',
			nextArrow:'<i class="icon-right"></i>',
			responsive: [{
				breakpoint: 1429,
				settings: {
					slidesToShow: 6,
				}
			},{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},{
				breakpoint: 768,
				settings: "unslick"
			}]
		});
		if ($(window).width() < 768) {
			$('.team .partners').slick({
				responsive: [{
					breakpoint: 768,
					settings: {
						focusOnSelect:true,
						touchMove:true,
						arrows:false,
						swipeToSlide:true,
						slidesToShow: 2,
					}
				},{
					breakpoint: 480,
					settings: {
						focusOnSelect:true,
						touchMove:true,
						arrows:false,
						swipeToSlide:true,
						slidesToShow: 1,
					}
				}]
			});
		}else{
//			$('.team .partners:not(.slider)').slick('unslick')
		}

	}
	if($('.banner-team ').length){
		var imgWidth = $('.banner-team img').width(),
			windowWidth = $(window).width(),
			leftImg = (imgWidth - windowWidth) / 2;

		console.log(+leftImg)
		$('.banner-team .img').scrollLeft(leftImg)
	}
	if($('.team-slider').length){
		$('.team-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.team-photo',

		});
		$('.team-photo').slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			asNavFor: '.team-slider',
			prevArrow:'<i class="icon-left"></i>',
			nextArrow:'<i class="icon-right"></i>',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					dots:false,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots:false,
					centerMode: true,
					variableWidth: true,
					arrows:false
				}
			}]
		});
	}
	if($('.input.label input, .textarea.label textarea').length){
		$('.input.label input, .textarea.label textarea').focus(function(){
			$(this).parent().addClass('focus')
		})
		$('.input.label input, .textarea.label textarea').blur(function(){
			if($(this).val() == 0){
				$(this).parent().removeClass('focus')
			}
		});
		$('.input.label input, .textarea.label textarea').each(function(){
			if($(this).val() == 0){
				$(this).parent().removeClass('focus')
			}else{
				$(this).parent().addClass('focus')
			}
		});
	}
	if($('.content .news').length){
		console.log('yes')
		var posts = $('.content .post')
		for (var i = 0; i < posts.length; i += 2) {
			if (i < 1) {
				posts.slice(i, i + 1).wrapAll('<div class="left-block"></div>');
			}else if(i < 4){
				posts.slice(1, i + 3).wrapAll('<div class="right-block"></div>');
			}
		}
	}
	$('.burger-menu').click(function(){
		$(this).toggleClass('close');
		$('body').toggleClass('modal-open');
	});

});
