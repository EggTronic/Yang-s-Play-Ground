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
                    this.resolvedList[i](data)
                }
            }.bind(this), 0)
    }

    reject(err) {
        if (this.state === "pending") {
            this.state = "rejected";
        } else {
            return;
        }

        for (let i = 0; i < this.rejectedList.length; i++) {
            setTimeout(this.rejectedList[i](err), 0)
        }
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
            promises[i].then(function(data){
                i++;
                result.push(data);
                if (i === promises.length) {
                    res(result)
                } else {
                    next();
                }
            }).catch(function(err){
                rej(err)
            })
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

let p = new MyPromise((resolve, reject) => {
    resolve(1)
})

p.then((data) => console.log(data)).then((data) => console.log(data + 1))

