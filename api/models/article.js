module.exports=function(){
  return {
      'title':String,
      'id': { type: 'integer' },
      'publishTime': {type:"date"},
      'fav':{ type: 'integer' },
      'author':String,
      'thumb':{type:"date"},
      'type':{ type: 'integer' },
      'detail':{ type: 'text' },
      'video':{ type: 'text' }

  };
};