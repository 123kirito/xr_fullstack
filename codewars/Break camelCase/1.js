function solution(string) {
    return string.replace(/([A-Z])/g, " $1");
    console.log(string);
}
console.log(solution("camelCasing"));