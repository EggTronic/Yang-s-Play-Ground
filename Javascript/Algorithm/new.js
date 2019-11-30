let matrix = [
              [1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16]
             ];
let n = 4;
let xc = 3;
let yc = 2;
let r = 2;

if (xc - r > n || yc - r > n) {
    //return -1;
}

let result = [];

for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        let xp = row;
        let yp = col;

        if (row > yc) {
            xp += 1;
        };

        let xd = (xc-yp)*(xc-yp);
        let yd = (yc-xp)*(yc-xp);
        let distance = Math.sqrt(xd + yd);

        if (row < yc) {
            if (Math.sqrt(2) < distance && distance <= Math.sqrt(8))
            {
                result.push(matrix[row][col]);
            }
        } else {
            if (Math.sqrt(2) <= distance && distance <= Math.sqrt(8))
            {
                result.push(matrix[row][col]);
            }
        }
        
    }
}

console.log(result);


