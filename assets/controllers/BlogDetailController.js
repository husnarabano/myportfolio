"use strict";
app.controller('BlogDetailController', function ($scope,$window,$anchorScroll,$location) {

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


   /* $scope.gotoBottom=function () {

        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('reply');

        // call $anchorScroll()
        $anchorScroll();
    }

*/
});


