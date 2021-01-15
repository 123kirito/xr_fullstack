function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}
var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string)); // true
var string = "This is not a pangram."
console.log(isPangram(string));// false