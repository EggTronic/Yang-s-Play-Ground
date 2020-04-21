let arr = [1,3,4,0,-1,3,2,10];

function mySort(arr, left, right) {
    if (arr.length <= 1 || left >= right) {
        return arr;
    }

    let pivote = arr[left];
    let i = left;
    let j = right;

    while (i < j) {
        while (i < j && arr[j] >= pivote) {
            j--;
        }
        while (i < j && arr[i] <= pivote) {
            i++;
        }
    
        if (i < j) {
            let temp = arr[i] 
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    arr[left] = arr[i];
    arr[i] = pivote;

    mySort(arr, left, i - 1);
    mySort(arr, i + 1, right); 

    return arr;
}

console.log(mySort(arr, 0, arr.length-1));