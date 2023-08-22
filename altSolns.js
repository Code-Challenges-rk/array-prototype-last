Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

Array.prototype.mwisho = function () {
  return this.length ? this.slice(-1)[0] : -1;
};

let arr = [1, {}, 4]

console.log(arr.mwisho());
