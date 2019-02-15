var current_gallery = 1;
var elementCount_gallery = 6;
var value = 0;

$(document).ready(function(){

	//FEATURED GALLERY FUNCTIONS

	$('.gall1').click(function(){

		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':1});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		$('header').css({'opacity':value});
		

	});

	$('.gall2').click(function(){
		current_gallery=1;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':1});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		$('header').css({'opacity':value});
		current_gallery++;

	});

	$('.gall3').click(function(){
		current_gallery=2;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':1});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		$('header').css({'opacity':value});
		current_gallery++;


	});

	$('.gall4').click(function(){
		current_gal=3;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':1});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		$('header').css({'opacity':value});
		current_gallery++;


	});

	$('.gall5').click(function(){
		current_gal=4;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':1});
		$('.gallery_image-6').css({'opacity':value});
		$('header').css({'opacity':value});
		current_gallery++;


	});

	$('.gall6').click(function(){
		current_gal=5;
		$('.gallery').addClass('gallery_reveal');
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':1});
		$('header').css({'opacity':value});

	});

	//MINI GALLERY FUNCTIONS

	$('.mini_image1').click(function(){

		$('.gallery_image-1').css({'opacity':1});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		

	});

	$('.mini_image2').click(function(){
		current_gallery=1;
		
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':1});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});

		current_gallery++;

	});

	$('.mini_image3').click(function(){
		current_gallery=2;
		
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':1});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});

	$('.mini_image4').click(function(){
		current_gallery=3;
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':1});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':value});
		current_gallery++;

	});

	$('.mini_image5').click(function(){
		current_gallery=4;
		
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':1});
		$('.gallery_image-6').css({'opacity':value});
		current_gallery++;

	});

	$('.mini_image6').click(function(){
		current_gallery=5;
		
		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':value});
		$('.gallery_image-3').css({'opacity':value});
		$('.gallery_image-4').css({'opacity':value});
		$('.gallery_image-5').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':1});

	});
		


	//End of Mini Images


	});

	$('.arrow_back').click(function(){
		if (current_gallery < elementCount_gallery) {

		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-2').css({'opacity':1});
		

			if (current_gallery==2) {
				$('.gallery_image-2').css({'opacity':value});
				$('.gallery_image-3').css({'opacity':1});
			}

			if (current_gallery==3) {
				$('.gallery_image-3').css({'opacity':value});
				$('.gallery_image-4').css({'opacity':1});
				$('.gallery_image-2').css({'opacity':value});
			}

			if (current_gallery==4) {
				$('.gallery_image-4').css({'opacity':value});
				$('.gallery_image-5').css({'opacity':1});
				$('.gallery_image-2').css({'opacity':value});
			}
			if (current_gallery==5) {
				$('.gallery_image-5').css({'opacity':value});
				$('.gallery_image-6').css({'opacity':1});
				$('.gallery_image-2').css({'opacity':value});
			}
			current_gallery++;
			console.log(current_gallery);
			
		}else{

			current_gallery=1;
			$('.gallery_image-1').css({'opacity':1});
			$('.gallery_image-2').css({'opacity':value});
			$('.gallery_image-3').css({'opacity':value});
			$('.gallery_image-4').css({'opacity':value});
			$('.gallery_image-5').css({'opacity':value});
			$('.gallery_image-6').css({'opacity':value});
			
			

		}

		

	});

	$('.arrow_foward').click(function(){
		if (current_gallery < elementCount_gallery) {

		$('.gallery_image-1').css({'opacity':value});
		$('.gallery_image-6').css({'opacity':1});
		

			if (current_gallery==2) {
				$('.gallery_image-6').css({'opacity':value});
				$('.gallery_image-5').css({'opacity':1});
			}

			if (current_gallery==3) {
				$('.gallery_image-5').css({'opacity':value});
				$('.gallery_image-4').css({'opacity':1});
				$('.gallery_image-2').css({'opacity':value});
			}

			if (current_gallery==4) {
				$('.gallery_image-4').css({'opacity':value});
				$('.gallery_image-3').css({'opacity':1});
				$('.gallery_image-2').css({'opacity':value});
			}
			if (current_gallery==5) {
				$('.gallery_image-3').css({'opacity':value});
				$('.gallery_image-2').css({'opacity':1});
				
			}
			current_gallery++;
			console.log(current_gallery);
			
		}else{

			current_gallery=1;
			$('.gallery_image-1').css({'opacity':1});
			$('.gallery_image-2').css({'opacity':value});
			$('.gallery_image-3').css({'opacity':value});
			$('.gallery_image-4').css({'opacity':value});
			$('.gallery_image-5').css({'opacity':value});
			$('.gallery_image-6').css({'opacity':value});
			
			

		}

		

	});




	$('.cross').click(function(){
		$('.gallery').removeClass('gallery_reveal');
		$('header').css({'opacity':1});
	});
});