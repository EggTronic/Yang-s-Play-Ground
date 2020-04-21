function torttle(timeout, callback) {
    let time = Date();
    return function() {
        if (Date() - time > timeout) {
            callback();
            time = Date();
        } 
    }
}