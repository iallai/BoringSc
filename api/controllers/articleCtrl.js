var model=require("../model");

module.exports = (function(){
    return {
        list: function (request, response) {
            var article=model.article;
            article.find({}, function(err, results) {
               return response(results);
            });
        },
        detail: function (request, response) {

        },
        save: function (request, response) {
            //ID=0 or undefined or null 新增
            //否则 更新
        },
        delete: function (request, response) {

        }
    };
}());