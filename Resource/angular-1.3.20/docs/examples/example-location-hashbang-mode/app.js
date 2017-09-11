(function(angular) {
  'use strict';
angular.module('hashbang-mode', ['fake-browser', 'address-bar'])

.constant('initUrl', 'http://www.example.com/base/home.html#!/path?a=b#h')
.constant('baseHref', '/base/home.html')
.value('$sniffer', { history: false })

.config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
})

.controller("LocationController", function($scope, $location) {
  $scope.$location = {};
  angular.forEach("protocol host port path search hash".split(" "), function(method){
    $scope.$location[method] = function(){
      var result = $location[method].call($location);
      return angular.isObject(result) ? angular.toJson(result) : result;
    };
  });
})

.run(function($rootElement) {
  $rootElement.on('click', function(e) {
    e.stopPropagation();
  });
});
})(window.angular);