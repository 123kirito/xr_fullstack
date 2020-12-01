const fs=require('fs');

fs.readFile('./野马.jpg',function(err,data){
    //console.log(err);
    if(err){
        throw new Error(err)
        return;
    }
    console.log(data)
})