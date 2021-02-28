

$(document).ready(function() {
		$menuLeft = $('.mobile-nav-1');
		$nav_list = $('#nav-button');
		$close = $('#mobile-nav-open > nav > ul > li > a');
		
		$nav_list.click(function() {
			$(this).toggleClass('active');
			$('.push-page').toggleClass('toright');
			$('.fixed').toggleClass('toright');
			$('.entry-page-image fixed').toggleClass('toright');
			$menuLeft.toggleClass('open');
		});
		
		$close.click(function() {
			$('.push-page').removeClass('toright');
			$('.fixed').removeClass('toright');
			$menuLeft.removeClass('open');
		});
		
			
	});
