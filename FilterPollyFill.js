Array.prototype.filterModified = function (callback) {
    
    const _result = [];
    
    for(let i = 0; i < this.length; ++i) {   
       if(callback(this[i], i, this))
        _result.push(this[i]);
    }

    return _result;
};