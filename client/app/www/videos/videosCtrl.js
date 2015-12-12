/**
 * Created by iallai on 11/12/2015.
 */
app.controller('videos.list', function ($rootScope,$scope,Articles,TestData) {
  Articles.query().success(function(){
  }).error(function(){
    $scope.models=TestData.articles();
  });
});
app.controller('videos.detail', function ($rootScope,$scope,Articles,TestData,$sce) {
  Articles.get().success(function(){

  }).error(function(){
    $scope.model=TestData.article();

    $scope.model.video=$sce.trustAsHtml($scope.model.video)
  });
});
