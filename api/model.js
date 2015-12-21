//const orm=require("orm");
//const $connStr="mongodb://127.0.0.1/BoringSrc";

const $article=require("./models/article.js");


/**
 * 初始化模型
 */
module.exports=(function(){
    var model={};
    new Promise(function(res,rej){
        orm.connect($connStr, (err, db) =>{
            if (err) throw err;
            model.article=db.define('article',$article);
            res();
        });
    }).then(()=>{
        console.log("db connection OK!");
        return model;
    });
    return model;
}());