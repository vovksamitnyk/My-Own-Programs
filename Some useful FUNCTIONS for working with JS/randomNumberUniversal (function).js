/*
Ця функція може рандомити будь-яке число 
в межах мінусбезмежність-плюсбезмежність 
від заданого числа "min" до заданого числа "max", 
а також вміє виключати з результату "нуль": 
аргументом "withoutZero" тоді треба ввести "true".
*/

/*
This function can randomize any number
within a minus-infinity plus-infinity
from the set number "min" to the set number "max",
and can also exclude "zero" from the result:
then the "withoutZero" argument must be "true"
*/




let randomUniversal = function (min, max, withoutZero) {
	let randomNumberInfinity = function (min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	};
	if (withoutZero === true) {
		let zeroOrNot = randomNumberInfinity(min, max);
		while (zeroOrNot === 0) {
			zeroOrNot = randomNumberInfinity(min, max);
		}
		return zeroOrNot;
	}
	return randomNumberInfinity(min, max);
};
