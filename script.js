function createGrid(size) {
	clean();
	for (let i = 0; i < size; i++) {
		const column = document.createElement('div');
		column.classList.add('column');
		for (let j = 0; j < size; j++) {
			const tile = document.createElement('div');
			tile.classList.add('tile');
			column.appendChild(tile)
		}
		container.appendChild(column);
	}
	const tiles = document.querySelectorAll('.tile');
	tiles.forEach(tile => tile.addEventListener('mouseover', changeColor));
}

function changeColor(evt) {
	evt.currentTarget.style.backgroundColor = getRandomRGB();
}

function getRandomRGB() {
	const RGB = [];
	for (let i = 0; i < 3; i++) {
		RGB.push(Math.floor(Math.random() * 256));
	}
	return `rgb(${RGB[0]} ${RGB[1]} ${RGB[2]})`;
}
	

function clean() {
	const columns = document.querySelectorAll('.column');
	columns.forEach(column => column.remove());
}

function promptGridSize() {
	while (true) {
		const size = prompt('Enter grid size');
		if (size <= 1 || size > 100) {
			alert("Size can't be greater than 100 or less than 2");
		} 
		else return size;
	}
	
}

const container = document.querySelector('.container');
const gridSizeButton = document.querySelector('#gridSizeButton');
gridSizeButton.addEventListener('click', () => createGrid(promptGridSize()));


createGrid(16);