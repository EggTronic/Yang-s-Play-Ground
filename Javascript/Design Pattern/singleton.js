class Singleton {
    login () { return 1; }
}

Singleton.getInstance = (function () {
    let instance;
    return function() {
        console.log(instance);
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    }
})()

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
const obj3 = Singleton.getInstance();

//console.log(Singleton);
console.log(obj1 === obj2);

