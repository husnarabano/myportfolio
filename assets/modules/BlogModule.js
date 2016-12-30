"use strict";
var app=angular.module('blog', []);

/*Directive for  scroll to reply Div*/
app.directive('scrollOnClick', function() {

    return {
        restrict: 'A',
        link: function(scope, elm) {

            var target = angular.element("#reply");
            elm.on('click', function() {

                $("html,body").stop().animate({scrollTop: target.offset().top}, "slow");
            });

        }
    }
});

/*Directive for  reset window height */
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
