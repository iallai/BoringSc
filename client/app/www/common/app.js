angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
var app =angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

if(window.location.hostname=='localhost'){
  window.$MY={
    $URL:'http://localhost:8000'
  };



}else {
  window.$MY={
    $URL:''
  };
}


//Init

