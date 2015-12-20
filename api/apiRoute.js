/**
 * 路由模块
 * @returns {*[]}
 */

//引用各种controllers
var articleCtrl=require("./controllers/articleCtrl");
console.dir(articleCtrl);


exports.route = function () {
    return [
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                reply('hello this is api Server!');
            }
        },


        //文章
        {
            method: 'GET',
            path: '/api/articles',
            handler: articleCtrl.list
        },
        {
            method: 'GET',
            path: '/{name}',
            handler: function (request, reply) {
                reply('api, ' + encodeURIComponent(request.params.name) + '!');
            }
        }
    ];
};