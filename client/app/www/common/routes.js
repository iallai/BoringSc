
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


  $locationProvider.hashPrefix('!');

  $urlRouterProvider.otherwise("/videos");

  $stateProvider
    .state('videos', {
      abstract: true,
      url: '/videos',
      templateUrl: window.$MY.$VIEWURL+"aside/menu.html"

    })


    .state('videos.list', {
      url: '',

      views:{
        'content':{
          controller:'videos.list',
          templateUrl: window.$MY.$VIEWURL+"videos/videos.list.html"

        }


      }

    })
    .state('videos.detail', {
      url: '/{id}',

      views:{
        'content':{
          controller:'videos.detail',
          templateUrl: window.$MY.$VIEWURL+"videos/videos.detail.html"

        }


      }


    })



});
