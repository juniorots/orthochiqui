$(function() {    "use strict";		// REMOVE # FROM URL	$( 'a[href="#"]' ).click( function(e) {		e.preventDefault();	});		// ACCORDION	var $active = $("#accordion .panel-collapse.in")					.prev()					.addClass("active");						$active		.find("a")		.append("<span class=\"fa  fa-minus-square-o pull-right\"></span>");			$("#accordion .panel-heading")		.not($active)		.find('a')		.prepend("<span class=\"fa  fa-plus-square-o pull-right\"></span>");		$("#accordion").on("show.bs.collapse", function (e) {			$("#accordion .panel-heading.active")			.removeClass("active")			.find(".fa")			.toggleClass(" fa-plus-square-o  fa-minus-square-o");						$(e.target)			.prev()			.addClass("active")			.find(".fa")			.toggleClass(" fa-plus-square-o  fa-minus-square-o");			});		$("#accordion").on("hide.bs.collapse", function (e) {		$(e.target)			.prev()			.removeClass("active")			.find(".fa")			.removeClass(" fa-minus-square-o")			.addClass(" fa-plus-square-o");	});		// CAMERA SLIDER	$("#camera_wrap_1").camera({		alignment: 'center',		autoAdvance: false,		mobileAutoAdvance: true,		barDirection: 'leftToRight',		barPosition: 'bottom',		loader: 'none',		opacityOnGrid: false, 		cols: 12,		height: '50%',		playPause: false,		pagination: false,		imagePath: 'plugins/camera/images/'	});		// Date Picker	$(".date-picker").datepicker();		// COUNTER	function count($this){		var current = parseInt($this.html(), 10);		$this.html(++current);		if(current !== $this.data('count')){			setTimeout(function(){count($this)}, 50);		}	}        	$(".badges-counter").each(function() {	  $(this).data('count', parseInt($(this).html(), 10));	  $(this).html('0');	  count($(this));	});		// Gallery FILTERS	var $grid = $('#gallery-grid');	$grid.shuffle({		itemSelector: '.gallery-grid', // the selector for the items in the grid		speed: 500 // Transition/animation speed (milliseconds)	});	/* reshuffle when user clicks a filter item */	$('#gallery-filter li a').click(function (e) {		// set active class		$('#gallery-filter li a').removeClass('active');		$(this).addClass('active');		// get group name from clicked item		var groupName = $(this).attr('data-group');		// reshuffle grid		$grid.shuffle('shuffle', groupName );	});		//MAGNIFIC POPUP	$("#gallery-grid").magnificPopup({		delegate: 'a.gallery-zoom', 		type: 'image',		gallery: {			enabled: true		}	});		//AJAX CONTACT FORM	$(".contact-form").submit(function() {		var rd = this;		var url = "sendemail.php"; // the script where you handle the form input.		$.ajax({			type: "POST",			url: url,			data: $(".contact-form").serialize(), // serializes the form's elements.			success: function(data) {				$(rd).prev().text(data.message).fadeIn().delay(3000).fadeOut();			}		});		return false; // avoid to execute the actual submit of the form.	});		// GOOGLE MAP	function initialize($) {		var mapOptions = {				zoom: 8,			center: new google.maps.LatLng(17.421306, 78.457553),			disableDefaultUI: true		};		var map = new google.maps.Map(document.querySelector('.map'), mapOptions);	}	google.maps.event.addDomListener(window, 'load', initialize);	});