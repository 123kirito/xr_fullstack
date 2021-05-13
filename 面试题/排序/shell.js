const shellSort = arr => {
    const length = arr.length;
    if (length <= 1) return;
    let interval = parseInt(length / 2);
    while (interval >= 1) {
        for(let i=interval; i< length; i++){
            let temp = arr[i];
            let j = i;
            while (arr[j-interval] > temp && j >= interval) {
                arr[j] = arr[j-interval]
                j -= interval
            }
            arr[j] = temp;
        }
        interval = parseInt(interval / 2);
    }
}

let a = [4, 5, 7, 9, 1, 2, 3];
shellSort(a);
console.log(a)