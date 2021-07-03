import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ScriptService } from './services/script.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-universal-heroku';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private scriptService: ScriptService) {
      this.scriptService.load('main', 'owl', 'jquery').then(data => {
        console.log('script loaded ', data);
      }).catch(error => console.log(error));
     }

    ngOnInit() {
      this.loadScript();
      const scrollLevels: { [navigationId: number]: number } = {};
      let lastId = 0;
      let restoredId: number;
  
      this.router.events.subscribe((event: RouterEvent) => {
        if (event instanceof NavigationStart) {
          scrollLevels[lastId] = window.scrollY;
          lastId = event.id;
          restoredId = event.restoredState ? event.restoredState.navigationId : undefined;
        }
  
        if (event instanceof NavigationEnd) {
          if (restoredId) {
            // Optional: Wrap a timeout around the next line to wait for
            // the component to finish loading
            window.scrollTo(0, scrollLevels[restoredId] || 0);
          } else {
            window.scrollTo(0, 0);
          }
        }
        $(document).ready(function () {
          if($('.btn-show-menu-mobile').hasClass('is-active')) {
            $('.btn-show-menu-mobile').toggleClass('is-active');
            $('.menu-mobile').slideToggle();
          }
        });
      });
  
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          };
  
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
      ).subscribe((event) => {
        this.titleService.setTitle(event['title'])
      });
    }
  
    loadScript() {
      $(document).ready(function () {
        // [ Slick1 ]
        $('.wrap-slick1').each(function () {
          var wrapSlick1 = $(this);
          var slick1 = $(this).find('.slick1');
  
  
          var itemSlick1 = $(slick1).find('.item-slick1');
          var layerSlick1 = $(slick1).find('.layer-slick1');
          var actionSlick1 = [];
  
  
          $(slick1).on('init', function () {
            var layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1');
  
            for (var i = 0; i < actionSlick1.length; i++) {
              clearTimeout(actionSlick1[i]);
            }
  
            $(layerSlick1).each(function () {
              $(this).removeClass($(this).data('appear') + ' visible-true');
            });
  
            for (var i = 0; i < layerCurrentItem.length; i++) {
              actionSlick1[i] = setTimeout(function (index) {
                $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
              }, $(layerCurrentItem[i]).data('delay'), i);
            }
          });
  
  
          var showDot = false;
          if ($(wrapSlick1).find('.wrap-slick1-dots').length > 0) {
            showDot = true;
          }
  
          $(slick1).not('.slick-initialized').slick({
            pauseOnFocus: false,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $(wrapSlick1),
            prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
            nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
            dots: showDot,
            appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
            dotsClass: 'slick1-dots',
            customPaging: function (slick, index) {
              var linkThumb = $(slick.$slides[index]).data('thumb');
              var caption = $(slick.$slides[index]).data('caption');
              return '<img src="' + linkThumb + '">' +
                '<span class="caption-dots-slick1">' + caption + '</span>';
            },
          });
  
          $(slick1).on('afterChange', function (event, slick, currentSlide) {
  
            var layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1');
  
            for (var i = 0; i < actionSlick1.length; i++) {
              clearTimeout(actionSlick1[i]);
            }
  
            $(layerSlick1).each(function () {
              $(this).removeClass($(this).data('appear') + ' visible-true');
            });
  
            for (var i = 0; i < layerCurrentItem.length; i++) {
              actionSlick1[i] = setTimeout(function (index) {
                $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
              }, $(layerCurrentItem[i]).data('delay'), i);
            }
  
          });
  
        });
  
        /*==================================================================
        [ Slick2 ]*/
        $('.wrap-slick2').each(function () {
          $(this).find('.slick2').not('.slick-initialized').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $(this),
            prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        });
  
  
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
          var nameTab = $(e.target).attr('href');
          $(nameTab).find('.slick2').slick('reinit');
        });
  
        /*==================================================================
        [ Slick3 ]*/
        $('.wrap-slick3').each(function () {
          $(this).find('.slick3').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
  
            arrows: true,
            appendArrows: $(this).find('.wrap-slick3-arrows'),
            prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
  
            dots: true,
            appendDots: $(this).find('.wrap-slick3-dots'),
            dotsClass: 'slick3-dots',
            customPaging: function (slick, index) {
              var portrait = $(slick.$slides[index]).data('thumb');
              return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
            },
          });
        });
  
        /*[ Back to top ]
        ===========================================================*/
        var windowH = $(window).height() / 2;
  
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display', 'flex');
          } else {
            $("#myBtn").css('display', 'none');
          }
        });
  
        $('#myBtn').on("click", function () {
          $('html, body').animate({ scrollTop: 0 }, 300);
        });
  
  
        /*==================================================================
        [ Fixed Header ]*/
        var headerDesktop = $('.container-menu-desktop');
        var wrapMenu = $('.wrap-menu-desktop');
        var posWrapHeader: any;
        if ($('.top-bar').length > 0) {
          posWrapHeader = $('.top-bar').height();
        }
        else {
          posWrapHeader = 0;
        }
  
  
        if ($(window).scrollTop() > posWrapHeader) {
          $(headerDesktop).addClass('fix-menu-desktop');
          $(wrapMenu).css('top', 0);
        }
        else {
          $(headerDesktop).removeClass('fix-menu-desktop');
          $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
  
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top', 0);
          }
          else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
          }
        });
  
  
        /*==================================================================
        [ Menu mobile ]*/
        $('.btn-show-menu-mobile').on('click', function () {
          $(this).toggleClass('is-active');
          $('.menu-mobile').slideToggle();
        });
        $('.has-sub-menu').on('click', function() {
          $(this).parent().find('.sub-menu-m').slideToggle();
          $(this).parent().find('.arrow-main-menu-m').toggleClass('turn-arrow-main-menu-m');
        })
        var arrowMainMenu = $('.arrow-main-menu-m');
  
        for (var i = 0; i < arrowMainMenu.length; i++) {
          $(arrowMainMenu[i]).on('click', function () {
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
          })
        }
  
        $(window).resize(function () {
          if ($(window).width() >= 992) {
            if ($('.menu-mobile').css('display') == 'block') {
              $('.menu-mobile').css('display', 'none');
              $('.btn-show-menu-mobile').toggleClass('is-active');
            }
  
            $('.sub-menu-m').each(function () {
              if ($(this).css('display') == 'block') {
                console.log('hello');
                $(this).css('display', 'none');
                $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
              }
            });
  
          }
        });
  
  
        /*==================================================================
        [ Show / hide modal search ]*/
        $('.js-show-modal-search').on('click', function () {
          $('.modal-search-header').addClass('show-modal-search');
          $(this).css('opacity', '0');
        });
  
        $('.js-hide-modal-search').on('click', function () {
          $('.modal-search-header').removeClass('show-modal-search');
          $('.js-show-modal-search').css('opacity', '1');
        });
  
        $('.container-search-header').on('click', function (e) {
          e.stopPropagation();
        });
  
  
        /*==================================================================
        [ Isotope ]*/
        var $topeContainer = $('.isotope-grid');
        var $filter = $('.filter-tope-group');
  
        // filter items on button click
        $filter.each(function () {
          $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({ filter: filterValue });
          });
  
        });
  
        // init Isotope
        $(window).on('load', function () {
          var $grid = $topeContainer.each(function () {
            $(this).isotope({
              itemSelector: '.isotope-item',
              layoutMode: 'fitRows',
              percentPosition: true,
              animationEngine: 'best-available',
              masonry: {
                columnWidth: '.isotope-item'
              }
            });
          });
        });
  
        var isotopeButton = $('.filter-tope-group button');
  
        $(isotopeButton).each(function () {
          $(this).on('click', function () {
            for (var i = 0; i < isotopeButton.length; i++) {
              $(isotopeButton[i]).removeClass('how-active1');
            }
  
            $(this).addClass('how-active1');
          });
        });
  
        /*==================================================================
        [ Filter / Search product ]*/
        $('.js-show-filter').on('click', function () {
          $(this).toggleClass('show-filter');
          $('.panel-filter').slideToggle(400);
  
          if ($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
          }
        });
  
        $('.js-show-search').on('click', function () {
          $(this).toggleClass('show-search');
          $('.panel-search').slideToggle(400);
  
          if ($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
          }
        });
  
  
  
  
        /*==================================================================
        [ Cart ]*/
        $('.js-show-cart').on('click', function () {
          $('.js-panel-cart').addClass('show-header-cart');
        });
  
        $('.js-hide-cart').on('click', function () {
          $('.js-panel-cart').removeClass('show-header-cart');
        });
  
        /*==================================================================
        [ Cart ]*/
        $('.js-show-sidebar').on('click', function () {
          $('.js-sidebar').addClass('show-sidebar');
        });
  
        $('.js-hide-sidebar').on('click', function () {
          $('.js-sidebar').removeClass('show-sidebar');
        });
  
        /*==================================================================
        [ Rating ]*/
        $('.wrap-rating').each(function () {
          var item = $(this).find('.item-rating');
          var rated = -1;
          var input = $(this).find('input');
          $(input).val(0);
  
          $(item).on('mouseenter', function () {
            var index = item.index(this);
            var i = 0;
            for (i = 0; i <= index; i++) {
              $(item[i]).removeClass('zmdi-star-outline');
              $(item[i]).addClass('zmdi-star');
            }
  
            for (var j = i; j < item.length; j++) {
              $(item[j]).addClass('zmdi-star-outline');
              $(item[j]).removeClass('zmdi-star');
            }
          });
  
          $(item).on('click', function () {
            var index = item.index(this);
            rated = index;
            $(input).val(index + 1);
          });
  
          $(this).on('mouseleave', function () {
            var i = 0;
            for (i = 0; i <= rated; i++) {
              $(item[i]).removeClass('zmdi-star-outline');
              $(item[i]).addClass('zmdi-star');
            }
  
            for (var j = i; j < item.length; j++) {
              $(item[j]).addClass('zmdi-star-outline');
              $(item[j]).removeClass('zmdi-star');
            }
          });
        });
  
        /*==================================================================
        [ Show modal1 ]*/
        $('.js-show-modal1').on('click', function (e) {
          e.preventDefault();
          $('.js-modal1').addClass('show-modal1');
        });
  
        $('.js-hide-modal1').on('click', function () {
          $('.js-modal1').removeClass('show-modal1');
        });
  
        // Select2 
        $(".js-select2").each(function () {
          $(this).select2({
            minimumResultsForSearch: 20,
            dropdownParent: $(this).next('.dropDownSelect2')
          });
        })
      });
    }
}
