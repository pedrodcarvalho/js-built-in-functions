Array.prototype.myForEach = function (callbackfn) {
    let newArray = new Array;

    for (let i = 0; i < this.length; i++)
        newArray.push(callbackfn(this[i]));
};

const arr = [1, 2, 3];

arr.myForEach(n => console.log(n ** 2));
