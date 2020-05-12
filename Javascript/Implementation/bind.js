Function.prototype.bind = function(target) {
    let target = target || window;
    let args = [].slice.call(arguments);
    return () => {
        this.apply(target, args)
    }
}