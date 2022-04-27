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
$(function() {

    var pathname_url = window.location.pathname;
    var href_url = window.location.href;

    $(".menu").each(function () {

        var link = $(this).find("a").attr("href");

        if(pathname_url == link || href_url == link) {

            $('.menu li').addClass("active");

        }

    });

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
        $('#term').text('30 дней');
    };
}

$('#yourEmail').click(() => {
    prompt('Укажите Ваш e-mail');
    $('#term').text('0');
    $('#cost').text('0');
});


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
    $('#myModal').css('display', 'block').animate({opacity: 1}, 198);
}, 15000);

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });