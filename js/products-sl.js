

let productsSlider = new Swiper('.products-slider-container', {
    
    slidesPerView: 1,

    spaceBetween: 10,
    autoHeight: true,
    speed: 800,
    
    pagination: {
      el: '.products-slider__info',
      type: 'fraction',
    },
    
   navigation: {
       nextEl: '.products-slider__arrow_next',
       prevEl: '.products-slider__arrow_prev',
   },
 })