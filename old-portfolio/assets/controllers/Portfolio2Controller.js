"use strict";
app.controller('Portfolio2Controller', function ($scope,$window,$timeout) {

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
    
//Header_portfolio  start*/
    $scope.breakpoints = [, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
    ];
    // Header_portfolio ends*/
});


