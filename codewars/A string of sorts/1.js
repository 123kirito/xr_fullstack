function sortString(str,order) {
    let res = [];
    for (let i in order){
        while(str.includes(order[i])){
            res.push(order[i]);
            str = str.replace(order[i],'');
        }
    }
    
    return (res.join('') + str);
    }
    console.log(sortString("foos","of"));