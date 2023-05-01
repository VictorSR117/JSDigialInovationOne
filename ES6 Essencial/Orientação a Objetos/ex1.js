'use strict'

const myText = 'Hello prototype';

myText.split(''); //<- de onde vem essa "split"?

console.log(myText.__proto__.split); // split() {[native code]}

console.log(String.prototype.split); // split() {[native code]}

console.log(myText.__proto__.split === String.prototype.split); //true