/**
 * Created by aaron on 2016-05-23.
 */

    var app = angular.module('app', []);
    app.controller('myCtrl', function($scope) {
        // Controller stuff
        $scope.activePage = {
            templateUrl: 'about-me/about-me.html'
        }
    });
