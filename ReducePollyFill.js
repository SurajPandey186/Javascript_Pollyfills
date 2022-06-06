Array.prototype._reduce = function (callback, initial) {

    if (initial) {
        previous = initial;
        
       for (let i = 0; i < this.length; ++ i) {
          previous = callback(previous, this[i], i, this)
       }

    } else {
        previous = this[0]
        for (let i = 1; i < this.length; ++ i) {
            previous = callback(previous, this[1], i, this)
        }
    }
    return previous;
}