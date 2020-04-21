function debounce(timeout, callback) {
    let time = null;

    return function() {
        if (time) {
            clearTimeout(time);
        }

        setTimeout(callback, timeout);
    }
}