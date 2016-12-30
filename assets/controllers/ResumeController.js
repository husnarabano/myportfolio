"use strict";
app.controller('ResumeController', function ($scope,$window,$timeout) {



    /*Preloader Starts*/
    angular.element($window).bind('load', function() {

        angular.element('#main_loader').fadeOut('slow');
    });
    /*Preloader Ends*/

    /*Mobile sidebar start*/
    $scope.className="";
    $scope.ShowHide = function ()
    {

        $scope.e= document.getElementById("myDIV");
        if($scope.e.style.left == '-94px')
        {

            $scope.e.style.left = "0px";
            $scope.className = "open";
        }
        else if($scope.e.style.left == '0px')
        {

            $scope.e.style.left = "-94px";
            $scope.className = "";
        }

    };
    /*Mobile sidebar end*/

    // Testimonial start*/
    $scope.breakpoints = [, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 3
        }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }

    ];
     // Testimonial ends*/

    /*round progress start*/
    $scope.current =93;
    $scope.current1 =90;
    $scope.current2 =100;
    $scope.max = 100;
    $scope.isSemi =false;
    $scope.getStyle = function(){
        var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': $scope.isSemi ? 'auto' : '40%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-weight': '400',
            'font-size': '24px'
        };
    };

    $scope.showPreciseCurrent = function(amount){

        $timeout(function(){

            if(amount <= 0){

                $scope.preciseCurrent = $scope.current;
            }else{

                var math = $window.Math;
                $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
            }
        });
    };
    $scope.showPreciseCurrent1 = function(amount){

        $timeout(function(){

            if(amount <= 0){

                $scope.preciseCurrent1 = $scope.current1;
            }else{

                var math = $window.Math;
                $scope.preciseCurrent1 = math.min(math.round(amount), $scope.max);
            }
        });
    };
    $scope.showPreciseCurrent2 = function(amount){

        $timeout(function(){

            if(amount <= 0){

                $scope.preciseCurrent2 = $scope.current2;
            }else{

                var math = $window.Math;
                $scope.preciseCurrent2 = math.min(math.round(amount), $scope.max);
            }
        });
    };
    /*round progress end*/


});


