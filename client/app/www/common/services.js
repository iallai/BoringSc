/**
 * Created by iallai on 11/12/2015.
 */

app.factory('Articles', function ($http) {

  return {

    query: function (query) {
      return $http.get(window.$MY.$URL + "/articles", {params: query});
    },
    del: function (id) {
      return $http.delete(window.$MY.$URL  + "/articles/"+id);
    },
    get: function (id) {

      return $http.get(window.$MY.$URL  + "/articles/"+id);
    },
    add: function (article) {
      return $http.post(window.$MY.$URL  + "/articles", {article: article})
    },
    update: function (article) {
      return $http.put(window.$MY.$URL  + "/articles", {article: article})

    }

  }
});
app.factory('Tags', function ($http) {

  return {

    query: function (query) {
      return $http.get(window.$MY.$URL + "/tags", {params: query});
    },
    del: function (id) {
      return $http.delete(window.$MY.$URL  + "/tags/"+id);
    },
    get: function (id) {

      return $http.get(window.$MY.$URL  + "/tags/"+id);
    },
    add: function (tag) {
      return $http.post(window.$MY.$URL  + "/tags", {tag: tag})
    },
    update: function (tag) {
      return $http.put(window.$MY.$URL  + "/tags", {tag: tag})

    }

  }
});
app.factory('Comments', function ($http) {

  return {

    query: function (query) {
      return $http.get(window.$MY.$URL + "/comments", {params: query});
    },
    del: function (id) {
      return $http.delete(window.$MY.$URL  + "/comments/"+id);
    },
    get: function (id) {

      return $http.get(window.$MY.$URL  + "/comments/"+id);
    },
    add: function (comment) {
      return $http.post(window.$MY.$URL  + "/comments", {comment: comment})
    },
    update: function (comment) {
      return $http.put(window.$MY.$URL  + "/comments", {comment: comment})

    }

  }
});

app.factory('TestData',function(){

  var data =  Mock.mock({
    'articles|1-12': [{
      'title':'@title',
      'id|+1': 1,
      'publishTime': '@datetime',
      'fav':'@integer(10,100)',
      'author':'@name',
      'thumb':'@dataImage("80x80")',
      'type':'@integer(1,4)'
    }]

  });

  return {

    articles: function () {


      return data.articles;
    }

  }

})


