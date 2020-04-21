let arr = [1,3,4,0,-1,3,2,10];

function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left, right);
}

function split(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(split(left), split(right));
}

console.log(split(arr));    