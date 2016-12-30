"use strict";
app.controller('BlogController', function ($scope,$window) {

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

    /*Loadmore btn start*/
    var pagesShown = 1;
    var pageSize = 2;

    $scope.showMoreItems = function() {

        pagesShown = pagesShown + 1;
        $(".let_show:hidden").slice(0, 2).slideDown();
        var inputCount =$('#show_ID div.let_show').length;
        if(pagesShown > (inputCount / pageSize)){

            angular.element('#loadMore').css('opacity','0.5');
            angular.element('#loadMore').css('cursor','not-allowed');
        }

    };
    /*Loadmore btn end*/

});


