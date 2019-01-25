"use strict";
app.controller('MainController', function ($scope,$window,$timeout) {

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

    /*HomePage Icons start*/
    $scope.showFb=function(){
        angular.element('.facebook_icon').addClass('facebook_iconHover');
    };
    $scope.hideFb=function(){
        angular.element('.facebook_icon').removeClass('facebook_iconHover');
    };

    $scope.showTweeter=function(){
        angular.element('.twitter_icon').addClass('twitter_iconHover');
    };
    $scope.hideTweeter=function(){
        angular.element('.twitter_icon').removeClass('twitter_iconHover');
    };

    $scope.showPin=function(){
        angular.element('.pin_icon').addClass('pin_iconHover');
    };
    $scope.hidePin=function(){
        angular.element('.pin_icon').removeClass('pin_iconHover');
    };

    $scope.showLinkedin=function(){
        angular.element('.linkedin_icon').addClass('linkedin_iconHover');
    };
    $scope.hideLinkedin=function(){
        angular.element('.linkedin_icon').removeClass('linkedin_iconHover');
    };
    /*HomePage Icons end*/




    /*Magnific Pop-Up Js start*/
    angular.element('.video_modal').magnificPopup({

        type: 'iframe',
        closeOnBgClick: false,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        },
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
    /*Magnific Pop-Up Js end*/

    /*round progress start*/
    $scope.current =93;
    $scope.current1 =84;
    $scope.current2 =72;
    $scope.current3 =65;
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
    $scope.showPreciseCurrent3 = function(amount){

        $timeout(function(){

            if(amount <= 0){

                $scope.preciseCurrent3 = $scope.current3;
            }else{

                var math = $window.Math;
                $scope.preciseCurrent3 = math.min(math.round(amount), $scope.max);
            }
        });
    };
/*Round progress end*/


});

