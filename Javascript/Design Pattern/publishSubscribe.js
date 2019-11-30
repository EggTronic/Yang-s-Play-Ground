class Publisher {
    constructor() {
        this.events = {};
    }

    on(name, callback) {
        if (! (name in this.events)) {
            this.events[name] = [];
        }

        this.events[name].push(callback);
    }

    remove(name) {
        if (! (name in this.events) || this.events[name].length === 0) {
            return;
        }

        this.events[name] = [];
    }

    trigger(name, args) {
        if (! (name in this.events) || this.events[name].length === 0) {
            return;
        }
        
        this.events[name].forEach(callback => {
            callback.apply(null, [args]);
        })
    }
} 

class Subscriber {
    constructor() {
        this.a = 1;
    }

    subscribeAB() {
        return (b) => {
            console.log(b * this.a);
        }
    }
}

let pub = new Publisher();
let sub = new Subscriber();

pub.on('add', sub.subscribeAB());


pub.trigger('add',2);