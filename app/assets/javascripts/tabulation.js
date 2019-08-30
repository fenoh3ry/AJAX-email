$(document).ready(function() {
// Mets ici ton code
	titre = $('.category-title');
	card = titre.next();
	card.hide();
	titre.on('click', function() {
		card.hide().fadeOut(500);
		$(this).next().show();
	});
	// titre.on('mouseleave', function() {
	// 	card.hide().fadeOut(500);
	// });

	avat = $('.avatar');
	content = $('.dropdown-content')
	content.hide()
	avat.on('click', function() {
		content.toggle();
	});
	
	contLogin = $('.popup-content')
	contSingup = $('.popup-signup')
	signin = $('#login')
	signup = $('#signup')
	contLogin.hide();
	contSingup.hide();
	signin.on('click', function(event) {
		event.preventDefault();
		contLogin.toggle();
		event.stopPropagation();
	});
	signup.on('click', function(event) {
		event.preventDefault();
		contSingup.toggle();
		event.stopPropagation();
	});

	$('body').on('click', function() {
		contLogin.hide();
		contSingup.hide();
	});

	emailBody = $('.emailBody')
	emailObj = $('.emailObject')
	emailBody.hide()
	emailObj.on('click', function() {
		emailBody.hide().fadeOut(500);
		$(this).next().show()
	})

});
