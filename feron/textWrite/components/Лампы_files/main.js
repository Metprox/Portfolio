jQuery(document).ready(function($) {
	// Header
	$(window).scroll(function(){
		scrollHeader();
	})
	scrollHeader();
	function scrollHeader(){
		if($(window).width() > 768){
			var topOffsecMenu = 0;
		}else{
			var topOffsecMenu = 100;
		}

		if ( $(this).scrollTop() > topOffsecMenu ) {
			$('header').addClass('header-fix');
		} else {
			$('header').removeClass('header-fix');
		}
	}

	// Menu on desctiop
	$(".main_menu-link ").hover(function() {
	// 	$(this).css('background-color', $(this).data('cat_color'));
	if(!$("div").hasClass('hover_menu')){
		$("body").append('<div class="hover_menu"></div>');
	}
	// }, function() {
	// 	$(this).css('background-color', "#fff");

});
	$("html").on('mouseover', '.hover_menu', function(event) {
		event.preventDefault();
		$(".hover_menu").remove();
	});
	// $(".main_menu_child-link").hover(function() {
	// 	$(this).css('border-color', $(this).data('cat_color'));
	// }, function() {
	// 	$(this).css('border-color', "transparent");
	// });

	// Mobile Menu
	// $('#menu-toggle').click(function(){
	// 	$(this).toggleClass('open');
	// });

	$("section .tab_title:first-child").addClass("active").next(".tabs__content").addClass("active");

// Tabs
$('.tab_title').click(function(event) {
	$(this).addClass('active').siblings().removeClass('active');
	$(this).closest('section').find(".tabs__content").removeClass('active')
	$(this).next(".tabs__content").addClass('active');
});
// Modal Tabs
$('ul.modal_tab_list').on('click', 'li:not(.active)', function() {
	$(this).addClass('active').siblings().removeClass('active').closest('.modal').find('.modal_tab_content').removeClass('active').eq($(this).index()).addClass('active');
	return false;
});
// Tabs Product
$('ul.product_tab_list').on('click', 'li:not(.active)', function() {
	$(this).addClass('active').siblings().removeClass('active').closest('.product_tab').find('.product_tab_content').children('.tab-pane').removeClass('active').eq($(this).index()).addClass('active');
	return false;
});

// hide filter
$('.option-name').click(function(event) {
	$(this).toggleClass('in').next(".option-values").toggle(400);
});

$(".cart_checkbox").click(function(event) {
	if ($(this).is(':checked')) {
		$(this).closest('.panel-heading').next(".panel-collapse").slideDown('400');
	}else{
		$(this).closest('.panel-heading').next(".panel-collapse").slideUp('400');
	}
});

	//SEO text 
	var seo_height_all = $(".section_seo-text").height();
	var seo_height = $(".section_seo-text h2").height()+$(".section_seo-text p").height();
	$(".section_seo-text").height(seo_height);
	$(".svg_pluse").click(function(event) {
		$(".svg_pluse").addClass('pluse_open');
		var seo = $(".section_seo-text");

		seo.toggleClass('seo_text_open');
		if(seo.hasClass('seo_text_open')){
			seo.animate({
				height: seo_height_all},
				500);
		}else{
			seo.animate({
				height: seo_height},
				500);
		}
	});

	if($('div').hasClass('product_slider')){
		$('.product_slider').slick({
			speed: 300,
			slidesToScroll: 1,
			slidesToShow: 2,
			// variableWidth: true,
			swipe: false,
			refresh: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [
			{
				breakpoint: 1560,
				settings: {
					// slidesToShow: 2,
					// slidesToScroll: 2,
					// variableWidth: false,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					// slidesToShow: 2,
					// variableWidth: false,

				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					// variableWidth: false,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					// variableWidth: false,
					adaptiveHeight: true,
					swipe: false,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					// variableWidth: false,
					adaptiveHeight: true,
					fade: true,
				}
			}
			]
		});
	}
	// Show|Hide filters
	$(".show_all_filters").click(function(event) {
		$(this).text($(this).text() == $(this).data('show_all') ? $(this).data('hide_all') : $(this).data('show_all'));
		$(this).prev(".collapse").toggle(400);
	});

	
	// Product List
	$('#list-view').click(function() {
		$('#content .product-grid > .clearfix').remove();

		$('#content .row > .product-grid').attr('class', 'product-layout product-list');
		$('#grid-view').removeClass('active');
		$('#list-view').addClass('active');

		localStorage.setItem('display', 'list');
	});

	// Product Grid
	$('#grid-view').click(function() {
		$('#content .product-list').attr('class', 'product-layout product-grid');

		$('#list-view').removeClass('active');
		$('#grid-view').addClass('active');

		localStorage.setItem('display', 'grid');
	});

	if (localStorage.getItem('display') == 'list') {
		$('#list-view').trigger('click');
		$('#list-view').addClass('active');
	} else {
		$('#grid-view').trigger('click');
		$('#grid-view').addClass('active');
	}
});



