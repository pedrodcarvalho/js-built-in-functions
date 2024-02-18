Array.prototype.myReduce = function (callbackFn, initialValue) {
    let accumulator = initialValue || this[0];
    let currentValue = initialValue ? this[0] : this[1];
    let currentIndex = initialValue ? 0 : 1;

    for (let i = currentIndex; i < this.length; i++) {
        accumulator = callbackFn(accumulator, currentValue, i, this);

        currentValue = this[i + 1];
    }

    return accumulator;
}

const array = [1, 2, 3, 4, 5];
const initialValue = 0;

console.log(array.myReduce(((accumulator, currentValue, currentIndex, array) => accumulator + currentValue), initialValue));
