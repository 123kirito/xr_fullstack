function isPangram(string){
    for(let i = 65; i <= 90; i++){
        if(string.toUpperCase().indexOf(String.fromCharCode(i)) == -1){
            return false;
        }
    }
    return true;
}
var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); // true
var string = "This is not a pangram."
console.log(isPangram(string));// false