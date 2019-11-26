let arr = [1,3,4,0,-1,3,2,10];

function mySort(arr) {
    if (arr.length <= 1) {
        return false;
    }

    for (let i = 1; i < arr.length; i++) {
        let index = i - 1;
        let current = arr[i];
        while (index >= 0 && current < arr[index]) {
            arr[index + 1] = arr[index];
            index--;
        }
        arr[index + 1] = current;
    }

    return arr;
}

console.log(mySort(arr));