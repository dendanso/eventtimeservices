$(document).scroll(function(){

	var yScroll = $(window).scrollTop();
	var opacity = Math.min(1, -(yScroll - ($(".banner_content").offset().top )) / (yScroll)/2);



	if (yScroll > $(".banner_img3").offset().top) {

		$(".banner_content").css({

			'opacity' :  opacity 

		});


	console.log(opacity);


	}

	if (yScroll > $('.content').offset().top - $(window).height()) {
		$('.cont').each(function(i){
			setTimeout(function(){
				$('.cont').eq(i).addClass('reveal')
			},contentTime * (i+1));
		});
	}

	$('.cont').css({

		'transform':'scale('+yScroll+'%)'
	});




});