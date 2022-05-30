var $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 300);
	return false;
});
$('#headerSwitchNav').click(function () {
	$(this).toggleClass('burger--active');
	$('.header__nav').toggleClass('header__nav--active')
	$('body').toggleClass('body-cut')
});
$('.header__nav-list-item-link, .header__nav-contact').click(function () {
	$('#headerSwitchNav').removeClass('burger--active');
	$('.header__nav').removeClass('header__nav--active')
	$('body').removeClass('body-cut')
});
