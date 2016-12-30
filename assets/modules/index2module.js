"use strict";
var app=angular.module('index2Resume', ['angular-svg-round-progressbar']);

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


/*Directive for add class in roundProgress Div */
app.directive('round', function ($window) {

    return {
        link: function (scope, element) {

            var m = angular.element($window);

            if (m.innerWidth()< 768) {

                angular.element('.add_round').addClass("abc");
            }



        }
    };
});




