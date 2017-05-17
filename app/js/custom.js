$(function () {
	//	slider
	$('.slider').slick();

	//	skoda
	$('.btn-play').click(function () {
		var offset = $(this).closest('.video-wrap').offset().top;
		$('body,html').animate({
			scrollTop: offset
		}, 500);
		$(this).closest('.video-wrap').find('.video').fadeIn().get(0).play();
		$(this).closest('.video-wrap').find('.btn-close').fadeIn();

	});

	$('.btn-close').click(stopVid);

	$(".skoda")
		.mouseenter(function () {
			$('.skoda__nav').fadeToggle();
		})
		.mouseleave(function () {
			$('.skoda__nav').fadeToggle();
			stopVid();
		});
	$(".video-wrap")
		.mouseenter(function () {
			$(this).addClass('active');
			$(this).find('.btn-play').fadeIn();
		})
		.mouseleave(function () {
			$(this).removeClass('active');
			$(this).find('.btn-play').fadeOut();
		});

	function stopVid() {
		$('.video').removeClass('active');
		$('.btn-close').hide();
		$('.video').trigger('pause').fadeOut();
		$('.video').prop("currentTime", 0);
	}

	$(".video").bind("ended", function () {
		stopVid();
	});

	//  menu
	$('.cmn-toggle-switch__htx').click(function () {
		$(this).toggleClass('active');
		$('nav').slideToggle();
		$('.skoda__play').fadeIn();
	})

	//fancybox
	$('[data-fancybox]').fancybox({
		//		image: {
		//			protect: true
		//		}
	});
});