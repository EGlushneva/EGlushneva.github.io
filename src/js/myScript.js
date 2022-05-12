// let poll = confirm ("Пройдите небольшой опрос, чтобы узнать примерную стоимость Вашего сайта");

// if (poll == true) {
//     let site = prompt ("Выберите тип сайта: 1) визитка, 2) лендинг, 3) интернет магазин", [1]);

//     let design = prompt ("Выберите дизайн для Вашего сайта: 1) минимализм, 2) классический, 3) усложненный", [1]);

//     let adaptability = prompt ("Выберите вариант адаптивности для Вашего сайта: 1) фиксированный, 2) гибкий, 3) адаптивный", [1]);

//     let time = prompt ("Срок выполнения заказа: 1) до 30 дней, 2) до 14 дней, 3) срочный заказ", [1]);

//     let arrSite = [5000, 8000, 15000];
//     let arrDesign = [5000, 5000, 10000];
//     let arrAdaptability = [5000, 7000, 10000];
//     let arrTime = [5000, 10000, 15000];

//     let result = arrSite[site - 1] + arrDesign[design - 1] + arrAdaptability[adaptability - 1] + arrTime[time - 1];

//     alert (`Примерная стоимость Вашего сайта ${result} рублей`);
// } 


//НАЧАЛО

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

new WOW().init();

$(document).ready(() => {
    $(window).scroll(() => {

        let scrollDistance = $(window).scrollTop();

        $('section').each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {

                $('nav a').each((i, el) => {

                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active')
                    }
                });
                $('ul.menu li').eq(i).find('a').addClass('active');
            }
        });
    });

});

//меню
var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 'rgba(255,255,255)');
          $('.logo a').css('color', '#352C41');
          $('.menu li a').css('color', '#A16195');
          $('.menu li a.active').css('color', '#352C41');
          $('.menu li a:hover').css('color', '#352C41');
       } else {
          $('.nav').css('background-color', 'transparent');
          $('.logo a').css('color', '#fff');
          $('.menu li a').css('color', '#fff');
          $('.menu li a.active').css('color', '#fff');
          $('.menu li a:hover').css('color', '#352C41');
       }
   });

//калькулятор
$('.list').change(sum);

function sum() {
    let result = 0;
    $('#sum').find('.list').each(function () {
        let value = 0;
        if (typeof $(this).val() == 'object') {
            $.each($(this).val(), function (index, val) {
                value += val * 1;
            });
        } else {
            value = $(this).val()
        }
        result += value * 1;
    });

    $('#cost').text(result);

    if (result < 20000) {
        $('#term').text('7 дней');
    } else if (result == 20000) {
        $('#term').text('14 дней');
    } else {
        $('#term').text('10 дней');
    };
}

$('#yourEmail').click(() => {
    $('#term').text('0');
    $('#cost').text('0');
});

$("#inputPhone").mask("+7(999) 999-9999");


//Анимация цифр
var show = true;
var countbox = ".stat";
$(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;
    var w_height = $(window).height();
    var d_height = $(document).height();
    var e_height = $(countbox).outerHeight();
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.number').css('opacity', '1');
        $('.number').spincrement({
            thousandSeparator: "",
            duration: 3000
        });

        show = false;
    }
});

//Модальное окно
$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
        verticalFit: true
    }

});

//Всплывающее окнo
setTimeout(function show() {
    $('#myOverlay').css('display', 'block');
    $('#myModal').css('display', 'block').animate({ opacity: 1 }, 198);
}, 10000);

$('#myModal__close, #myOverlay').click(function () {
    $('#myModal').animate({ opacity: 0 }, 198, function () {
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
    });
});

//php
// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }