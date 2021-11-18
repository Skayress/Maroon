$(function () {
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
	$(window).scroll(function () {
		let scrolled = $(this).scrollTop();
		if (scrolled >= 30) {
			$('.header').addClass('header--scroll');
		}
		if (scrolled <= 30) {
			$('.header').removeClass('header--scroll');
		}
	});

	// СЛАЙДЕР БЕСТСЕЛЛЕР
	const swiper = new Swiper('.best-sellers__slider', {
		loop: true,

		navigation: {
			nextEl: '.best-sellers__slider-arrow--next',
			prevEl: '.best-sellers__slider-arrow--prev',
		},

		slidesPerView: 3.7,

		spaceBetween: 30,

		breakpoints: {
			320: {
				slidesPerView: 1.2,
				spaceBetween: 30,
			},
			576: {
				slidesPerView: 2.2,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 1.5,
				spaceBetween: 30,
			},

			1000: {
				slidesPerView: 2.7,
				spaceBetween: 30,
			},

			1200: {
				slidesPerView: 3.7,
				spaceBetween: 30,
			}
		}

	});
});

// СЛАЙДЕР ПРОСМОТРЕННЫХ
const swiper = new Swiper('.watched-slider', {
	loop: true,

	navigation: {
		nextEl: '.watched-slider__next',
		prevEl: '.watched-slider__prev',
	},

	slidesPerView: 4,

	pagination: {
		type: 'fraction'
	}

});

// ФИЛЬТР
$('.filter-btn').on('click', function () {
	$('.filter').toggleClass('filter--vision');
});

// АККОРДЕОН
$('#accordeon .full-card__accordion-head').on('click', f_acc);

function f_acc() {
	//скрываем все кроме того, что должны открыть
	$('#accordeon .full-card__accordion-body').not($(this).next()).slideUp(400);
	// открываем или скрываем блок под заголовоком, по которому кликнули
	$(this).next().slideToggle(400);
}

// КАРТА
let myMap;
let myPlacemark;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
	myMap = new ymaps.Map('map', {
		center: [59.938635, 30.323118], // Санкт-Петербург
		zoom: 14
	},
		{
			searchControlProvider: 'yandex#search'
		})

	myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
		balloonContent: 'Маленькая иконка'
	}, {
		iconLayout: `default#image`,
		iconImageClipRect: [[16, 22], [16, 22]],
		iconImageHref: `../images/geo-mark.svg`,
		iconImageSize: [16, 22],
		iconImageOffset: [0, 12]
	}
	)

	myMap.geoObjects.add(myPlacemark);



	document.getElementById('destroyButton').onclick = function () {
		// Для уничтожения используется метод destroy.
		myMap.destroy();
	};

}