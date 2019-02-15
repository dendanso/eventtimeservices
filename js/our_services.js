
var yScroll = $(window).scrollTop();
var contentTime = 600;



$(window).scroll(function(){
	
	
	
	var wScroll = $(this).scrollTop() + 300;
	var formula = (wScroll + ($(".cont").offset().top )+ 200)/14;
	
	$('.banner_container').css({
	'background-size': ' '+ formula/1.095 + '%'

	
	
	});
	console.log(formula);

	if (yScroll > $('h2').offset().top - $(window).height()) {
		$('.cont').each(function(i){
			setTimeout(function(){
				$('.cont').eq(i).addClass('reveal')
			},contentTime * (i+1));
		});
	}

	
});

$(window).resize(function(){

	var width = $(window).width();

	if (width < 1601) {

	

	$(window).scroll(function(){

	var wScroll2 = $(this).scrollTop() + 300;
	var formula2 = (wScroll2 + ($(".cont").offset().top )+ 200)/8;
	
	$('.banner_container').css({
	'background-size': ' '+ formula2/1 + '%'

	});

	});

		if ( width == 600 || width < 600 ) {

			$(window).scroll(function(){

			var wScroll2 = $(this).scrollTop() + 300;
			var formula2 = (wScroll2 + ($(".cont").offset().top )+ 200)/5;
			
			$('.banner_container').css({
			'background-size': ' '+ formula2/1 + '%'

			});

	});

		}


	}else{

		
	formula2=0;
		$('.banner_container').css({
	'background-color': 'red',
	'background-size': 'cover'

	
	
	});

	$(window).scroll(function(){

	var wScroll = $(this).scrollTop() + 300;
	var formula = (wScroll + ($(".cont").offset().top )+ 200)/14;
	
	$('.banner_container').css({
	'background-size': ' '+ formula/1.095 + '%'

	
	
	});
	});

	}




});






	

