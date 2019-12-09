
                                        /* MESSAGES.js */

// - some js dependent on php vars is directly in .phtml files

// autogrow - textarea
// upwards - https://stackoverflow.com/questions/20920151/dynamically-resize-textarea-upwards
// try this too
// https://stackoverflow.com/questions/25160312/trying-to-make-textarea-autogrow-upwards-instead-of-downwards-i-have-the-textar/25160404
/*
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight+20)+"px";
} */



$(document).ready(function() {


    if (document.getElementById('text') !== null) {
        document.getElementById('text').addEventListener('keyup', function () {
            this.style.height = 0;
            this.style.height = (this.scrollHeight+20)+"px";
        }, false);
    }


    /*
    $('.add_book_msg').click(function(event) {
        var isVisible = $('#add_message').is(':visible');
        if (!isVisible) {
            $('#add_message').show();
            $('input.nick_autocomplete').focus();
            $('p.flash_message').hide();
        } else {
            $('#add_message').hide();
        }
        event.preventDefault();
    });
    */

    $('form#add_msg #Submit').click(function(event) {
        $('form#add_msg').submit();
        $(this).attr('disabled', 'disabled');
        event.preventDefault();
    });


    // ---------------------
    //SCHOVA RAKCE FORM - musi se menovat stejne aby se pridal form
	$(".add_message_fake").click(function(){

	    // vars
	    var thiz = $(this);
	    var add_message = $('#add_book_msg');

	    // hide
	    thiz.hide(0);

	    // change css ---> in  .phtml file
        // $('div#add_message').css("bottom", "<?php $add_message_bottompx; ?>px");


		// show
        add_message.show(0);
        $('.add_message_head').show(0);

        // fokus
		var kde = add_message.find('#nick');      // #text
		var focusfce = function(kde) {
			var x = window.scrollX;
			var	y = window.scrollY;
			kde.focus();
			window.scrollTo(x, y);
		}
		focusfce(kde);
		// --

        // 		$(this).toggleClass("active");

	    return false;
	});

	// close postmessage form
	$('.add_message_head').click(function(){


	    $('#add_book_msg').hide(0);
        $('.add_message_head').hide(0);
	    $('.add_message_fake').show(0);

	});

	// SMILES - RESPONSIVE CLICK -- funguje i bez toho chyba asi jen v css

	$('.dropdown').click(function(){

	    $('.dropdown-menu').show(0);
	    // else virtual keyboard glitches on actual mobile device
	    $('textarea#text').focus();

	});


    // DELL MESSAGE
    $(".del_message2").click(function(event) {

        $.get($(this).attr('href'));
        var parentx = $(this).parent().parent().parent().parent().parent();

        parentx.fadeOut(1000, function() {
            $(this).remove();
        });

        event.preventDefault();
    });


    // MSG SIDEICONS
    $('.msg_sideicons').click(function(){

        var flag = $(this).data('flag');

        if (!flag) {
            $(this).find('.msg_sideicons_menu').show(0);
        } else {
            $(this).find('.msg_sideicons_menu').hide(0);
        }

        // zřejmě při každém kliku otočí hodnotu flag
        $(this).data('flag', !flag);

	});


});