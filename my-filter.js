Array.prototype.myForEach = function (callbackfn) {
    let newArray = new Array;

    for (let i = 0; i < this.length; i++) {
        if (callbackfn(this[i]))
            newArray.push(this[i]);
    }

    return newArray;
};

const arr = [1, 2, 3];

console.log(arr.myForEach(n => n > 2));
