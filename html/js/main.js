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

  $("#owl-1").owlCarousel({
    navigation : false,
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

  var owl = $("#owl-2");

  owl.owlCarousel({
    items : 5, //10 items above 1000px browser width
    // itemsDesktop : [1000,5], //5 items between 1000px and 901px
    // itemsDesktopSmall : [900,5], // 3 items betweem 900px and 601px
    itemsTablet: [900,4], //2 items between 600 and 0;
    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    pagination : false
  });

  $scope.datas = [{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e4%b8%8d%e6%94%be%e6%a3%84%e4%bb%bb%e4%bd%95%e4%b8%80%e5%80%8b%e5%ad%a9%e5%ad%90-%e8%91%89%e6%83%a0%e8%8b%b1-crop-u2044.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/photo-1414502622871-b90b0bec7b1f.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e7%94%9f%e5%91%bd%e9%87%8d%e5%a1%91%e5%a5%87%e8%b9%9f-%e5%90%b3%e5%85%b8%e8%bb%92-crop-u2087.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e8%87%aa%e6%88%91%e7%99%82%e7%99%92%e7%9a%84%e7%94%9f%e5%91%bd%e6%97%85%e7%a8%8b-%e9%82%b1%e9%8c%a6%e7%99%bc-crop-u2737.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/1fa14fb0254x169.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    },{
      title: '勇敢走向天命',
      job: '周齊美/營養師',
      label: ['人生方向','健康飲食','營養師','工作','社會服務','天命頻率','洛杉磯'],
      times: 18,
      love: 520,
      watch: 1800,
      img: 'http://lightnose.businesscatalyst.com/images/%e5%8b%87%e6%95%a2%e8%b5%b0%e5%90%91%e5%a4%a9%e5%91%bd_%e5%91%a8%e9%bd%8a%e7%be%8e-crop-u5411.jpg'
    }
  ]

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
