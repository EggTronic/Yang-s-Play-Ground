let store = {};
store["0"] = 0;
store["1"] = 1;

function Fibonacci(n) {
    if (n == 1 || n == 0) {
        return n;
    } else {
        let f1 = 0;
        let f2 = 0;
        if ((n - 1).toString() in store) {
            f1 = store[(n - 1).toString()];
        } else {
            f1 = Fibonacci(n - 1);
            store[(n - 1).toString()] = f1;
        }
        if ((n - 2).toString() in store) {
            f2 = store[(n - 2).toString()];
        } else {
            f2 = Fibonacci(n - 2)
            store[(n - 2).toString()] = f2;
        }

        return (f1 + f2);
    }
}

function Fibonacci2(n) {
    var f = 0, g = 1;
    while (n--) {
        g += f;
        f = g - f;
    }
    return f;
}

// 1 1 2 3 5
console.log(Fibonacci(10));
console.log(Fibonacci2(10));

let f3 = (n) => {
    let i = 0, j = 1;
    while(--n) {
        j = i + j;
        i = j - i;
    }
    return j;
}

console.log(f3(10));