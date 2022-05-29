Array.prototype.myEvery = function (callbackfn) {
    let bool;

    for (let i = 0; i < this.length; i++) {
        bool = callbackfn(this[i]);

        if (bool === false)
            return false
    }

    return true;
}

const arr = [1, 2, 3];

console.log(arr.myEvery(n => n > 0));
