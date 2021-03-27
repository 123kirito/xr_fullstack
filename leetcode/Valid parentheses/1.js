var isValid = function(s) {
    const maps=new Map();
    maps.set("(",")");
    maps.set("[","]");
    maps.set("{","}");

    const stack=[];
    for(let i=0;i<s.length;i++){
        if(maps.has(s[i])){
            stack.push(maps.get(s[i]));
        }else{
            if(stack.pop()!==s[i]){
                return false;
            }
        }
    }
    if(stack.length!==0){
        return false;
    }
    return true;
};
console.log(isValid("([)]"))