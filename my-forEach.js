Array.prototype.myForEach = function (callbackFn, thisArg) {
    for (let i = 0; i < thisArg.length; i++) {
        callbackFn(thisArg[i], i, thisArg);
    }
}

const array = [1, 2, 3, 4, 5];
const thisArg = array;

console.log(array.myForEach((element, index, array) => element ** 2, thisArg));
