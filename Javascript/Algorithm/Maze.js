function getShortestPath(arr, path, pathPoint, i, j) {
    let [n, m] = [arr.length, arr[0].length];
    while (i < n - 1 || j < m - 1) {
        let runnable = false;
        // 可以往下走
        if (i + 1 < n && path.indexOf('(' + (i + 1) + ',' + j + ')') < 0 && arr[i + 1][j] === 0) {
            runnable = true;
            path.push('(' + i + ',' + j + ')');
            pathPoint.push([i, j]);
            i++;
        }

        // 可以往右走
        if (j + 1 < m && path.indexOf('(' + i + ',' + (j + 1) + ')') < 0 && arr[i][j + 1] === 0) {
            runnable = true;
            path.push('(' + i + ',' + j + ')');
            pathPoint.push([i, j]);
            j++;
        }

        // 可以往上走  
        if (i - 1 >= 0 && path.indexOf('(' + (i - 1) + ',' + j + ')') < 0 && arr[i - 1][j] === 0) {
            runnable = true;
            path.push('(' + i + ',' + j + ')');
            pathPoint.push([i, j]);
            i--;
        }

        // 可以往左走
        if (j - 1 >= 0 && path.indexOf('(' + i + ',' + (j - 1) + ')') < 0 && arr[i][j - 1] === 0) {
            runnable = true;
            path.push('(' + i + ',' + j + ')');
            pathPoint.push([i, j]);
            j--;
        }

        // 无路可走 
        if (!runnable) {
            arr[i][j] = 1;
            path.pop();
            [i, j] = pathPoint.pop();
        }

    }
    path.push('(' + i + ',' + j + ')');
    return path;
}

function getManhatonDistance(n, m, i, j) {
    return (n - i + m - j);
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0]
]

console.log(getShortestPath(arr, [], [], 0, 0).join("\n"));