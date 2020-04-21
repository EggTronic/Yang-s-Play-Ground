def partition(arr, left, right):
    flag = arr[right]
    while left < right:
        while left < right and arr[left] <= flag:
            left += 1
        arr[right] = arr[left]
        while left < right and arr[right] >= flag:
            right -= 1
        arr[left] = arr[right]
    arr[left] = flag
    return left


def quickSort(arr, left, right):
    if left < right:
        flag = partition(arr, left, right)
        quickSort(arr, left, flag-1)
        quickSort(arr, flag+1, right)
    return arr


arr = [2, 4, 5, 8, 12, 9, 3, 6, 7]
result = quickSort(arr, 0, len(arr)-1)
print(result)
