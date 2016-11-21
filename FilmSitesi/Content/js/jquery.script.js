jQuery(function() {
	// main slider

	jQuery(".responsive-menu-items").html("<ul class='resp-menu'><li class='active'></li></ul><ul class='resp-menu-hidden'></ul>");
	jQuery('.sf-menu > li.active a:first').each(function(index) {
		var thisli = $(this).clone();
		jQuery(".resp-menu li").append(thisli);
	});
	jQuery('.sf-menu > li').each(function(index) {
		var thisli = $(this).clone();
		jQuery(".resp-menu-hidden").append(thisli);
	});
	jQuery('.resp-menu > li').clone().append('<ul />');

	jQuery('.resp-menu a').click(function(e) {
		e.preventDefault();
		jQuery('.resp-menu-hidden').slideToggle('fast');
	})

	jQuery('.resp-menu-hidden li').has('ul').addClass('inner');

	jQuery('.resp-menu-hidden li a').live('click', function(e) {
		if (jQuery(this).parent().hasClass('inner')) {
			e.preventDefault();
			jQuery(this).parent().find('ul').slideToggle('fast');
		}
	})
	// header main menu
	jQuery('#superfish_menu li:first-child, #breadcrumb li:first-child').addClass('first');
	jQuery('#superfish_menu li:last-child, #breadcrumb li:last-child, #block_footer_menu li:first-child, #block_footer_menu li:last-child').addClass('last');
	jQuery('#superfish_menu > li').children('a').wrap('<span class="corner"></span>');
	jQuery('.resp-menu > li').children('a').wrap('<span class="corner"></span>');
	jQuery('#superfish_menu li.last .corner').wrap('<span class="corner_last"></span>');
	jQuery('.resp-menu li .corner').wrap('<span class="corner_last"></span>');
	jQuery('ul.sf-menu').superfish();
	jQuery('.resp-menu > .active').find('a').append('<span class="dropdown"></span>');

	// social links
	jQuery('a.social_icons_16').empty().append('<span class="icon_16"></span>');
	jQuery('a.social_icons_24').empty().append('<span class="icon_24"></span>');

	// scroll window to top
	jQuery('#scroll_to_top').click(function() {
		jQuery('body,html').animate({
			scrollTop : 0
		});
		return false;
	});

	// buttons black
	jQuery('.button, .button_black').wrapInner('<span class="wrap"></span>');
	// buttons add arrows
	jQuery('.button_arrow .wrap').each(function(index, element) {
		if (jQuery(this).parent().hasClass('button_arrow_left')) {
			jQuery(this).prepend('<span class="icon"></span>');
		} else {
			jQuery(this).append('<span class="icon"></span>');
		}
	});

	// select box in forms
	jQuery('.content select').selectmenu({
		style : 'dropdown'
	});

	jQuery(window).resize(function() {
		var selectW = jQuery('#form_titles').width();
		jQuery('#form_titles-button, #form_titles-menu').width(selectW);
		
		var selectW2 = jQuery('#form_titles_showtimes').width();
		jQuery('#form_titles_showtimes-button, #form_titles_showtimes-menu').width(selectW2);
		
		var selectW3 = jQuery('.form_titles').width();
		jQuery('#form_titles-button, #form_titles-menu').width(selectW3);
	})
	// tabs, cookie expires in days
	jQuery('.tabs').tabs({
		cookie : {
			expires : 7
		}
	});
	// accordions
	jQuery('.accordions').accordion({
		autoHeight : false,
		navigation : true
	});
	// content toggle
	jQuery('.toggle:not(.toggle_active) .toggle_content').hide();
	jQuery('.toggle .toggle_title').click(function() {
		jQuery(this).parent().find('.toggle_content').slideToggle();
		jQuery(this).parent().toggleClass('toggle_active');
		return false;
	});

	// show code
	jQuery('.show_code a').click(function() {
		jQuery(this).parent().toggleClass('show_code_active').parent().find('.code').slideToggle();
		return false;
	});

	// vimeo block, trailers
	jQuery('#block_trailers li').each(function(index) {
		var _this = this;
		var url = jQuery(_this).find('a').hide().addClass('video_id').attr('href');
		var title = jQuery(_this).find('a').attr('title');
		if (!title)
			title = 'Video';

		if (url.indexOf('//www.youtube.com') !== -1) {
			id = url.match("[\\?&]v=([^&#]*)")[1];
			jQuery(_this).append('<div class="photo wrap_me_white"><a href="' + url + '"><span class="bg"/><img src="http://img.youtube.com/vi/' + id + '/default.jpg" alt=""/></a></div><div class="details"><h4 class="title"><a href="' + url + '">' + title + '</a></h4></div>');

		} else if (url.indexOf('//youtu.be') !== -1) {
			id = url.match("[\\?&]v=([^&#]*)")[1];
			jQuery(_this).append('<div class="photo wrap_me_white"><a href="' + url + '"><span class="bg"/><img src="http://img.youtube.com/vi/' + id + '/default.jpg" alt=""/></a></div><div class="details"><h4 class="title"><a href="' + url + '">' + title + '</a></h4></div>');

		} else if (url.indexOf('//vimeo.com') !== -1) {
			var video_id = url.match("vimeo\.com\/([0-9]{1,10})");
			video_id = video_id[1];
			jQuery.ajax({
				type : 'GET',
				url : 'http://vimeo.com/api/v2/video/' + video_id + '.json',
				dataType : 'jsonp',
				success : function(data) {
					jQuery(_this).append('<div class="photo wrap_me_white"><a href="' + data[0].url + '"><span class="bg"/><img src="' + data[0].thumbnail_small + '" alt=""/></a></div><div class="details"><h4 class="title"><a href="' + data[0].url + '">' + data[0].title + '</a></h4><p>Added: ' + data[0].upload_date + '</p></div>');
				}
			});
		}
	});

	jQuery('#block_trailers li').click(function() {
		if (!jQuery(this).hasClass('selected')) {
			jQuery('#block_trailers li').removeClass('selected').find('.bg').hide();
			jQuery(this).addClass('selected');
			var url = jQuery(this).find('.video_id').attr('href');

			var video_frame;
			if (url.indexOf('//www.youtube.com') !== -1) {
				id = url.match("[\\?&]v=([^&#]*)")[1];
				video_frame = '<iframe height="154" width="274" style="border: 0 none;" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen"></iframe>';
			} else if (url.indexOf('//youtu.be') !== -1) {
				id = url.substr(url.lastIndexOf("/") + 1);
				video_frame = '<iframe height="154" width="274" style="border: 0 none;" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen"></iframe>';
			} else if (url.indexOf('//vimeo.com') !== -1) {
				id = url.match("vimeo\.com\/([0-9]{1,10})")[1];
				video_frame = '<iframe height="154" width="274" style="border: 0 none;" src="http://player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0"></iframe>';
			}
			jQuery('#video_frame').append(video_frame)

			jQuery('#block_trailers .video div').empty().append(video_frame);
		}
		return false;
	});
	// add video on click
	jQuery('#block_trailers li.vimeo').eq(0).click();

	// show zoom on img
	jQuery('#block_photo_galleries .photo a').append('<span class="bg"/>');
	jQuery('#block_photo_galleries, #block_trailers').delegate('.photo a', 'mouseover mouseout', function(e) {
		if (e.type == 'mouseover') {
			jQuery(this).find('.bg').css({
				'display' : 'block'
			});
		} else {
			jQuery(this).find('.bg').css({
				'display' : 'none'
			});
		}
	});

	// fit videos
	jQuery('.content').each(function() {
		var target = ["iframe[src^='http://www.youtube.com']", "iframe[src^='http://player.vimeo.com']", "iframe[src^='https://www.youtube.com']", "iframe[src^='https://player.vimeo.com']", "object", "embed"];
		var $allVideos = jQuery(this).find(target.join(','));

		$allVideos.each(function() {
			var $this = jQuery(this);
			if (this.tagName.toLowerCase() == 'embed' && $this.parent('object').length || $this.parent('.liquid-video-wrapper').length) {
				return;
			}
			var height = this.tagName.toLowerCase() == 'object' ? $this.attr('height') : $this.height(), aspectRatio = height / $this.width();
			if (!$this.attr('id')) {
				var $ID = Math.floor(Math.random() * 9999999);
				$this.attr('id', $ID);
			}
			$this.wrap('<div class="liquid-video-wrapper"></div>').parent('.liquid-video-wrapper').css('padding-top', (aspectRatio * 100) + "%").wrap('<p class="wrap_me wrap_video clearfix"></p>');
			$this.removeAttr('height').removeAttr('width');
		});
	});

	/* Contact form */
	jQuery('#contact_form').submit(function() {
		$this = jQuery(this);
		var name = $this.find('#edit-submitted-name').val();
		var email = $this.find('#edit-submitted-email').val();
		$this.find('.message').remove();
		if (name == "") {
			$this.prepend('<div class="message message_error">Error!<br/>Please enter your Name.</div>');
			$this.find('#edit-submitted-name').focus();
			return false;
		}
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (email == "" || !emailReg.test(email)) {
			$this.prepend('<div class="message message_error">Error!<br/>Please enter your email.</div>');
			$this.find('#edit-submitted-email').focus();
			return false;
		}
		$this.prepend('<div class="message message_info">Loading<br/>Please wait...</div>');
		jQuery.ajax({
			type : 'POST',
			url : jQuery(this).attr('action'),
			data : jQuery(this).serializeArray(),
			success : function(msg) {
				$this.find('.message').remove();
				$this.prepend(msg);
			},
			timeout : 30000,
			error : function(jqXHR, textStatus, errorThrown) {
				$this.find('.message').remove();
				$this.prepend('<div class="message message_error">Error!<br/>' + jqXHR.status + ' - ' + jqXHR.statusText + '</div>');
			}
		});
		return false;
	});

	/*photo slider*/
	jQuery('#carousel').flexslider({
		animation : "slide",
		controlNav : true,
		directionNav : true,
		slideshow : false,
		animationLoop : false,
		itemWidth : 131,
		itemMargin : 10,
		asNavFor : '#slider',
		controlsContainer : "#carousel_control"
	});
	var url_video;
	jQuery('.video_page #slider').flexslider({
		animation : "slide",
		controlNav : false,
		directionNav : true,
		animationLoop : true,
		slideshow : false,
		sync : "#carousel",
		itemWidth : 644,
		before : function() {
			jQuery('#video_frame').fadeOut(function() {
				jQuery('#video_frame').empty();
			});
		},
		start : function(slider) {
			jQuery('#size').html(slider.count);
			jQuery('.video_page #slider .flex-direction-nav').append('<li><a class="video_play" /></li>');
			url_video = jQuery('.video_page #slider li').eq(0).attr('data-link');
			jQuery('.video_play').click(function() {
				var video_frame;
				var url = url_video;
				if (url.indexOf('//www.youtube.com') !== -1) {
					id = url.match("[\\?&]v=([^&#]*)")[1];
					video_frame = '<iframe style="border: 0 none;" src="http://www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullscreen"></iframe>';
				} else if (url.indexOf('//youtu.be') !== -1) {
					id = url.substr(url.lastIndexOf("/") + 1);
					video_frame = '<iframe style="border: 0 none;" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen"></iframe>';
				} else if (url.indexOf('//vimeo.com') !== -1) {
					id = url.match("vimeo\.com\/([0-9]{1,10})")[1];
					video_frame = '<iframe style="border: 0 none;" src="http://player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1"></iframe>';
				}
				jQuery('#video_frame').append(video_frame).fadeIn();
				jQuery('.video_play').fadeOut();
			});
		},
		after : function(slider) {
			jQuery('#number').html(slider.currentSlide + 1);
			url_video = jQuery('#slider li').eq(slider.currentSlide).attr('data-link');
			jQuery('.video_play').fadeIn();

		}
	});

	jQuery('.photo_page #slider').flexslider({
		animation : "slide",
		controlNav : false,
		directionNav : true,
		animationLoop : true,
		slideshow : false,
		sync : "#carousel",
		itemWidth : 644,
		start : function(slider) {
			jQuery('#size').html(slider.count);
		},
		after : function(slider) {
			jQuery('#number').html(slider.currentSlide + 1);
		}
	});
	jQuery(".show_carousel .button_middle").click(function() {
		if (jQuery(this).hasClass('show')) {
			jQuery(this).removeClass('show').addClass('hide');
			jQuery('#carousel, #carousel_control, #carousel_number').hide('slow');
			jQuery(this).find('.wrap').html('Show thumbnails <span class="icon show"></span>');
		} else {
			jQuery(this).removeClass('hide').addClass('show');
			jQuery('#carousel, #carousel_control, #carousel_number').show('slow');
			jQuery(this).find('.wrap').html('Hide thumbnails <span class="icon"></span>');
		}
		return false;
	});

	jQuery('.sort_by').selectmenu({
		style : 'dropdown',
		menuWidth : 150,
		width : 150
	});

	var $filterType = jQuery('.sort_by').attr('class');
	var $holder = jQuery('#sorted');
	var $data = $holder.clone();
	var col = 2;
	if (jQuery('#sorted').hasClass('col3')) {
		col = 3;
	} else {
		if (jQuery('#sorted').hasClass('col4')) {
			col = 4;
		} else {
			if (jQuery('#sorted').hasClass('col6')) {
				col = 6;
			}
		}
	}




	jQuery("#sorted div.photo_colums").each(function() {
		if (jQuery(this).index() % col == 0) {
			jQuery(this).animate({
				'margin-left' : '0',
				'margin-right' : '10px'
			}, 10);
		} else {
			if (jQuery(this).index() % col == (col - 1)) {
				jQuery(this).animate({
					'margin-right' : '0',
					'margin-left' : '10px'
				}, 10);
			} else {
				jQuery(this).animate({
					'margin-right' : '10px',
					'margin-left' : '10px'
				}, 10);
			}
		}
	});

	if (jQuery(window).width() < 768) {
		jQuery("#sorted div.photo_colums").each(function() {
			if (jQuery(this).index() % col == 0) {
				jQuery(this).animate({
					'margin-left' : '0',
					'margin-right' : '10px'
				}, 100);
			} else {
				if (jQuery(this).index() % col == (col - 1)) {
					jQuery(this).animate({
						'margin-right' : '10px',
						'margin-left' : '0px'
					}, 100);
				} else {
					jQuery(this).animate({
						'margin-right' : '10px',
						'margin-left' : '0px'
					}, 100);
				}
			}
		});
	} else {
		jQuery("#sorted div.photo_colums").each(function() {
			if (jQuery(this).index() % col == 0) {
				jQuery(this).animate({
					'margin-left' : '0',
					'margin-right' : '10px'
				}, 100);
			} else {
				if (jQuery(this).index() % col == (col - 1)) {
					jQuery(this).animate({
						'margin-right' : '0',
						'margin-left' : '5px'
					}, 100);
				} else {
					jQuery(this).animate({
						'margin-right' : '9px',
						'margin-left' : '9px'
					}, 100);
				}
			}
		});
	}
	
	
	

	jQuery(window).resize(function() {
		if (jQuery(window).width() < 768) {
			jQuery("#sorted div.photo_colums").each(function() {
				if (jQuery(this).index() % col == 0) {
					jQuery(this).animate({
						'margin-left' : '0',
						'margin-right' : '10px'
					}, 100);
				} else {
					if (jQuery(this).index() % col == (col - 1)) {
						jQuery(this).animate({
							'margin-right' : '9px',
							'margin-left' : '0px'
						}, 100);
					} else {
						jQuery(this).animate({
							'margin-right' : '9px',
							'margin-left' : '0px'
						}, 100);
					}
				}

			});
		} else {
			jQuery("#sorted div.photo_colums").each(function() {
				if (jQuery(this).index() % col == 0) {
					jQuery(this).animate({
						'margin-left' : '0',
						'margin-right' : '10px'
					}, 100);
				} else {
					if (jQuery(this).index() % col == (col - 1)) {
						jQuery(this).animate({
							'margin-right' : '0',
							'margin-left' : '5px'
						}, 100);
					} else {
						jQuery(this).animate({
							'margin-right' : '10px',
							'margin-left' : '10px'
						}, 100);
					}
				}
			});
		}
	})

	jQuery('#sorted .photo_colums a').append('<span class="bg"/>');
	jQuery('#sorted').delegate('.photo_colums a', 'mouseover mouseout', function(e) {
		if (e.type == 'mouseover') {
			jQuery(this).find('.bg').css({
				'display' : 'block'
			});
		} else {
			jQuery(this).find('.bg').css({
				'display' : 'none'
			});
		}
	});

	var sendData = new Array();
	jQuery('.sort_by').change(function(e) {
		// jQuery("#sorted div.photo_colums").animate({'margin' : 0});
		$filterType = jQuery(this).val();
		if ($filterType == 'all') {
			var $filteredData = $data.find('.photo_colums');
		} else {
			var $filteredData = $data.find('.photo_colums[data-type=' + $filterType + ']');
		}
		$holder.quicksand($filteredData, {
			duration : 800,
			enhancement : function() {
				jQuery('.video_replace .img_container').each(function() {
					jQuery(this).append(sendData[jQuery(this).parent().attr('data-id')]);
				});

				jQuery("#sorted div.photo_colums").each(function() {
					if (jQuery(this).index() % col == 0) {
						jQuery(this).animate({
							'margin-left' : '0',
							'margin-right' : '10px'
						}, 100);
					} else {
						if (jQuery(this).index() % col == (col - 1)) {
							jQuery(this).animate({
								'margin-right' : '0',
								'margin-left' : '10px'
							}, 100);
						} else {
							jQuery(this).animate({
								'margin-right' : '10px',
								'margin-left' : '10px'
							}, 100);
						}
					}
				});
				jQuery('#sorted .photo_colums a').append('<span class="bg"/>');
				jQuery('#sorted').delegate('.photo_colums a', 'mouseover mouseout', function(e) {
					if (e.type == 'mouseover') {
						jQuery(this).find('.bg').css({
							'display' : 'block'
						});
					} else {
						jQuery(this).find('.bg').css({
							'display' : 'none'
						});
					}
				});

			}
		}, function() {
			jQuery("#sorted").css('height', 'auto');
		});
		return false;
	});

	jQuery("#block_photo_galleries ul li:odd").addClass("mr0");

	jQuery("#slider_nav").flexslider({
		animation : "slide",
		controlNav : false,
		directionNav : false,
		slideshow : false,
		animationLoop : false,
		itemWidth : 75,
		asNavFor : "#main_slider",
		direction : "vertical"
	});
	jQuery("#main_slider").flexslider({
		animation : "slide",
		controlNav : false,
		directionNav : false,
		animationLoop : false,
		slideshow : false,
		itemWidth : 634,
		sync : "#slider_nav"
	});

	jQuery('#main_tabs').tabs({
		selected : 2,
		select : function(event, ui) {
			var cont = jQuery("#main_tabs").find('.tabs_slider').eq(ui.index).parent().find('.tabs_slide_nav');
			if (jQuery("#main_tabs").find('.tabs_slider').eq(ui.index).hasClass('no-slide')) {
				jQuery("#main_tabs").find('.tabs_slider').eq(ui.index).removeClass('no-slide');
				jQuery("#main_tabs").find('.tabs_slider').eq(ui.index).flexslider({
					animation : "slide",
					controlNav : false,
					directionNav : true,
					animationLoop : false,
					slideshow : false,
					itemWidth : 155,
					controlsContainer : cont
				});
			}
		},
		create : function() {
			// jQuery('#main_tabs').tabs( "option", "selected", 2 );
			jQuery('#main_tabs .ui-tabs-nav a').eq(0).click();
		}
	});

});
