const button = document.querySelector("#color-button");
const secondText = document.querySelector("#second-text");
const mainText = document.querySelector("#main-text");
const body = document.body;

button.addEventListener("click", colorChange);

window.addEventListener('keyup', function (evt) {
	console.log(evt.code)
	evt.code === "Space" && colorChange()
})


function colorChange() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	const color = `#${(r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase()}`;
	const invColor = `#${((255 - r).toString(16).padStart(2, '0') + (255 - g).toString(16).padStart(2, '0') + (255 - b).toString(16).padStart(2, '0')).toUpperCase()}`;

	if (r * 0.299 + g * 0.587 + b * 0.114 > 150) {
		body.style.color = '#181818';
	} else {
		body.style.color = '#efefef';
	}

	mainText.innerText = `${color}`;
	secondText.innerText = `${invColor}`
	body.style.backgroundColor = color;
	button.innerText = `Do it again!`;
	button.style.backgroundColor = invColor;
	button.style.color = color;
	button.style.border = `5px solid ${color}`
	button.style.boxShadow = `0 0 0 5px ${invColor}`
}



