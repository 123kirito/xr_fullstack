var name='world';
(function(){
    if(typeof name==='undefined'){
        var name='Jack'
        console.log('goodbye'+name);
    }else{
        console.log('hello'+name)
    }
})()