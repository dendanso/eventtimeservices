
var current = 1;
var elementCount = 3;
var value = 0;
var time = 8000;
var bannerTime = 2000;
var contentTime = 600;
var specTime = 250;




$(document).ready(function(){

	function slide(){

		if (current < elementCount) {

		$('.banner_img1').css({'opacity':1});
		$('.banner_img3').css({'opacity':value});

			if (current==2) {
				$('.banner_img2').css({'opacity':value});
			}else{
				$('.banner_img2').css({'opacity':'1'});
				$('.banner_img1').css({'opacity':value});
			}
			current++;
		}else
		{
			current=1;
			$('.banner_img3').css({'opacity':'1'});
			$('.banner_img1').css({'opacity':value});

		}
		

		

	};

	var replay = setInterval(slide,time);

	$('.arrow_down').click(function(){
		$('html').animate({
			scrollTop:$('.content').offset().top -150
		},bannerTime)
	});

	$('.arrow2').click(function(){


		if (current < elementCount) {
		
		$('.banner_img3').css({'opacity':value});
		$('.banner_img1').css({'opacity':1});

			if (current==2) {
				$('.banner_img2').css({'opacity':value});
			}else{
				$('.banner_img2').css({'opacity':'1'});
				$('.banner_img1').css({'opacity':value});
			}
			current++;
		}else
		{
			current=1;
			$('.banner_img3').css({'opacity':'1'});
			$('.banner_img1').css({'opacity':value});

		}

		
			clearInterval(replay);
			replay = setInterval(slide,time );




	});

	$('.arrow1').click(function(){

		if (current < elementCount) {

		
		$('.banner_img3').css({'opacity':value});
		$('.banner_img1').css({'opacity':value});

			if (current==2) {
				$('.banner_img2').css({'opacity':1});
			}else{
				$('.banner_img1').css({'opacity':'1'});
				$('.banner_img2').css({'opacity':value});
			}
			current++;
		}else
		{
			current=1;
			$('.banner_img3').css({'opacity':'1'});
			$('.banner_img2').css({'opacity':value});
			$('.banner_img1').css({'opacity':value});

		}

		
			clearInterval(replay);
			replay = setInterval(slide,time );

			console.log(current);




	});

	$('.plan').click(function(){
		$('.planning_content').toggleClass('plan_reveal');
		$('.plan').toggleClass('plan_button');
	});	

	$('.coordinate').click(function(){
		$('.coordinate_content').toggleClass('plan_reveal');
		$('.coordinate').toggleClass('coordinate_button');
	});	

	$('.style').click(function(){
		$('.styling_content').toggleClass('plan_reveal');
		$('.style').toggleClass('coordinate_button');
	});	

	$('.shoot').click(function(){
		$('.shoot_content').toggleClass('plan_reveal');
		$('.shoot').toggleClass('coordinate_button');
	});	

	$('.arrow_down2').click(function(){
		$('.specials_content').toggleClass('plan_reveal2');
		$('.arrow_down2').toggleClass('arrow_anim');
	});	

	$('.arrow_down2').click(function(){

		$('.spec_container').each(function(i){
			setTimeout(function(){
				$('.spec_container').eq(i).addClass('reveal')
			},specTime * (i+1));
		});

	});	

			

			//MENU CLICK FUNCTIONS

	$('.menu').click(function(){
		$('header').toggleClass('menu_reveal');
	});


			//SPECIAL SERVICES FUNCTIONS

	$(window).resize(function(){

		var window_width = $(window).width();
		var fig = false;

		if (window_width < 900) {
			
			$('.arrow_down2').click(function(){
				$('.specials_content h2').css({'text-align':'center'});




				if (!fig) {

					$('.specials_content').css({'height':'220vh'});

				}else{
					$('.specials_content').css({'height':'100px'});
				}
				fig=!fig;
			});


		}else{

		}

	});

	$(window).resize(function(){

		var window_width = $(window).width();
		var fig = false;
		var phones = false;

		if (window_width < 900) {
			
			$('.arrow_down2').click(function(){
				$('.specials_content h2').css({'text-align':'center'});
				



				if (!fig) {

					$('.specials_content').css({'height':'220vh'});

				}else{
					$('.specials_content').css({'height':'100px'});
				}
				fig=!fig;
			});


		}else{

		}


		if (window_width < 450) {
			
			$('.arrow_down2').click(function(){
				$('.specials_content').css({'overflow':'scroll'});
				$('.specials_content').animate({scrollTop:($('h2').offset().top-600 )
				},bannerTime);

				if (!phones) {

					$('.specials_content').css({'height':'50vh'});

				}else{
					$('.specials_content').css({'height':'120px'});
				}
				phones=!phones;
			});


		}else{

		}

	});



});
	
	
	


