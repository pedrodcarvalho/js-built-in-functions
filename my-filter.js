Array.prototype.myFilter = function (callbackfn, thisArg) {
    const newArray = [];

    for (let i = 0; i < thisArg.length; i++) {
        if (callbackfn(thisArg[i], i, thisArg)) {
            newArray.push(thisArg[i]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5];
const thisArg = array;

console.log(array.myFilter((element, index, array) => element % 2 === 0, thisArg));
