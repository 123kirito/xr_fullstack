var setZeroes = function(matrix) {
    let firstcol=false;
    let firstrow=false;
    for(let i=0;i<matrix[0].length;i++){
        if(matrix[0][i]===0){
            firstrow=true;
        }
    }
    for(let i=0;i<matrix.length;i++){
        if(matrix[i][0]===0){
            firstcol=true;
        }
    }
    for(let row=1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[row][col]===0){
                matrix[row][0]=0;
                matrix[0][col]=0;
            }
        }
    }
    for(let row=1;row<matrix.length;row++){
        for(let col=1;col<matrix[0].length;col++){
            if(matrix[row][0]===0||matrix[0][col]===0){
                matrix[row][col]=0;
            }
        }
    }

    if(firstcol){
        for(let i=0;i<matrix.length;i++){
            matrix[i][0]=0;
        }
    }
    if(firstrow){
        for(let i=0;i<matrix[0].length;i++){
            matrix[0][i]=0;
        }
    }
    return matrix
};
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))