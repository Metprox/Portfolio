(function($){
	$.et_pb_simple_kkslider = function(el, options) {
		var settings = $.extend( {
			slide         			: '.et_pb_slide',				 	// slide class
			arrows					: '.et-pb-slider-arrows',		// arrows container class
			prev_arrow				: '.et-pb-arrow-prev',			// left arrow class
			next_arrow				: '.et-pb-arrow-next',			// right arrow class
			controls 				: '.et-pb-controllers a',		// control selector
			carousel_controls 		: '.et_pb_kkcarousel_item',		// carousel control selector
			control_active_class	: 'et-pb-active-control',		// active control class name
			previous_text			: et_pb_custom.previous,			// previous arrow text
			next_text				: et_pb_custom.next,				// next arrow text
			fade_speed				: 500,							// fade effect speed
			use_arrows				: true,							// use arrows?
			use_controls			: true,							// use controls?
			manual_arrows			: '',							// html code for custom arrows
			append_controls_to		: '',							// controls are appended to the slider element by default, here you can specify the element it should append to
			controls_below			: false,
			controls_class			: 'et-pb-controllers',				// controls container class name
			slideshow				: false,						// automattic animation?
			slideshow_speed			: 7000,							// automattic animation speed
			show_progress_bar		: false,							// show progress bar if automattic animation is active
			tabs_animation			: false,
			use_carousel			: false
		}, options );

		var $et_slider 			= $(el),
			$et_slide			= $et_slider.find( settings.slide ),
			et_slides_number	= $et_slide.length,
			et_fade_speed		= settings.fade_speed,
			et_active_slide		= 0,
			$et_slider_arrows,
			$et_slider_prev,
			$et_slider_next,
			$et_slider_controls,
			$et_slider_carousel_controls,
			et_slider_timer,
			controls_html = '',
			carousel_html = '',
			$progress_bar = null,
			progress_timer_count = 0,
			$et_pb_container = $et_slider.find( '.et_pb_container' ),
			et_pb_container_width = $et_pb_container.width();

			$et_slider.et_animation_running = false;

			$.data(el, "et_pb_simple_kkslider", $et_slider);

			$et_slide.eq(0).addClass( 'et-pb-active-slide' );

			if ( ! settings.tabs_animation ) {
				if ( !$et_slider.hasClass('et_pb_bg_layout_dark') && !$et_slider.hasClass('et_pb_bg_layout_light') ) {
					$et_slider.addClass( et_get_bg_layout_color( $et_slide.eq(0) ) );
				}
			}

			if ( settings.use_arrows && et_slides_number > 1 ) {
				if ( settings.manual_arrows == '' )
					$et_slider.append( '<div class="et-pb-slider-arrows"><a class="et-pb-arrow-prev" href="#">' + '<span>' +settings.previous_text + '</span>' + '</a><a class="et-pb-arrow-next" href="#">' + '<span>' + settings.next_text + '</span>' + '</a></div>' );
				else
					$et_slider.append( settings.manual_arrows );

				$et_slider_arrows 	= $et_slider.find( settings.arrows );
				$et_slider_prev 	= $et_slider.find( settings.prev_arrow );
				$et_slider_next 	= $et_slider.find( settings.next_arrow );

				$et_slider_next.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( 'next' );

					return false;
				} );

				$et_slider_prev.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( 'previous' );

					return false;
				} );
			}

			if ( settings.use_controls && et_slides_number > 1 ) {
				for ( var i = 1; i <= et_slides_number; i++ ) {
					controls_html += '<a href="#"' + ( i == 1 ? ' class="' + settings.control_active_class + '"' : '' ) + '>' + i + '</a>';
				}

				controls_html =
					'<div class="' + settings.controls_class + '">' +
						controls_html +
					'</div>';

				if ( settings.append_controls_to == '' )
					$et_slider.append( controls_html );
				else
					$( settings.append_controls_to ).append( controls_html );

				if ( settings.controls_below )
					$et_slider_controls	= $et_slider.parent().find( settings.controls );
				else
					$et_slider_controls	= $et_slider.find( settings.controls );

				et_maybe_set_controls_color( $et_slide.eq(0) );

				$et_slider_controls.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					$et_slider.et_slider_move_to( $(this).index() );

					return false;
				} );
			}

			if ( settings.use_carousel && et_slides_number > 1 ) {
				for ( var i = 1; i <= et_slides_number; i++ ) {
					slide_id = i - 1;
					image_src = ( $et_slide.eq(slide_id).attr('data-car-img') ) ? 'url(' + $et_slide.eq(slide_id).attr('data-car-img') + ')' : 'none';
					carousel_html += '<div class="et_pb_kkcarousel_item ' + ( i == 1 ? settings.control_active_class : '' ) + '" data-slide-id="'+ slide_id +'">' +
						'<div class="et_pb_kkslide_overlay" href="#" style="background-image: ' + image_src + ';">' +
							'<div class="et_pb_kkslide_overlay_hover"><a href="#" class="et_pb_kkslide_icon"></a></div>' +
						'</div>' +
					'</div>';
				}

				carousel_html =
					'<div data-columns="' + settings.columns + '" class="et_pb_kkcarousel ">' +
					'<div class="et_pb_kkcarousel_items">' +
						carousel_html +
					'</div>' +
					'</div>';
				$et_slider.after( carousel_html );

				$et_slider_carousel_controls = $et_slider.siblings('.et_pb_kkcarousel').find( settings.carousel_controls );
				$et_slider_carousel_controls.click( function(){
					if ( $et_slider.et_animation_running )	return false;

					var $this = $(this);
					$et_slide.eq( $this.data('slide-id') ).find('.et_pb_kkslide_icon').css('display', 'none');
					$et_slider.et_slider_move_to( $this.data('slide-id') );

					return false;
				} );
			}

			if ( settings.slideshow && et_slides_number > 1 ) {
				$et_slider.hover( function() {
					$et_slider.addClass( 'et_slider_hovered' );

					if ( typeof et_slider_timer != 'undefined' ) {
						clearInterval( et_slider_timer );
					}
				}, function() {
					$et_slider.removeClass( 'et_slider_hovered' );

					et_slider_auto_rotate();
				} );
			}

			et_slider_auto_rotate();

			function et_slider_auto_rotate(){
				if ( settings.slideshow && et_slides_number > 1 && ! $et_slider.hasClass( 'et_slider_hovered' ) ) {
					et_slider_timer = setTimeout( function() {
						$et_slider.et_slider_move_to( 'next' );
					}, settings.slideshow_speed );
				}
			}

			function et_stop_video( active_slide ) {
				var $et_video, et_video_src;

				// if there is a video in the slide, stop it when switching to another slide
				if ( active_slide.has( 'iframe' ).length ) {
					$et_video = active_slide.find( 'iframe' );
					et_video_src = $et_video.attr( 'src' );

					$et_video.attr( 'src', '' );
					$et_video.attr( 'src', et_video_src );

				} else if ( active_slide.has( 'video' ).length ) {
					if ( !active_slide.find('.et_pb_section_video_bg').length ) {
						$et_video = active_slide.find( 'video' );
						$et_video[0].pause();
					}
				}
			}

			function et_fix_slider_content_images() {
				var $this_slider           = $et_slider,
					$slide_image_container = $this_slider.find( '.et-pb-active-slide .et_pb_slide_image' );
					$slide_video_container = $this_slider.find( '.et-pb-active-slide .et_pb_slide_video' );
					$slide                 = $slide_image_container.closest( '.et_pb_slide' ),
					$slider                = $slide.closest( '.et_pb_kkslider' ),
					slide_height           = $slider.innerHeight(),
					image_height           = parseInt( slide_height * 0.8 ),
					$top_header 		   = $('#top-header'),
					$main_header		   = $('#main-header'),
					$et_transparent_nav    = $( '.et_transparent_nav' ),
					$et_vertical_nav 	   = $('.et_vertical_nav');

				$slide_image_container.find( 'img' ).css( 'maxHeight', image_height + 'px' );

				if ( $slide.hasClass( 'et_pb_media_alignment_center' ) ) {
					$slide_image_container.css( 'marginTop', '-' + parseInt( $slide_image_container.height() / 2 ) + 'px' );
				}

				$slide_video_container.css( 'marginTop', '-' + parseInt( $slide_video_container.height() / 2 ) + 'px' );

				$slide_image_container.find( 'img' ).addClass( 'active' );
			}

			function et_get_bg_layout_color( $slide ) {
				if ( $slide.hasClass( 'et_pb_bg_layout_dark' ) ) {
					return 'et_pb_bg_layout_dark';
				}

				return 'et_pb_bg_layout_light';
			}

			function et_maybe_set_controls_color( $slide ) {
				var next_slide_dot_color,
					$arrows,
					arrows_color;

				if ( typeof $et_slider_controls !== 'undefined' && $et_slider_controls.length ) {
					next_slide_dot_color = $slide.data( 'dots_color' ) || '';

					if ( next_slide_dot_color !== '' ) {
						$et_slider_controls.attr( 'style', 'background-color: ' + hex_to_rgba( next_slide_dot_color, '0.3' ) + ';' )
						$et_slider_controls.filter( '.et-pb-active-control' ).attr( 'style', 'background-color: ' + hex_to_rgba( next_slide_dot_color ) + '!important;' );
					} else {
						$et_slider_controls.removeAttr( 'style' );
					}
				}

				if ( typeof $et_slider_arrows !== 'undefined' && $et_slider_arrows.length ) {
					$arrows      = $et_slider_arrows.find( 'a' );
					arrows_color = $slide.data( 'arrows_color' ) || '';

					if ( arrows_color !== '' ) {
						$arrows.css( 'color', arrows_color );
					} else {
						$arrows.css( 'color', 'inherit' );
					}
				}
			}

			function hex_to_rgba( color, alpha ) {
				var color_16 = parseInt( color.replace( '#', '' ), 16 ),
					red      = ( color_16 >> 16 ) & 255,
					green    = ( color_16 >> 8 ) & 255,
					blue     = color_16 & 255,
					alpha    = alpha || 1,
					rgba;

				rgba = red + ',' + green + ',' + blue + ',' + alpha;
				rgba = 'rgba(' + rgba + ')';

				return rgba;
			}

			$(window).load( function() {
				et_fix_slider_content_images();



			} );

			$(window).resize( function() {
				et_fix_slider_content_images();
			} );

			$et_slider.et_slider_move_to = function ( direction ) {
				var $active_slide = $et_slide.eq( et_active_slide ),
					$next_slide;

				$et_slider.et_animation_running = true;

				if ( direction == 'next' || direction == 'previous' ){

					if ( direction == 'next' )
						et_active_slide = ( et_active_slide + 1 ) < et_slides_number ? et_active_slide + 1 : 0;
					else
						et_active_slide = ( et_active_slide - 1 ) >= 0 ? et_active_slide - 1 : et_slides_number - 1;

				} else {

					if ( et_active_slide == direction ) {
						$et_slider.et_animation_running = false;
						return;
					}

					et_active_slide = direction;

				}

				if ( typeof et_slider_timer != 'undefined' )
					clearInterval( et_slider_timer );

				$next_slide	= $et_slide.eq( et_active_slide );

				$et_slide.each( function(){
					$(this).css( 'zIndex', 1 );
				} );
				$active_slide.css( 'zIndex', 2 ).removeClass( 'et-pb-active-slide' );
				$next_slide.css( { 'display' : 'block', opacity : 0 } ).addClass( 'et-pb-active-slide' );

				et_fix_slider_content_images();

				if ( settings.use_controls )
					$et_slider_controls.removeClass( settings.control_active_class ).eq( et_active_slide ).addClass( settings.control_active_class );

				if ( settings.use_carousel ) {

					$et_slider_carousel_controls.removeClass( settings.control_active_class ).eq( et_active_slide ).addClass( settings.control_active_class ); }

				if ( ! settings.tabs_animation ) {
					et_maybe_set_controls_color( $next_slide );

					$next_slide.animate( { opacity : 1 }, et_fade_speed );
					$active_slide.addClass( 'et_slide_transition' ).css( { 'display' : 'list-item', 'opacity' : 1 } ).animate( { opacity : 0 }, et_fade_speed, function(){
						var active_slide_layout_bg_color = et_get_bg_layout_color( $active_slide ),
							next_slide_layout_bg_color = et_get_bg_layout_color( $next_slide );

						$(this).css('display', 'none').removeClass( 'et_slide_transition' );

						et_stop_video( $active_slide );

						$et_slider
							.removeClass( active_slide_layout_bg_color )
							.addClass( next_slide_layout_bg_color );

						$et_slider.et_animation_running = false;
					} );
				} else {
					$next_slide.css( { 'display' : 'none', opacity : 0 } );

					$active_slide.addClass( 'et_slide_transition' ).css( { 'display' : 'block', 'opacity' : 1 } ).animate( { opacity : 0 }, et_fade_speed, function(){
						$(this).css('display', 'none').removeClass( 'et_slide_transition' );

						$next_slide.css( { 'display' : 'block', 'opacity' : 0 } ).animate( { opacity : 1 }, et_fade_speed, function() {
							$et_slider.et_animation_running = false;
						} );
					} );
				}

				et_slider_auto_rotate();
			}
	}

	$.fn.et_pb_simple_kkslider = function( options ) {
		return this.each(function() {
			new $.et_pb_simple_kkslider(this, options);
		});
	}
	
	$.et_pb_simple_kkcarousel = function(el, options) {
		var settings = $.extend( {
			slide_duration	: 500,
		}, options );

		var $et_carousel 			= $(el),
			$carousel_items 		= $et_carousel.find('.et_pb_kkcarousel_items'),
			$the_carousel_items 	= $carousel_items.find('.et_pb_kkcarousel_item');
//alert('finding carousel items ' + $carousel_items.length + '\nfinding slides ' + $the_carousel_items.length);
//alert('height of slide ' + $the_carousel_items.height());
		$et_carousel.et_animation_running = false;

		$et_carousel.addClass('container-width-change-notify').on('containerWidthChanged', function( event ){
			set_carousel_columns( $et_carousel );
			set_carousel_height( $et_carousel );
		});

		$carousel_items.data('items', $the_carousel_items.toArray() );
		$et_carousel.data('columns_setting_up', false );

		$carousel_items.prepend('<div class="et-pb-slider-arrows"><a class="et-pb-slider-arrow et-pb-arrow-prev" href="#">' + '<span>' + et_pb_custom.previous + '</span>' + '</a><a class="et-pb-slider-arrow et-pb-arrow-next" href="#">' + '<span>' + et_pb_custom.next + '</span>' + '</a></div>');

		set_carousel_columns( $et_carousel );
//alert('calling set_carousel_height');
		set_carousel_height( $the_carousel_items );

		$et_carousel_next 	= $et_carousel.find( '.et-pb-arrow-next' );
		$et_carousel_prev 	= $et_carousel.find( '.et-pb-arrow-prev'  );

		$et_carousel_next.click( function(){
			if ( $et_carousel.et_animation_running ) return false;

			$et_carousel.et_carousel_move_to( 'next' );

			return false;
		} );

		$et_carousel_prev.click( function(){
			if ( $et_carousel.et_animation_running ) return false;

			$et_carousel.et_carousel_move_to( 'previous' );

			return false;
		} );

		function set_carousel_height( $the_carousel_items ) {
			var carousel_items_width = $the_carousel_items.width(),
				carousel_items_height = $the_carousel_items.height();
                        if(carousel_items_height > 0) {
			$carousel_items.css('height', carousel_items_height + 'px' );
                        } else {
			$carousel_items.css('height', 'auto' );
                        }
		}

		function set_carousel_columns( $the_carousel ) {
			var columns,
				$carousel_parent = $the_carousel.parents('.et_pb_column, .et_pb_fullwidth_section'),
				carousel_items_width = $carousel_items.width(),
				carousel_item_count = $the_carousel_items.length;
//alert($carousel_parent.length);

			if ( $carousel_parent.hasClass('et_pb_column_4_4') || $carousel_parent.hasClass('et_pb_column_3_4') || $carousel_parent.hasClass('et_pb_column_2_3') || $carousel_parent.hasClass('et_pb_section') ) {
				if ( $(window).width() < 768 ) {
					columns = 3;
				} else {
					columns = settings.columns;
				}
			} else if ( $carousel_parent.hasClass('et_pb_column_1_2') || $carousel_parent.hasClass('et_pb_column_3_8') || $carousel_parent.hasClass('et_pb_column_1_3') ) {
				columns = 3;
			} else if ( $carousel_parent.hasClass('et_pb_column_1_4') ) {
				if ( $(window).width() > 480 && $(window).width() < 980 ) {
					columns = 3;
				} else {
					columns = 2;
				}
			}

			if ( columns === $carousel_items.data('columns') ) {
				return;
			}

			if ( $the_carousel.data('columns_setting_up') ) {
				return;
			}

			$the_carousel.data('columns_setting_up', true );

			// store last setup column
			$carousel_items.removeClass('columns-' + $carousel_items.data('columns') );
			$carousel_items.addClass('columns-' + columns );
			$carousel_items.data('columns', columns );

			// kill all previous groups to get ready to re-group
			if ( $carousel_items.find('.et-carousel-group').length ) {
				$the_carousel_items.appendTo( $carousel_items );
				$carousel_items.find('.et-carousel-group').remove();
			}

			// setup the grouping
			var the_carousel_items = $carousel_items.data('items'),
				$carousel_group = $('<div class="et-carousel-group active">').appendTo( $carousel_items );

			$the_carousel_items.data('position', '');
			if ( the_carousel_items.length <= columns ) {
				$carousel_items.find('.et-pb-slider-arrows').hide();
			} else {
				$carousel_items.find('.et-pb-slider-arrows').show();
			}

			for ( position = 1, x=0 ;x < the_carousel_items.length; x++, position++ ) {
				if ( x < columns ) {
					$( the_carousel_items[x] ).show();
					$( the_carousel_items[x] ).appendTo( $carousel_group );
					$( the_carousel_items[x] ).data('position', position );
					$( the_carousel_items[x] ).addClass('position_' + position );
				} else {
					position = $( the_carousel_items[x] ).data('position');
					$( the_carousel_items[x] ).removeClass('position_' + position );
					$( the_carousel_items[x] ).data('position', '' );
					$( the_carousel_items[x] ).hide();
				}
			}

			$the_carousel.data('columns_setting_up', false );

		} /* end set_carousel_columns() */

		$et_carousel.et_carousel_move_to = function ( direction ) {
			var $active_carousel_group 	= $carousel_items.find('.et-carousel-group.active'),
				items 					= $carousel_items.data('items'),
				columns 				= $carousel_items.data('columns');

			$et_carousel.et_animation_running = true;

			var left = 0;
			$active_carousel_group.children().each(function(){
				$(this).css({'position':'absolute', 'left': left });
				left = left + $(this).outerWidth(true);
			});

			if ( direction == 'next' ) {
				var $next_carousel_group,
					current_position = 1,
					next_position = 1,
					active_items_start = items.indexOf( $active_carousel_group.children().first()[0] ),
					active_items_end = active_items_start + parseInt(columns),
					next_items_start = active_items_end,
					next_items_end = next_items_start + parseInt(columns);
//alert("active items start: " + active_items_start);
//alert( "active items end: " + active_items_end);

				$next_carousel_group = $('<div class="et-carousel-group next" style="display: none;left: 100%;position: absolute;top: 0;">').insertAfter( $active_carousel_group );
				$next_carousel_group.css({ 'width': $active_carousel_group.innerWidth() }).show();
//alert("the next carousel group");

				// this is an endless loop, so it can decide internally when to break out, so that next_position
				// can get filled up, even to the extent of an element having both and current_ and next_ position
				for( x = 0, total = 0 ; ; x++, total++ ) {
					if ( total >= active_items_start && total < active_items_end ) {
						$( items[x] ).addClass( 'changing_position current_position current_position_' + current_position );
						$( items[x] ).data('current_position', current_position );
						current_position++;
					}

					if ( total >= next_items_start && total < next_items_end ) {
						$( items[x] ).data('next_position', next_position );
						$( items[x] ).addClass('changing_position next_position next_position_' + next_position );

						if ( !$( items[x] ).hasClass( 'current_position' ) ) {
							$( items[x] ).addClass('container_append');
						} else {
							$( items[x] ).clone(true).appendTo( $active_carousel_group ).hide().addClass('delayed_container_append_dup').attr('id', $( items[x] ).attr('id') + '-dup' );
							$( items[x] ).addClass('delayed_container_append');
						}

						next_position++;
					}

					if ( next_position > columns ) {
						break;
					}

					if ( x >= ( items.length -1 )) {
						x = -1;
					}
				}
//alert("before sorted");

				var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort(function (a, b) {
					var el_a_position = parseInt( $(a).data('next_position') );
					var el_b_position = parseInt( $(b).data('next_position') );
					return ( el_a_position < el_b_position ) ? -1 : ( el_a_position > el_b_position ) ? 1 : 0;
				});

				$( sorted ).show().appendTo( $next_carousel_group );

				var left = 0;
				$next_carousel_group.children().each(function(){
					$(this).css({'position':'absolute', 'left': left });
					left = left + $(this).outerWidth(true);
				});
//alert("after sorted");

				$active_carousel_group.animate({
					left: '-100%'
				}, {
					duration: settings.slide_duration,
					complete: function() {
						$carousel_items.find('.delayed_container_append').each(function(){
							left = $( '#' + $(this).attr('id') + '-dup' ).css('left');
							$(this).css({'position':'absolute', 'left': left });
							$(this).appendTo( $next_carousel_group );
						});

						$active_carousel_group.removeClass('active');
						$active_carousel_group.children().each(function(){
							position = $(this).data('position');
							current_position = $(this).data('current_position');
							$(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position );
							$(this).data('position', '');
							$(this).data('current_position', '');
							$(this).hide();
							$(this).css({'position': '', 'left': ''});
							$(this).appendTo( $carousel_items );
						});

						$active_carousel_group.remove();

					}
				} );
//alert("after animation out");

				next_left = $active_carousel_group.width() + parseInt( $the_carousel_items.first().css('marginRight').slice(0, -2) );
				$next_carousel_group.addClass('active').css({'position':'absolute', 'top':0, left: next_left });
//alert("before animation in");

				$next_carousel_group.animate({
					left: '0%'
				}, {
					duration: settings.slide_duration,
					complete: function(){
						$next_carousel_group.removeClass('next').addClass('active').css({'position':'', 'width':'', 'top':'', 'left': ''});
//alert("finding changing position");
						$next_carousel_group.find('.changing_position').each(function( index ){
							position = $(this).data('position');
							current_position = $(this).data('current_position');
							next_position = $(this).data('next_position');
							$(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' next_position next_position_' + next_position );
							$(this).data('current_position', '');
							$(this).data('next_position', '');
							$(this).data('position', ( index + 1 ) );
						});
//alert("found changing position");
						$next_carousel_group.children().css({'position': '', 'left': ''});
						$next_carousel_group.find('.delayed_container_append_dup').remove();

						$et_carousel.et_animation_running = false;
					}
				} );

			} else if ( direction == 'previous' ) {
				var $prev_carousel_group,
					current_position = columns,
					prev_position = columns,
					columns_span = columns - 1,
					active_items_start = items.indexOf( $active_carousel_group.children().last()[0] ),
					active_items_end = active_items_start - columns_span,
					prev_items_start = active_items_end - 1,
					prev_items_end = prev_items_start - columns_span;
//alert("active_items_start: " + active_items_start + "\nactive items end: " + active_items_end);

				$prev_carousel_group = $('<div class="et-carousel-group prev" style="display: none;left: 100%;position: absolute;top: 0;">').insertBefore( $active_carousel_group );
				$prev_carousel_group.css({ 'left': '-' + $active_carousel_group.innerWidth(), 'width': $active_carousel_group.innerWidth() }).show();

				// this is an endless loop, so it can decide internally when to break out, so that next_position
				// can get filled up, even to the extent of an element having both and current_ and next_ position
				for( x = ( items.length - 1 ), total = ( items.length - 1 ) ; ; x--, total-- ) {

					if ( total <= active_items_start && total >= active_items_end ) {
						$( items[x] ).addClass( 'changing_position current_position current_position_' + current_position );
						$( items[x] ).data('current_position', current_position );
						current_position--;
					}

					if ( total <= prev_items_start && total >= prev_items_end ) {
						$( items[x] ).data('prev_position', prev_position );
						$( items[x] ).addClass('changing_position prev_position prev_position_' + prev_position );

						if ( !$( items[x] ).hasClass( 'current_position' ) ) {
							$( items[x] ).addClass('container_append');
						} else {
							$( items[x] ).clone(true).appendTo( $active_carousel_group ).addClass('delayed_container_append_dup').attr('id', $( items[x] ).attr('id') + '-dup' );
							$( items[x] ).addClass('delayed_container_append');
						}

						prev_position--;
					}

					if ( prev_position <= 0 ) {
						break;
					}

					if ( x == 0 ) {
						x = items.length;
					}
				}
//alert("before sorted");
				var sorted = $carousel_items.find('.container_append, .delayed_container_append_dup').sort(function (a, b) {
					var el_a_position = parseInt( $(a).data('prev_position') );
					var el_b_position = parseInt( $(b).data('prev_position') );
					return ( el_a_position < el_b_position ) ? -1 : ( el_a_position > el_b_position ) ? 1 : 0;
				});

				$( sorted ).show().appendTo( $prev_carousel_group );
//alert("after sorted");
				var left = 0;
				$prev_carousel_group.children().each(function(){
					$(this).css({'position':'absolute', 'left': left });
					left = left + $(this).outerWidth(true);
				});

				$active_carousel_group.animate({
					left: '100%'
				}, {
					duration: settings.slide_duration,
					complete: function() {
						$carousel_items.find('.delayed_container_append').reverse().each(function(){
							left = $( '#' + $(this).attr('id') + '-dup' ).css('left');
							$(this).css({'position':'absolute', 'left': left });
							$(this).prependTo( $prev_carousel_group );
						});

						$active_carousel_group.removeClass('active');
						$active_carousel_group.children().each(function(){
							position = $(this).data('position');
							current_position = $(this).data('current_position');
							$(this).removeClass('position_' + position + ' ' + 'changing_position current_position current_position_' + current_position );
							$(this).data('position', '');
							$(this).data('current_position', '');
							$(this).hide();
							$(this).css({'position': '', 'left': ''});
							$(this).appendTo( $carousel_items );
						});

						$active_carousel_group.remove();
					}
				} );

				prev_left = (-1) * $active_carousel_group.width() - parseInt( $the_carousel_items.first().css('marginRight').slice(0, -2) );
				$prev_carousel_group.addClass('active').css({'position':'absolute', 'top':0, left: prev_left });

				$prev_carousel_group.animate({
					left: '0%'
				}, {
					duration: settings.slide_duration,
					complete: function(){
						$prev_carousel_group.removeClass('prev').addClass('active').css({'position':'', 'width':'', 'top':'', 'left': ''});

						$prev_carousel_group.find('.delayed_container_append_dup').remove();
//alert("finding changing position");
						$prev_carousel_group.find('.changing_position').each(function( index ){
							position = $(this).data('position');
							current_position = $(this).data('current_position');
							prev_position = $(this).data('prev_position');
							$(this).removeClass('container_append delayed_container_append position_' + position + ' ' + 'changing_position current_position current_position_' + current_position + ' prev_position prev_position_' + prev_position );
							$(this).data('current_position', '');
							$(this).data('prev_position', '');
							position = index + 1;
							$(this).data('position', position );
							$(this).addClass('position_' + position );
						});
//alert("found changing position");
						$prev_carousel_group.children().css({'position': '', 'left': ''});
						$et_carousel.et_animation_running = false;
					}
				} );
			}
		}
	}

	$.fn.et_pb_simple_kkcarousel = function( options ) {
		return this.each(function() {
			new $.et_pb_simple_kkcarousel(this, options);
		});
	}
	
	$(window).load( function() {

		var $et_kkcontact_container = $('.et_pb_kkcontact_form_container');

		if ( $et_kkcontact_container.length ) {
			var $et_contact_form = $et_kkcontact_container.find( 'form' ),
				$et_contact_submit = $et_kkcontact_container.find( 'input.et_pb_contact_submit' ),
				$et_inputs = $et_contact_form.find('input[type=text],input[type=email],textarea,input[type=checkbox],input[type=radio],select'),
				et_email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
				et_contact_error = false,
				$et_contact_message = $et_kkcontact_container.find('.et-pb-contact-message'),
				et_message = '',
                                bxgrp = $et_contact_form.find( 'bxgrp' ),
				$captcha_field = $et_contact_form.find( '.et_pb_contact_captcha' ),
                                redirect_url = typeof $et_kkcontact_container.data( 'redirect_url' ) !== 'undefined' ? $et_kkcontact_container.data( 'redirect_url' ) : '';
                                redirect_delay = typeof $et_kkcontact_container.data( 'redirect_delay' ) !== 'undefined' ? $et_kkcontact_container.data( 'redirect_delay' ) : 0;


/*			$et_inputs.live('focus', function(){
				if ( $(this).val() === $(this).siblings('label').text() ) $(this).val("");
			}).live('blur', function(){
				if ($(this).val() === "") $(this).val( $(this).siblings('label').text() );
			});
*/
			$et_contact_form.on('submit', function(event) {
                                $et_contact_message.empty();
				et_contact_error = false;
				et_message = '<h3>' + et_pb_custom.fill_message + '</h3><ul>';
                                et_pb_custom.fill = 'Fill';
                                et_pb_custom.field = 'field';
                                et_pb_custom.bxgrpchk = '';

				$et_inputs.removeClass('et_contact_error');

				$et_inputs.each(function(index, domEle){
					if ( ($(domEle).val() === '' || $(domEle).val() === null) && $(domEle).attr( "reqd" ) === 'yes' ) {
						$(domEle).addClass('et_contact_error');
						et_contact_error = true;
						var default_value = $(this).siblings('label').text();
						if ( default_value == '' ) default_value = "Quiz";

						et_message += '<li>' + default_value + '</li>';
					} else if ( ($(domEle).attr( "bxgrp" ) === "yes" && $(domEle).attr( "reqd" ) === 'yes') ) {
                                                bxgrp = bxgrp.add( $(domEle) );
                                                if ( $(domEle).prop( "checked") ) {
                                                   et_pb_custom.bxgrpchk = 'yes';
                                                } 
						var default_value = $(this).siblings('label').text();
						//if ( default_value == '' ) default_value = et_pb_custom.captcha;
//alert( default_value + " " + $(domEle).val() );
						//et_message += '<li>Check ' + default_value + ' ' + et_pb_custom.field + '</li>';
					} else if ( ($(domEle).attr( "type" ) === "checkbox" && !$(domEle).prop( "checked")) && $(domEle).attr( "reqd" ) === 'yes') {
						$(domEle).addClass('et_contact_error');
						et_contact_error = true;
						var default_value = $(this).siblings('label').text();
						if ( default_value == '' ) default_value = et_pb_custom.captcha;
//alert( default_value + " " + $(domEle).val() );
						et_message += '<li>' + et_pb_kkcustom.check + ' ' + default_value + '</li>';
					} else if ( ($(domEle).attr('type') == 'email') && !et_email_reg.test($(domEle).val()) ) {
						$(domEle).removeClass('et_contact_error').addClass('et_contact_error');
						et_contact_error = true;
//alert( $(domEle).val() );
						if ( !et_email_reg.test($(domEle).val()) ) et_message += '<li>' + et_pb_custom.invalid + '</li>';
					}

				});
                                if ( bxgrp.length > 0 && et_pb_custom.bxgrpchk !== 'yes') {
                                   bxgrp.addClass('et_contact_error');
                                   et_contact_error = true;
                                   var default_value = $(this).siblings('label').text();
                                   if ( default_value == '' ) default_value = "item in checkbox group";
                                   et_message += '<li>' + et_pb_kkcustom.checkone + ' ' + default_value + '</li>';
                                }

						// check the captcha value if required for current form
						if ( $captcha_field.length && '' !== $captcha_field.val() ) {
							var first_digit = parseInt( $captcha_field.data( 'first_digit' ) ),
								second_digit = parseInt( $captcha_field.data( 'second_digit' ) );

							if ( parseInt( $captcha_field.val() ) !== first_digit + second_digit ) {

								et_message += '<li>' + et_pb_custom.wrong_captcha + '</li>';
								et_contact_error = true;

								// generate new digits for captcha
								first_digit = Math.floor( ( Math.random() * 15 ) + 1 );
								second_digit = Math.floor( ( Math.random() * 15 ) + 1 );

								// set new digits for captcha
								$captcha_field.data( 'first_digit', first_digit );
								$captcha_field.data( 'second_digit', second_digit );

								// regenerate captcha on page
								$et_contact_form.find( '.et_pb_contact_captcha_question' ).empty().append( first_digit  + ' + ' + second_digit );
							}

						}


				if ( !et_contact_error ) {
                                        var error_length = 0;
                                        et_pb_smooth_scroll($et_kkcontact_container, '', 800);

					$href = $(this).attr('action');
					$et_kkcontact_container.fadeTo('fast',0.2).load($href + ' #' + $et_contact_form.closest('.et_pb_kkcontact_form_container').attr('id'), $(this).serializeArray(), function() {
						$et_kkcontact_container.fadeTo('fast',1);

                                        error_length = $(".et-pb-contact-message").children().length;

					if ( '' !== redirect_url && error_length === 0 ) {
				            setTimeout(function(){window.location.href = redirect_url;}, redirect_delay);
				            //window.location.href = redirect_url;
					}


					});

				}

				et_message += '</ul>';

				if ( et_message != '<ul></ul>' ) {
					$et_contact_message.html(et_message);
                                        et_pb_smooth_scroll($et_kkcontact_container, '', 800);
                                }

				event.preventDefault();
			});
		}

			} );
				
	$(document).ready( function(){
			var $et_pb_kkslider = $('.et_pb_kkslider');	
			if ( $et_pb_kkslider.length ) {
			$et_pb_kkslider.each( function() {
				var $this_slider = $(this),
					et_slider_settings = {
						fade_speed 		: 700,
						slide			: ! $this_slider.hasClass( 'et_pb_gallery' ) ? '.et_pb_slide' : '.et_pb_gallery_item'
					}

				if ( $this_slider.hasClass('et_pb_slider_no_arrows') )
					et_slider_settings.use_arrows = false;

				if ( $this_slider.hasClass('et_pb_slider_no_pagination') )
					et_slider_settings.use_controls = false;

				if ( $this_slider.hasClass('et_slider_auto') ) {
					var et_slider_autospeed_class_value = /et_slider_speed_(\d+)/g;

					et_slider_settings.slideshow = true;

					et_slider_autospeed = et_slider_autospeed_class_value.exec( $this_slider.attr('class') );

					et_slider_settings.slideshow_speed = et_slider_autospeed[1];
				}

				if ( $this_slider.parent().hasClass('et_pb_video_slider') ) {
					et_slider_settings.controls_below = true;
					et_slider_settings.append_controls_to = $this_slider.parent();

					setTimeout( function() {
						$( '.et_pb_preload' ).removeClass( 'et_pb_preload' );
					}, 500 );
				}

				if ( $this_slider.hasClass('et_pb_slider_carousel') ) {
					et_slider_settings.use_carousel = true;
                                        et_slider_settings.columns = $this_slider.attr('data-cols');
                                }

				$this_slider.et_pb_simple_kkslider( et_slider_settings );
 
			} );
		}

		function et_fix_kkslider_height() {
			if ( ! $et_pb_kkslider.length ) return;

			$et_pb_kkslider.each( function() {
				var $slide_section = $(this).parent( '.et_pb_section' ),
					$slide = $(this).find( '.et_pb_slide' ),
					$slide_container = $slide.find( '.et_pb_container' ),
					max_height = 0;

				// If this is appears at the first section benath transparent nav, skip it
				// leave it to et_fix_page_container_position()
				if ( $slide_section.is( '.et_pb_section_first' ) ){
					return true;
				}

				$slide_container.css( 'min-height', 0 );

				$slide.each( function() {
					var $this_el = $(this),
						height = $this_el.innerHeight();

					if ( max_height < height )
						max_height = height;
				} );

				$slide_container.css( 'min-height', max_height );
			} );
		}

                et_fix_kkslider_height();

                $( window ).resize( function(){
                   et_fix_kkslider_height();
                });



		$et_pb_kkcarousel  = $( '.et_pb_kkcarousel' );
		if ( $et_pb_kkcarousel.length ) {
			$et_pb_kkcarousel.each( function() {
				var $this_carousel = $(this),
					et_carousel_settings = {
						fade_speed 		: 1000,
                                                columns                 : $this_carousel.attr("data-columns")
					};

				$this_carousel.et_pb_simple_kkcarousel( et_carousel_settings );
			} );
		}

	
	
	})

})(jQuery)