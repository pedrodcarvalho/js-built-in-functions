Array.prototype.myReduce = function (callbackfn, initialValue = 0) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++)
        acc = (callbackfn(acc, this[i]));

    return acc;
};

const arr = [1, 2, 3];

console.log(arr.myReduce((acc, n) => acc + n));
