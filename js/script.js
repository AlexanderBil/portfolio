
//---------------Меню бургер------------------

document.querySelector('.burger-wrapper').onclick = togle;

function togle() {
    document.querySelector('.polosa').classList.toggle('polosa-active'); // анимация крестика
    document.querySelector('.mob-menu').classList.toggle('active'); // выдвижение меню
    document.querySelector('.main-menu-icon').classList.toggle('active-1') 
    document.querySelector('.mob-menu-content').classList.toggle('active-2')   //плавно выезжает мобильное меню
}

document.querySelector('.mob-menu').onclick = togle2; // для задвижения меню по клику на него и анимация крестика

function togle2() {
    let menu = document.querySelector('.mob-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')

    }
    document.querySelector('.polosa').classList.toggle('polosa-active');
    document.querySelector('.mob-menu-content').classList.toggle('active-2') //плавно выезжает мобильное меню
}




// =================Переключение зависимо от ширины==========================

// let screenWidth = window.screen.width
// window.onresize = function(event) {
  
//     if(event.currentTarget.innerWidth > 700 || screenWidth > 700) {
//         document.querySelector('.myImage').src="img/block-1/2.jpg";
//     }
    

//     if(event.currentTarget.innerWidth < 700 || screenWidth < 375){
//         document.querySelector('.myImage').src="img/block-1/5.jpg";
//     }
  
// };
// console.log(screenWidth);


//=================================Слайдер=====================================

let myImageSlider = new Swiper('.image-slider',{  // название класа слайдера
    //Стрелки
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    
    //Навигация
    //Буллеты, текущее положение, прогрессбар
    pagination:{
        // el: '.swiper-pagination',
        // //Буллеты (точки)
        // type: 'bullets',
        // clickable: true,
    
        // // Динамические буллеты 
        // dynamicBullets: true,
    
        // //Кастомные буллеты. Буллеты с цыфрой в середине
        // renderBullet: function(index, className){
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
    
        // Фракция (вместо точек цифры)
        // type: 'fraction',
    
        // Кастомные фракции
        // renderFraction: function (currentClass, totalClass){
        //     return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>' 
        //  },
    
        // Прогрессбар
        // type: 'progressbar',
    
    },
    
        // Скрол
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     //Возможность перелистывать скролл
        //     draggable: true
        // },
    
        //Включение/отключение перелистывания на ПК
             simulateTouch: true,
        //Чувствительность свайпа
            touchRatio: 1, // (если 0 отключик свайп)
        // touchAngle: 45,  //Угол срабатывания свайпа/перетаскивания
            grabCursor: true, // курсор мыши рука
    
        //Переключение при клике на слайд (действует на полосу)
            slideToClickedSlide: true,
    
        //Навигация по хешу
            hashNavigation: {
            //Отслеживать состояние
            watchState: true, //добавляет в адресную строку адрес слайда
        },
    
        //Управление клавиатурой
        // keyboard: {
        //     //Включить/Выключить
        //     enabled: true,
        //     //Включить/выключить только когда слайдер в пределах вьюпорта
        //     onlyInViewport: true,
        //     //Включить/выключить управление клавиатурой pageUp, pageDown
        //     pageUpDown: true,
    
        // },
    
    
        //Управление колесом мыши
        // mousewheel: {
        //     //Чувствительность колеса мыши
        //     sensitivity: 1,
        //     //Класс обьекта на котором будет срабатывать прокрутка мышью
        //     eventsTarget: ".image-slider"
        // },
    
        //Автовысота (слайдер подстраивается под высоту картинки)
        autoHeight: false, 
    
        //Количество слайдов для показа (можна вывести например 2.5 слайда)
        slidesPerView: 3,
    
        //Отступ между слайдами
        spaceBetween: 60,
    
        //Количество пролистываемых слайдов
        slidesPerGroup: 1,
    
        //Активный слайд по центру (slidesPerGroup ставим 1)
        centeredSlides: false,
    
        //Стартовый слайд (при запуске)
        initialSlide: 0,
    
        //Мультирядность
         // для коректной работы нужно отключить Автовысоту
         slidesPerColumn: 1,
    
        //Бесконечный слайдер
        loop: true, // не работает с мульирядностью
    
        //Свободный режим
         freeMode: false, // плавное перелистывание
    
    
    //=================================================
    //Автопрокрутка
     autoplay: {
         //Пауза между прокруткой
         delay: 4000,
         //Закончить на последнем слайде
         stopOnLastSlide: false,
         //Отключить после ручного переключения
         disableOnInteraction: false
     },
    
    //==================================================
    //Скорость переключения
    speed: 800,
    
    
    //=====================================================
    //Вертикальный слайдер
    //  для коректной работы установим высоту слайдера
    //  direction: 'vertical', 
    
    
    //======================================================
    //Эффекты переключения слайдов
    //Листание
    // effect: 'slide',
    // //Смена прозрачности
    // effect: 'fade', // подходит для 1-го слайда
    // //Дополнение к fade
    // fadeEffect: {
    //     //Паралельная смена прозрачности
    //     crossFade: true
    // },
    
    
    
    //========================================================
    // // Переворот
    // effect: 'flip',
    // //Дополнение к flip
    // flipEffect: {
    //     //Тень
    //     slideShadows: true,
    //     //Показ только активного слайда
    //     limitRotation: true
    // },
    
    
    //==========================================================
    //Куб  (в стилях ограничить ширину всего слайдера)
    //   effect: 'cube',
    //   //Дополнение к cube
    //   cubeEffect: {
    //       //настройки тени
    //       slideShadows: true,
    //       shadow: true,
    //       shadowOffset: 20,
    //       shadowScale: 0.94
    //   },
    
    
    //=========================================================
    // Эффект потока (slidesPerView ставим 3)
    // effect: 'coverflow',
    // //Дополнение к coverflow
    // coverflowEffect: {
    //     //угол
    //     rotate: 20,
    //     //Наложение
    //     stretch: 50,
    //     //Тень
    //     slideShadows: true,
    // },
    
    //============================================================
    //Брейк поинты (адаптив)
    //Ширина екрана
    
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        } 
    },
    
    
    //================================================================
    // Миниатюры (превью брейкпоинт отключен)
    
    // thumbs: {
    //     //свайпер с миниатюрами и его настройки
    //     swiper: {
    //         el: '.image-mini-slider',
    //         slidesPerView: 6,
    //     }
    // },
    
    }); 
    
    
    //==================================================================
    // Переключение при наведении мыши
    
    // let sliderBlock = document.querySelector('.image-slider');
    
    // // myImageSlider  - это переменная которой присвоен слайдер
    
    // sliderBlock.addEventListener("mouseenter", function (e) {
    // 	myImageSlider.params.autoplay.disableOnInteraction = false;
    // 	myImageSlider.params.autoplay.delay = 500;
    // 	myImageSlider.autoplay.start();
    // });
    // sliderBlock.addEventListener("mouseleave", function (e) {
    // 	myImageSlider.autoplay.stop();
    // });



