var myApp = angular.module('myApp', ['ngRoute']);

// myApp.run(['$rootScope', '$timeout', function($rootScope,$timeout) {
//   $rootScope.$on('$viewContentLoaded', ()=> {
//     $timeout(() => {
//       componentHandler.upgradeAllRegistered();
//     })
//   })
// }]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    controller: 'HomeCtrl',
    templateUrl: 'templates/home.html'
  }).otherwise({
    redirectTo: '/home'
  });
}])

myApp.controller('BodyCtrl', ['$scope', function($scope){
  $scope.MenuDatas = [
    {name: '關於光鼻子'},
    {name: '5am'},
    {name: '智慧解題'},
    {name: '生命模式解析'},
    {name: '生命實錄分享'},
    {name: 'BLOG'},
    {name: '電子書'}
  ]
}]);

myApp.controller('HomeCtrl', ['$scope', function($scope){

  $("#owl-demo").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    autoPlay : 5000,
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : true
  });

}]);

myApp.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    console.log($window);
    angular.element($window).bind("scroll", function() {
      console.log(this.pageYOffset);
      // if (this.pageYOffset >= 500 && this.pageYOffset <= 900) {
      //   scope.animate = true;
      // } else {
      //   scope.animate = false;
      // };
      //   //  if (this.pageYOffset >= 100) {
      //   //      scope.boolChangeClass = true;
      //   //      console.log('Scrolled below header.');
      //   //  } else {
      //   //      scope.boolChangeClass = false;
      //   //      console.log('Header is in view.');
      //   //  }
        scope.$apply();
    });
  };
});
