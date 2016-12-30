"use strict";
var app=angular.module('MainResume', ['ngAnimate']);

/*Directive for  counter*/
app.directive("countTo", ["$timeout","$window", function(a,$window) {

    return {
        replace: !1,
        scope: !0,

        link: function(b, c, d,scope, element) {
            
            
           var m = angular.element($window);

            if (m.innerWidth() >= 768) {
              
               var executed = false;
                 $(window).load(function() {
                if(!executed)
                {


                    var hT = $('.CounterS').offset().top,
                        hH = $('.CounterS').outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();
                    if (wS > (hT+hH-wH)){

                        executed = true;
                        var e, f, g, h, i, j, k, l = c[0],num,
                            m = function() {

                                if(d.countTo % 1 == 0 )
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                                else if(d.countTo.match(","))
                                {

                                    num=d.countTo.replace(/\,/g,''),
                                        d.countTo=num,
                                        f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }
                                else if(d.countTo % 1 !== 0)
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseFloat(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                            },
                            n = function() {

                                b.timoutId = a(function() {

                                    e += k,
                                        i++,
                                        i >= h ? (a.cancel(b.timoutId),
                                            e = j,
                                            l.innerText = j) : (l.innerText = Math.round(e),
                                            n())
                                }, f)
                            },

                            o = function() {
                                b.timoutId && a.cancel(b.timoutId), m(), n()
                            };
                        return d.$observe("countTo", function(a) {

                            a && o()
                        }), d.$observe("value", function() {

                            o()
                        }), !0
                    }
                }
                });
            }
            else{
               var executed = false;
                $(window).scroll(function() {

                if(!executed)
                {


                    var hT = $('.CounterS').offset().top,
                        hH = $('.CounterS').outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();
                    if (wS > (hT+hH-wH)){

                        executed = true;
                        var e, f, g, h, i, j, k, l = c[0],num,
                            m = function() {

                                if(d.countTo % 1 == 0 )
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                                else if(d.countTo.match(","))
                                {

                                    num=d.countTo.replace(/\,/g,''),
                                        d.countTo=num,
                                        f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseInt(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }
                                else if(d.countTo % 1 !== 0)
                                {

                                    f = 30,
                                        i = 0,
                                        b.timoutId = null,
                                        j = parseFloat(d.countTo) || 0,
                                        b.value = parseInt(d.value, 10) || 0,
                                        g = 1e3 * parseFloat(d.duration) || 0,
                                        h = Math.ceil(g / f),
                                        k = (j - b.value) / h,
                                        e = b.value
                                }

                            },
                            n = function() {

                                b.timoutId = a(function() {

                                    e += k,
                                        i++,
                                        i >= h ? (a.cancel(b.timoutId),
                                            e = j,
                                            l.innerText = j) : (l.innerText = Math.round(e),
                                            n())
                                }, f)
                            },

                            o = function() {
                                b.timoutId && a.cancel(b.timoutId), m(), n()
                            };
                        return d.$observe("countTo", function(a) {

                            a && o()
                        }), d.$observe("value", function() {

                            o()
                        }), !0
                    }
                }
            });
            }

        }
    }
}]);

/*Directive for  rest window hight */
app.directive('banner', function ($window) {

    return {
        link: function (scope, element) {

            var m = angular.element($window);

            if (m.innerWidth()<= 1340) {

                angular.element('body nav').css('left','-94px');
            }

            else{

                angular.element('body nav').css('left','0');
            }
        }
    };
});





