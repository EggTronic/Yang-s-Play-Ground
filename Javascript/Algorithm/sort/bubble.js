let arr = [1,3,4,0,-1,3,2,10];

function mySort(arr) {
    if (arr.length <= 1) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }

    return arr;
}

console.log(mySort(arr));