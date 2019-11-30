let arr = [1,3,4,0,-1,3,2,10];

function mySort(arr) {
    if (arr.length <= 1) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        let temp = arr[i];
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
       }
       
       arr[i] = arr[min];
       arr[min] = temp;
    }

    return arr;
}

console.log(mySort(arr));