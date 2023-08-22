Array.prototype.last = function() {
    let last = this.length - 1
    
    if (this.length > 0) return this[last];
    return -1;
};