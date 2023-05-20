const number = [40, 100, 1, 5, 25, 10];
number.sort(function (a, b) {
	return a - b;
});
console.log(number);


const sizeUp = document.querySelector('.size-up')

const p = document.querySelector('p')

let fontSize = 20

function bigText() {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}
sizeUp.addEventListener('click', bigText)