// Cart add remove functions
var cart = {
	'add': function(product_id, quantity) {
		var quantity_val = $("[data-add_prod_id='"+product_id+"'").val() != 'undefined' ? $("[data-add_prod_id='"+product_id+"'").val() : 1;

		// return exit;
		$.ajax({
			url: 'index.php?route=checkout/cart/add',
			type: 'post',
			data: 'product_id=' + product_id + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : quantity_val),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				$('.alert, .text-danger').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					// $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					// Need to set timeout otherwise it wont update the total

					setTimeout(function () {
						$('#cart .countProducts').text(json['count']);
						$('#cart #cart-total').text(json['totalprice']);
					}, 100);

					// $('html, body').animate({ scrollTop: 0 }, 'slow');

					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'update': function(key, quantity) {
		$.ajax({
			url: 'index.php?route=checkout/cart/edit',
			type: 'post',
			data: 'key=' + key + '&quantity=' + (typeof(quantity) != 'undefined' ? quantity : 1),
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				// setTimeout(function () {
				// 	$('#cart > button').html('<span id="cart-total"><i class="fa fa-shopping-cart"></i> ' + json['total'] + '</span>');
				// }, 100);
				setTimeout(function () {
					$('#cart .countProducts').text(json['count']);
					$('#cart #cart-total').text(json['totalprice']);
				}, 100);
				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart .countProducts').text(json['count']);
					$('#cart #cart-total').text(json['totalprice']);
				}, 100);
				
				var now_location = String(document.location.pathname);

				if ((now_location == '/cart/') || (now_location == '/checkout/') || (getURLVar('route') == 'checkout/cart') || (getURLVar('route') == 'checkout/checkout')) {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}

var voucher = {
	'add': function() {

	},
	'remove': function(key) {
		$.ajax({
			url: 'index.php?route=checkout/cart/remove',
			type: 'post',
			data: 'key=' + key,
			dataType: 'json',
			beforeSend: function() {
				$('#cart > button').button('loading');
			},
			complete: function() {
				$('#cart > button').button('reset');
			},
			success: function(json) {
				// Need to set timeout otherwise it wont update the total
				setTimeout(function () {
					$('#cart .countProducts').text(json['count']);
					$('#cart #cart-total').text(json['totalprice']);
				}, 100);

				if (getURLVar('route') == 'checkout/cart' || getURLVar('route') == 'checkout/checkout') {
					location = 'index.php?route=checkout/cart';
				} else {
					$('#cart > ul').load('index.php?route=common/cart/info ul li');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	}
}

var wishlist = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=account/wishlist/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['redirect']) {
					location = json['redirect'];
				}

				if (json['success']) {
					// $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
				}

				$('#wishlist-total span').html(json['total']);
				$('#wishlist-total').attr('title', json['total']);

				// $('html, body').animate({ scrollTop: 0 }, 'slow');
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}

var compare = {
	'add': function(product_id) {
		$.ajax({
			url: 'index.php?route=product/compare/add',
			type: 'post',
			data: 'product_id=' + product_id,
			dataType: 'json',
			success: function(json) {
				$('.alert').remove();

				if (json['success']) {
					// $('#content').parent().before('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');

					$('#compare-total').html(json['total']);

					// $('html, body').animate({ scrollTop: 0 }, 'slow');
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
			}
		});
	},
	'remove': function() {

	}
}