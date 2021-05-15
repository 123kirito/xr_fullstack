const countingSort = arr => {
    const length = arr.length;
    if (length <= 1) return;

    let count = new Array(Math.max(...arr) + 1).fill(0)
    for (let i = 0; i < length; i++) {
        count[arr[i]]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1]
    }

    let output = new Array(length);
    for (let i = length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i]
        count[arr[i]]--
    }
    return output
}

const bucketSort = (arr, num) => {
    const length = arr.length;
    if (length <= 1) return;

    let bucket = new Array(num)
    for (let i = 0; i < length; i++) {
        let index = parseInt(arr[i] / num)
        if (index >= num) {
            index = num - 1
        }
        if (!bucket[index]) {
            bucket[index] = []
        }
        bucket[index].push(arr[i])
    }
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i]) {
            bucket[i] = bucket[i].sort((a, b) => a - b)
        }
    }
    let output = [];
    for(let i = 0; i< bucket.length; i++){
        if (bucket[i]) {
            output = output.concat(bucket[i])
        }
    }
    return output
}

let a = [34, 25, 77, 99, 12, 52, 63, 38, 36, 2, 9, 6,];
newArr = bucketSort(a, 20);
console.log(newArr)