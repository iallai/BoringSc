
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise("/videos");

  $stateProvider
    .state('videos', {
      abstract: true,
      url: '/videos',
      template:"<ui-view></ui-view>"
    })


    .state('videos.list', {
      url: '',
      controller:'videos.list',
      templateUrl: window.$MY.$VIEWURL+"videos/videos.list.html"

    })
    .state('videos.detail', {
      url: '/{id}',
      controller:'videos.detail',
      templateUrl: window.$MY.$VIEWURL+"videos/videos.detail.html"

    })



});
