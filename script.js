const gridContainer = document.querySelector('.container');
const rainbowBtn = document.getElementById('rainbow');
const colorBtn = document.getElementById('color');
const eraserBtn = document.getElementById('eraser');
const colorPickerBtn = document.getElementById('colorPicker');
const gridSize = document.querySelector('.slider');
const sliderValue = document.getElementById('myRange');


gridSize.addEventListener('click', function() {
    createGrid(gridSize.value);
    sliderValue.textContent = `${gridSize.value}x${gridSize.value}`;
    changeSize(gridSize.value);
})

function createGrid(value = 8) {
    for (let i = 1; i <= value; i++) {
        const row = document.createElement('div');
        const rowHeight = row.style.height = `${Math.trunc(490 / value)}px`
        row.classList.add('row')
        for (let j = 1; j <= value; j++) {
            const square = document.createElement('div');
            square.style.width = `${Math.trunc(450 / value)}px`
            square.style.height = rowHeight;
            square.classList.add('sqr');

            function colorIt() {
                square.addEventListener('mouseenter', function() {
                    square.style.backgroundColor = colorPickerBtn.value;
                })
            }
            
            function eraser() {
                square.addEventListener('mouseenter', function() {
                    square.style.backgroundColor = 'white';
                })
            }
            
            function rainbow() {
                const hexArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            
                let hexColor = '#';
                
                for (let i = 0; i < 6; i++) {
                    const randomNumber = Math.trunc((Math.random() * hexArr.length));
                    hexColor += hexArr[randomNumber];
                }
                square.addEventListener('mouseenter', function() {
                    square.style.backgroundColor = hexColor;
                })
            }

            eraserBtn.addEventListener('click', eraser);
            colorPickerBtn.addEventListener('click', colorIt);
            rainbowBtn.addEventListener('click', rainbow);

            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
}

function changeSize(value) {
    reloadGrid(value);
}

function reloadGrid(value) {
    clearGrid();
    createGrid(value);
}

function clearGrid() {
    gridContainer.innerHTML = '';
}