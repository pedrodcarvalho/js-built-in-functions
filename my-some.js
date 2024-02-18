Array.prototype.mySome = function (callbackfn, thisArg) {
    for (let i = 0; i < thisArg.length; i++) {
        if (callbackfn(thisArg[i], i, thisArg)) {
            return true;
        }
    }

    return false;
}

const array = [1, 2, 3, 4, 5];
const thisArg = array;

console.log(array.mySome((element, index, array) => element % 2 === 0, thisArg));
