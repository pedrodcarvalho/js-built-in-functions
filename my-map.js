Array.prototype.myMap = function (callbackFn, thisArg) {
    const newArray = [];

    for (let i = 0; i < thisArg.length; i++) {
        newArray.push(callbackFn(thisArg[i], i, thisArg));
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5];
const thisArg = array;

console.log(array.myMap((element, index, array) => element ** 2, thisArg));
