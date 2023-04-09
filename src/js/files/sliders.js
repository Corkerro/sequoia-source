/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper','swiper2')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				800: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1120: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1480: {
					slidesPerView: 4,
					spaceBetween: 20,
				},

			},
			
			// События
			on: {

			}
		});
		new Swiper('.swiper2', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			
			pagination: {
				el: '.swiper2-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			// navigation: {
			// 	prevEl: '.swiper-button-prev',
			// 	nextEl: '.swiper-button-next',
			// },

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				720: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				920: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1340: {
					slidesPerView: 5,
					spaceBetween: 20,
				},

			},
			
			// События
			on: {

			}
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

// function initSliders2() {
// 	// Перечень слайдеров
// 	// Проверяем, есть ли слайдер на стронице
// 	if (document.querySelector('.swiper2')) { // Указываем скласс нужного слайдера
// 		// Создаем слайдер
// 		new Swiper2('.swiper2', { // Указываем скласс нужного слайдера
// 			// Подключаем модули слайдера
// 			// для конкретного случая
// 			modules: [Navigation, Pagination, Lazy, Autoplay],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 1,
// 			spaceBetween: 0,
// 			autoHeight: true,
// 			speed: 800,

// 			//touchRatio: 0,
// 			//simulateTouch: false,
// 			loop: true,
// 			//preloadImages: false,
// 			lazy: true,

			
// 			// Эффекты
// 			effect: 'fade',
// 			autoplay: {
// 				delay: 3000,
// 				disableOnInteraction: false,
// 			},
			

// 			// Пагинация
			
// 			pagination: {
// 				el: '.swiper2-pagination',
// 				clickable: true,
// 			},
			

// 			// Скроллбар
// 			/*
// 			scrollbar: {
// 				el: '.swiper-scrollbar',
// 				draggable: true,
// 			},
// 			*/

// 			// Кнопки "влево/вправо"
// 			// navigation: {
// 			// 	prevEl: '.swiper-button-prev',
// 			// 	nextEl: '.swiper-button-next',
// 			// },

// 			// Брейкпоинты
			
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 					spaceBetween: 0,
// 					autoHeight: true,
// 				},
// 				800: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				1140: {
// 					slidesPerView: 3,
// 					spaceBetween: 20,
// 				},

// 			},
			
// 			// События
// 			on: {

// 			}
// 		});
// 	}
// }

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();

	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});