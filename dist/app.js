"use strict";
//    Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості
//    додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
class Calculator {
	// input

	constructor(value1, value2) {
		this.value1 = parseFloat(value1);
		this.value2 = parseFloat(value2);
		this.res;
	}
	Sum() {
		this.res = this.value1 + this.value2;
	}
	Subtract() {
		this.res = this.value1 - this.value2;
	}
	Multiply() {
		this.res = this.value1 * this.value2;
	}
	Divide() {
		this.res = this.value1 / this.value2;
	}
	toString() {
		return this.res.toString();
	}
}

//------------- btn
const btnSum = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
//----------- input
const inputRes = document.querySelector('[name="res"]');



function init(action) {
	const inputValue1 = document.querySelector('[name="first"]').value;
	const inputValue2 = document.querySelector('[name="second"]').value;
	const calc = new Calculator(inputValue1, inputValue2);
	calc[action]();
	inputRes.value = calc;
}
btnSum.onclick = () => {
	init("Sum");
};
btnSubtract.onclick = () => {
	init("Subtract");
};
btnMultiply.onclick = () => {
	init("Multiply");
};
btnDivide.Divide = () => {
	init("Sum");
};