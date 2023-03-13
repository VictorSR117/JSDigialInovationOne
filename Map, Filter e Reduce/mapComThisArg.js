const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

mapComthis = (arr, thisArg) => {
    return arr.map(item => {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log("quando o this é macã",mapComthis(nums, apple));
console.log("quando o this é laranja",mapComthis(nums, orange));