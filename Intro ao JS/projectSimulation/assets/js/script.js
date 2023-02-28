var currentNumberWrapper = document.querySelector("#currentNumber");
var currentNumber = 0;

var dec = document.querySelector("#dec").addEventListener("click", () => {
    if (currentNumber <= -10) dec.disabled = true;
    currentNumber--;
    if (currentNumber < 0) currentNumberWrapper.style.color = "red";
    currentNumberWrapper.innerHTML = currentNumber;
});

var add = document.querySelector("#add").addEventListener("click", () => {
    if (currentNumber >= 12) dec.disabled = true;
    currentNumber++;
    if (currentNumber >= 0) currentNumberWrapper.style.color = "black";
    currentNumberWrapper.innerHTML = currentNumber;
});