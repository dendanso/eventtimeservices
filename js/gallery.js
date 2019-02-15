
var current_gal = 1;
var elementCount_gal = 3;
var value = 0;



$(document).ready(function(){

	//FEATURED GALLERY FUNCTIONS

	$('.feature_gal1').click(function(){

		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image1').css({'opacity':1});
		$('.gallery_image2').css({'opacity':value});
		$('.gallery_image3').css({'opacity':value});
		$('header').css({'opacity':value});
		

	});

	$('.feature_gal2').click(function(){
		current_gal=1;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image2').css({'opacity':1});
		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image3').css({'opacity':value});
		$('header').css({'opacity':value});
		current_gal++;

	});

	$('.feature_gal3').click(function(){
		current_gal=2;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image3').css({'opacity':1});
		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image2').css({'opacity':value});
		$('header').css({'opacity':value});




	});

	//MINI GALLERY FUNCTIONS

	$('.mini_image1').click(function(){

		$('.gallery_image1').css({'opacity':1});
		$('.gallery_image2').css({'opacity':value});
		$('.gallery_image3').css({'opacity':value});
		

	});

	$('.mini_image2').click(function(){
		current_gal=1;
		
		$('.gallery_image2').css({'opacity':1});
		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image3').css({'opacity':value});
		current_gal++;

	});

	$('.mini_image3').click(function(){
		current_gal=2;
		
		$('.gallery_image3').css({'opacity':1});
		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image2').css({'opacity':value});
		



	});

	$('.arrow_back').click(function(){
		if (current_gal < elementCount_gal) {

		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image2').css({'opacity':1});
		

			if (current_gal==2) {
				$('.gallery_image2').css({'opacity':value});
				$('.gallery_image3').css({'opacity':1});
			}
			current_gal++;
			console.log(current_gal);
		}else{

			current_gal=1;
			$('.gallery_image1').css({'opacity':1});
			$('.gallery_image2').css({'opacity':value});
			$('.gallery_image3').css({'opacity':value});
			

		}

		

	});

	$('.arrow_foward').click(function(){
		if (current_gal < elementCount_gal) {

		$('.gallery_image1').css({'opacity':value});
		$('.gallery_image3').css({'opacity':1});
		

			if (current_gal==2) {
				$('.gallery_image3').css({'opacity':value});
				$('.gallery_image2').css({'opacity':1});
			}
			current_gal++;
			console.log(current_gal);
		}else{

			current_gal=1;
			$('.gallery_image1').css({'opacity':1});
			$('.gallery_image2').css({'opacity':value});
			$('.gallery_image3').css({'opacity':value});


			

		}

		

	});




	$('.cross').click(function(){
		$('.gallery').removeClass('gallery_reveal');
		$('header').css({'opacity':1});
	});
});