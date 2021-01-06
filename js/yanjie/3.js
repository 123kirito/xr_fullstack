function duplicateCount(word){
    //Map  JSONObject  es6里的定义的新的数据结构有哪些？
    let map = new Map();//数据结构 es6 提供 HashMap
    //key=> value for O(n) O(1) Redis ElasticSearch
    //时间复杂度
    for(let char of word){
      if(map.has(char)){
        map.set(char,map.get(char)+1);
      }
      else{
        map.set(char,1);
      }
    }
    return map;
}
 console.log(duplicateCount('aadsdjfwuhh'));