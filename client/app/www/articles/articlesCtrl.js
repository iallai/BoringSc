/**
 * Created by iallai on 11/12/2015.
 */
app.controller('articles.list', function ($rootScope,$scope,Articles) {
  Articles.query();
});
