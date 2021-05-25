
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


//==========================Форма================================

// document.querySelector('.button-sub').onclick = valid;

// function valid(form) {
//     form = document.getElementById('formstart'); // указуем id формы

//     let fail = false; // Переменная куда заносим ошибку, если она есть
//     let name = form.name.value;
//     let email = form.email.value;
//     let phone = form.phone.value;
//     let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //Регулярное выражение для проверки Email

//     if (name == '' || name == ' ')
//         fail = 'Enter your name';

//     else if (regMail.test(email) == false)
//         fail = 'Enter email'

//     else if (phone == '')
//         fail = 'Enter phone';

//         if (fail)
//         alert(fail); //Если переменная true выводим сообщение про ошибку.


//     else
//         window.location = "http://google.com"; // Если все правильно, то перенаправляем пользователя на новую страницу

// }

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('formstart');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
        // formData.append('image', formImage.files[0]);

        if(error === 0){
            form.classList.add('_sending');
           let response = await fetch('sendmail.php',{
               method: 'POST',
               body: formData
           });
           if(response.ok){
              let result = await response.json();
              alert(result.message);
              form.reset();
              form.classList.remove('_sending');
           }else{
             alert('Error');
             form.classList.remove('_sending');
           }
        }else{
            alert('Fill in required fields');
        }
    }

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');
    for(let i = 0; i < formReq.length; i++){
        const input = formReq[i];
       formRemoveError(input);
       if(input.classList.contains('_email')){
         if(emailTest(input)){
             formAddError(input);
             error++;
         }
       }else {
           if (input.value === ''){
            formAddError(input);
            error++;
           }
       }
    }
    return error;
}


function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
//Функция теста email
function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
});


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



