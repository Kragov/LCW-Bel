(function ($) {
    $(document).ready(function (){

        //Карусель скидок

        $('.lcw-sales-slider').owlCarousel({
            items: 1,
            nav: true,
            loop: true,
            autoHeight: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });

        // Описываем функцию, которая убирает навигацию на определённом расстоянии скролла вниз
    

        let prevWindPos = 0;

        $(window).on('scroll', function () {

            let curWindPos = $(window).scrollTop()

            if (curWindPos > 200) {

                $('.navbar').toggleClass('hidden', curWindPos > prevWindPos)
                prevWindPos = curWindPos
            }
        });

        //Плавный скролл

        let lcwNav = $('.navbar')

        lcwNav.find('a').click(function (e) {
            let linkTrgt = $($(this).attr('href'))

            if (linkTrgt.length > 0) {

                e.preventDefault()

                let offset = linkTrgt.offset().top

                $('body, html').animate({
                        scrollTop: offset
                    }, 750)
            }
        })

        // let ADRESSES_OF_SHOPS = ['<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9a6fe69fbb0c76ae3d7ac9dbccdb4a5c1e9f2cf3ad327ba9d45e09f600f2441&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A264c2d185b2bc2720c1e424338947a746f016d2426316d02f37ffeabad7f3b26&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A432364169df60e9a4ea406f3bb91ce67f0c49d4720a9765528167fff438192db&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ce53f53abff6f95b5d41451433d92e4e9a7e7da21e13789487e3b2d26e6d831&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf6f7c0337cc7a2efa42ce671e65c0bdc42cf561f99070a6feba235a24c030db&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A05f541b62b5eb2cebd568b9b8e5e1bd112bb66f0febd806b611e6c119457f36a&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A23b273fba87818be4f586c5d549f06b2e200fa3954e623cf665ca6f968be758d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A666e55748ac45690cbae93c8394dc6f5a4d2831ed0d77878925d0010f87e1c7f&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62b60133a6e8403ab98ae283643782b3ed7d83e3296bc8caec43551bf8e8aa6b&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3f26771b1fc3cdf7e457dfcc24c4fc1ade37884739e27b5b2f57143da56ffdec&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac33fa2cbf03db857f7364310fba197d4625b5462533fac05d8ec7e4a909569d&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afcefaabef6d266f0450d09c17425a9a159b7882d8ff9c0175be19fdab0fa5048&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A747d2ecca5154ae28dc743cb6323d0aff75012133471cba72c4de253f14975aa&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>',
        //                          '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6fdf040a72fd57039175dfd77cf697b63bf3ce7eea731a641de783198b7905c9&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>']

        // Яндекс.Карта



        // $('.show-map').click(function () {
        //
        //     let nameOfShop = $('.shops').val()
        //
        //     console.log(nameOfShop)
        //
        //     $.fn.lcwMapInit = function () {
        //
        //         let ADRESSES_OF_SHOPS = {
        //             outlet: {
        //                 coords: [53.876664, 27.517885],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Аутлет',
        //                     balloonContentFooter: 'Минск, просп. Жукова, 44'
        //                 }
        //             },
        //             expo: {
        //                 coords: [53.964145, 27.623888],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Экспобел',
        //                     balloonContentFooter: 'Минск, Пересечение Логойского тракта и МКАД'
        //                 }
        //             },
        //             magnit: {
        //                 coords: [53.883520, 27.448046],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Магнит',
        //                     balloonContentFooter: 'Минск, ул. Шаранговича, 25'
        //                 }
        //             },
        //             skala: {
        //                 coords: [53.908291, 27.470520],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Скала',
        //                     balloonContentFooter: 'Минск, ул. Петра Глебки, 5'
        //                 }
        //             },
        //             gallery: {
        //                 coords: [53.908521, 27.548424],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Галлерея',
        //                     balloonContentFooter: 'Минск, просп. Победителей, 9'
        //                 }
        //             },
        //             galileo: {
        //                 coords: [53.890554, 27.553826],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Галилео',
        //                     balloonContentFooter: 'Минск, ул. Бобруйская, 6'
        //                 }
        //             },
        //             momo: {
        //                 coords: [53.859902, 27.674133],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Момо',
        //                     balloonContentFooter: 'Минск, просп. Партизанский, 150А'
        //                 }
        //             },
        //             mogEvro: {
        //                 coords: [53.880124, 30.317341],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Могилёв Евроопт',
        //                     balloonContentFooter: 'Могилёв, ул. Гагарина, 79'
        //                 }
        //             },
        //             mogParkCity: {
        //                 coords: [53.935638, 30.257639],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Могилёв Парк Сити',
        //                     balloonContentFooter: 'Могилёв, микрорайон Казимировка, Минское шоссе, 31'
        //                 }
        //             },
        //             brCUM: {
        //                 coords: [52.085570, 23.694472],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Брест ЦУМ',
        //                     balloonContentFooter: 'Брест, просп. Машерова, 17'
        //                 }
        //             },
        //             brEvro: {
        //                 coords: [52.075419, 23.717976],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Брест Евроопт',
        //                     balloonContentFooter: 'Брест, Варшавское шоссе, 11'
        //                 }
        //             },
        //             gomSecret: {
        //                 coords: [52.424160, 30.996746],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Гомель Секрет',
        //                     balloonContentFooter: 'Гомель, ул. Гагарина, 65'
        //                 }
        //             },
        //             polManej: {
        //                 coords: [55.472480, 28.748997],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Полоцк Манеж',
        //                     balloonContentFooter: 'Полоцк, Вильнюсское шоссе, 1'
        //                 }
        //             },
        //             grOldCity: {
        //                 coords: [53.701694, 23.835179],
        //                 hints: {
        //                     iconCaption: 'LC Waikiki Гродно Олд Сити',
        //                     balloonContentFooter: 'Гродно, ул. Дубко, 17'
        //                 }
        //             },
        //             hints: {
        //                 hintContent: 'Магазин LC Waikiki',
        //                 balloonContentHeader: 'LC Waikiki',
        //                 balloonContentBody: 'Магазин модной одежды',
        //             }
        //         };
        //
        //         let lcwMap = new ymaps.Map('lcw-map-popup', {
        //             center: ADRESSES_OF_SHOPS[nameOfShop].coords,
        //             zoom: 16
        //         });
        //
        //         let lcwPlacemark = new ymaps.Placemark(ADRESSES_OF_SHOPS[nameOfShop].coords, Object.assign(ADRESSES_OF_SHOPS.hints, ADRESSES_OF_SHOPS[nameOfShop].hints))
        //
        //         lcwMap.geoObjects.add(lcwPlacemark)
        //     };
        //
        // })
        //
        //
        // $('.show-map').magnificPopup({
        //     type: 'inline',
        //
        //     callbacks: {
        //         close: function () {
        //             lcwMap.destroy
        //         }
        //     }
        //
        // })
        // $('#lcw-map-popup').html('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9a6fe69fbb0c76ae3d7ac9dbccdb4a5c1e9f2cf3ad327ba9d45e09f600f2441&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>')


    })
})(jQuery);