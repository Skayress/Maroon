$(function(){
	// МЕНЮ БУРГЕР
	const burger = document.getElementById('burger');
	const header = document.getElementById('header');
	const menu = document.getElementById('header-menu');

	const toggleClass = () => {
		header.classList.toggle('header--transparent');
		burger.classList.toggle('burger--active');
		menu.classList.toggle('menu--active');
	}

	burger.addEventListener('click', toggleClass);

	// СКРОЛЛ ХЕДЕРА
	$(window).scroll(function(){
		let scrolled = $(this).scrollTop();
		if( scrolled >= 30 ) {
			$('.header').removeClass('header--transparent');
		}   
		if( scrolled <= 30 ) {     
			$('.header').addClass('header--transparent');
		}
  });
});