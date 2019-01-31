(function ($) {
    $(document).ready(function () {

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

            let curWindPos = $(window).scrollTop();

            if (curWindPos > 200) {

                $('.navbar').toggleClass('hidden', curWindPos > prevWindPos)
                prevWindPos = curWindPos
            }
        });

        //Плавный скролл

        let lcwNav = $('.navbar');

        lcwNav.find('a').click(function (e) {
            let linkTrgt = $($(this).attr('href'))

            if (linkTrgt.length > 0) {

                e.preventDefault();

                let offset = linkTrgt.offset().top;

                $('body, html').animate({
                    scrollTop: offset
                }, 750)
            }
        });

        // Яндекс.Карта


        $.fn.lcwMapInit = function () {
            
            let lcwMapOptions = {
                center: [53.903459, 27.560089],
                zoom: 12,
                controls: ['fullscreenControl', 'zoomControl']                
            }
            
            if (window.innerWidth < 768) {
                lcwMapOptions.behaviors = ['multiTouch'];
            } else {
                lcwMapOptions.behaviors = ['drag'];
            }

            let lcwGlobalMap = new ymaps.Map('all-shops-map', lcwMapOptions),
                ObjectManager = new ymaps.ObjectManager({
                    clusterize: true
                });            
            
            lcwGlobalMap.geoObjects.add(ObjectManager);

            $.ajax({
                url: "json/adresses.json"
            }).done(function (data) {
                ObjectManager.add(data)
            })

            $('.show-map').click(function () {

                let jsonShops = $.ajax({
                    url: 'json/adresses.json',
                    dataType: 'json'
                }).done(function (data) {

                    let shopId = $('.shops').val()

                    lcwGlobalMap.setCenter(data.features[parseInt(shopId)].geometry.coordinates, 15)

                })

            })

        };

        //Окно обратной связи  https://github.com/dmitry-markevich/wi-feedback


        $('#lcw-fb').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.communicate-btn',
            fbColor: '#595fff'
        })
        
        
    })
})(jQuery);