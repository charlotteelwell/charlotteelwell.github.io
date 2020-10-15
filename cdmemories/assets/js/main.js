$(document).ready(function(){
	console.log;

	$('.btn-box').click(function(){
		$('.box').addClass('active');
	});

	$('.btn-slide').click(function(){
		$('.slide').toggleClass('active');
	});	
 
 	$('.box').click(function(){
		$(this).toggleClass('active');
	});	

	$('.btn-eight').click(function(){
		$('.item').addClass('hide');
		$('.item.eight').removeClass('hide');
	});

	$('.btn-nine').click(function(){
		$('.item').addClass('hide');
		$('.item.nine').removeClass('hide');
	});

	$('.btn-zero').click(function(){
		$('.item').addClass('hide');
		$('.item.zero').removeClass('hide');
	});

	$('.btn-ten').click(function(){
		$('.item').addClass('hide');
		$('.item.ten').removeClass('hide');
	});

	$('.btn-reset').click(function(){
		$('.item').removeClass('hide');
	});

});