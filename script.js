const container = document.querySelector('.container');
for (let j = 0; j < 16; j++) {
    container.style.cssText = "display: flex; flex-wrap: wrap";
    for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
        container.appendChild(div);
        div.style.cssText = "display: inline-block; min-width: 5%;"
    }
    container.style.cssText = "display: flex; flex-wrap: wrap"
}




