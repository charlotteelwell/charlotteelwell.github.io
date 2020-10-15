$(document).ready(function(){
	console.log('hello world');

	$('.btn-box').click(function(){
		$('.box').addClass('active');
	});

	$('.btn-slide').click(function(){
		$('.slide').addClass('active');
	});	
 
 	$('.box').click(function(){
		$(this).addClass('active');
	});	

	$('.btn-red').click(function(){
		$('.item').addClass('hide');
		$('.item.red').removeClass('hide');
	});

	$('.btn-shape').click(function(){
		$('.item').addClass('hide');
		$('.item.shape').removeClass('hide');
	});


	$('.btn-scan').click(function(){
		$('.item').addClass('hide');
		$('.item.scan').removeClass('hide');
	});


	$('.btn-magazine').click(function(){
		$('.item').addClass('hide');
		$('.item.magazine').removeClass('hide');
	});


	$('.btn-plan').click(function(){
		$('.item').addClass('hide');
		$('.item.plan').removeClass('hide');
	});


	$('.btn-reset').click(function(){
		$('.item').addClass('hide');
		$('.item.reset').removeClass('hide');
	});
});