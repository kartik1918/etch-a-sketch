const gridNumber = prompt("Enter Grid Number")

const container = document.querySelector('.container');
for (let j = 1; j < gridNumber; j++) {
    container.style.cssText = "display: flex; flex-wrap: wrap";
    for (let i = 0; i < gridNumber; i++) {
    const divs = document.createElement('div');
        container.appendChild(divs);
        divs.style.width = `${450 / gridNumber}px`;
        divs.style.height = `${490 / gridNumber}px`;
        // divs.style.cssText = `display: inline-block; min-width: 5%`;
        divs.addEventListener('mouseover', function() {
            divs.classList.toggle('color');
        })
    }
    container.style.cssText = "display: flex; flex-wrap: wrap"
}