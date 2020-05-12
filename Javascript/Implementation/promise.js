class MyPromise {
    constructor(fn) {
        this.state = "pending";
        this.resolvedList = [];
        this.rejectedList = [];

        fn(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(data) {
        if (this.state === "pending") {
            this.state = "fulfilled";
        } else {
            return;
        }

        setTimeout(
            function () {
                for (let i = 0; i < this.resolvedList.length; i++) {
                    this.resolvedList[i](data);
                }
            }.bind(this), 0)
    }

    reject(err) {
        if (this.state === "pending") {
            this.state = "rejected";
        } else {
            return;
        }

        setTimeout(
            function () {
                for (let i = 0; i < this.rejectedList.length; i++) {
                    this.rejectedList[i](err);
                }
            }.bind(this), 0)
    }

    then(cb) {
        this.resolvedList.push(cb);
        return this;
    }

    catch(cb) {
        this.rejectedList.push(cb);
        return this;
    }
}

MyPromise.all = function (promises) {
    let result = [];
    return new MyPromise((res, rej) => {
        let i = 0;
        next();
        function next() {
            promises[i].then(
                function(data){
                    i++;
                    result.push(data);
                    if (i === promises.length) {
                        res(result)
                    } else {
                        next();
                    }
                }
            ).catch( 
                function(err){
                    rej(err);
                }
            )
        }
    })
}

MyPromise.race = function (promises) {
    return new MyPromise((res, rej) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => res(data)).catch(err => rej(err));
        }
    })
}

// let p = new MyPromise((resolve, reject) => {
//     resolve(1);
// })

// p.then((data) => console.log(data)).then((data) => console.log(data + 1));

let p2 = new MyPromise((resolve, reject) => {
    resolve(2)
})
let p3 = new MyPromise((resolve, reject) => {
    reject("err")
})
let p4 = new MyPromise((resolve, reject) => {
    resolve(4)
})
let p5 = new MyPromise((resolve, reject) => {
    resolve(5)
})

MyPromise.all([p2, p3, p4, p5]).then(res => console.log("all: " + res)).catch(err => console.log("all_err: " + err));

MyPromise.race([p2, p3, p4, p5]).then(res => console.log("race: " + res)).catch(err => console.log("race_err: " + err));

// let pt = new Promise((resolve, reject) => {
//     reject(2)
// })

// Promise.all([pt]).then(res => console.log("origint_all: " + res)).catch(err => console.log("origin_all_err: " + err));

