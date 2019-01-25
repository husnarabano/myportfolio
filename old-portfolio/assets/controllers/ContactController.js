"use strict";
app.controller('ContactController', function ($scope,$window,$timeout) {

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

    /*Map section start*/
    $scope.map = {
        center: {
            latitude: 21.2334329,
            longitude: 72.86372
        },
        zoom: 15

    };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
        id: 0,
        coords: {
            latitude: 21.2334329,
            longitude: 72.86372
        },

    };
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
        if (_.isEqual(newVal, oldVal))
            return;
        $scope.coordsUpdates++;
    });
    $timeout(function () {
        $scope.marker.coords = {
            latitude: 21.2334329,
            longitude: 72.86372
        };
        $scope.dynamicMoveCtr++;
        $timeout(function () {
            $scope.marker.coords = {
                latitude: 21.2334329,
                longitude: 72.86372
            };
            $scope.dynamicMoveCtr++;
        }, 2000);
    }, 1000);
    /* Map section end*/
 /* Contact form start*/
    $scope.send_form=function()
    {
        
        $scope.CFName;
        $scope.CNO;
        $scope.CEmail;
        $scope.CMessage;
    
        //Firstname
        $scope.CFName=$scope.ContactFName;
        
        if ($scope.CFName == undefined || $scope.CFName == "") {
            
            angular.element('#first_name').focus();
            angular.element('#first_name').attr("placeholder", "Name is must required..");
            return false;
        }
        // //Contact number     
        $scope.CNO=$scope.ContactNO;        
        $scope.no=angular.isNumber($scope.CNO);

        if ($scope.CNO == undefined || $scope.CNO == "") {
            
            angular.element('#contact_no').focus();
            angular.element('#contact_no').attr("placeholder", "Contact number is must required..");
            return false;
        }
        else if($scope.no== false)
        {
            
                
                alert('Please enter the phone number in digit');
                angular.element('#contact_no').attr("placeholder", "Phone number must in digit");
                return false;
            
        }
        // //Email      
        $scope.CEmail=$scope.ContactEmail;
    
        if ($scope.CEmail == undefined || $scope.CEmail == "") {
            
            angular.element('#contact_email').focus();
            angular.element('#contact_email').attr("placeholder", "Email address is must required");
            return false;
        }
        else
        {
            
            $scope.atpos = $scope.CEmail.indexOf("@");
            $scope.dotpos = $scope.CEmail.lastIndexOf(".");
            if ($scope.atpos<1 || $scope.dotpos<$scope.atpos+2 || $scope.dotpos+2>=$scope.CEmail.length) {
                alert("Not a valid e-mail address");
                $("input#contact_email").focus();
                $("input#contact_email").attr("placeholder", "Please enter valid email address");
            return false;
            }
        }
        //Message
        $scope.CMessage=$scope.ContactMessage;
    
        if ($scope.CMessage == undefined || $scope.CMessage == "") {
            
            angular.element('#contact_message').focus();
            angular.element('#contact_message').attr("placeholder", "Message field is required");
            return false;
        }
        
        //Datastring pass to mail.php
        $scope. dataString = '&Name=' + $scope.CFName + '&contact_no=' + $scope.CNO + '&email=' + $scope.CEmail + '&message=' + $scope.CMessage;
        $scope. form = $(this);
        var str = $scope.form.serialize(); 
        $.ajax({
        type: "POST", url: "mail/mail.php", data: $scope.dataString, success: function() {
            alert('Thanks for your contact. Our team contact you soon as possible');
            $(".submit_contact").attr('disabled','true');
            }
        });

    } 
   /* Contact form end*/

});


