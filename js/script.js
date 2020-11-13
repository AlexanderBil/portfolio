// $(document).ready(function () { // инициализация jquary
//     $('.sliderbig').slick({ // включаем слайдер
//         arrows: true, // стрелки
//         fade: true, // заменяется исчезанием/перелистыванием
//         dots: true, // точки
//         adaptiveHeight: true, // подстраивает высоту слайда под картинку (slick-track - нужн одобавить свойство align-items:flex-start)
//         speed: 500, // скорость пролистывания слайдов
//         easing: 'easeOutBack', // тип анимации прокрутки
//         infinite: true, // определение бесконечной прокрутки
//         autoplay: false, // автоматическая прокрутка слайдов
//         autoplaySpeed: 2000, // скорость автоматического пролистывания
//         pauseOnFocus: false, // остановить слайдер при нажатии мыши
//         pauseOnHover: false, // остановить слайдер при наведении мыши
//         draggable: true, // запрещает слайдить мышкой
//         swipe: true, // запрещает свайпать на тач скрине
//         touchTreshold: 5, // расстояния просвайпивания пальцем для переключения
//         touchMove: false, // позволяет/запрещает плавно перелистывать при зажатой картинке 
//         waitForAnimate: true, // перелистываем слайдер не дожидаясь окончания анимации
//     });
// })



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



// =================Переключение стартовой картинки при < 700==========================
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






