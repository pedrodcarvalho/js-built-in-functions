Array.prototype.myEvery = function (callbackfn, thisArg) {
    for (let i = 0; i < thisArg.length; i++) {
        if (!callbackfn(thisArg[i], i, thisArg)) {
            return false;
        }
    }

    return true;
}

const array = [1, 2, 3, 4, 5];
const thisArg = array;

console.log(array.myEvery((element, index, array) => typeof element === 'number', thisArg));
