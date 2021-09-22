const grid = document.querySelector('#grid');
const items = document.getElementsByClassName('items');
const resetBtn = document.querySelector('#resetBtn');
const blackBtn = document.querySelector('#blackBtn');
const colorBtn = document.querySelector('#colorBtn');
const slider = document.getElementById('gridSlider');

black = true;
color = false;
size = 256;

for(i=0; i<size; i++){
    newDiv = document.createElement('div');
    newDiv.classList.add('items');
    newDiv.textContent = '';
    grid.appendChild(newDiv);
}

for(i=0; i<items.length; i++){
    items[i].addEventListener("mouseover", changeGridColor, false);
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeGridColor(){
    if(black && !color){
        this.style.backgroundColor = "black";
    }
    else if (!black && color){
        this.style.backgroundColor = getRandomColor();
    }
}

slider.addEventListener('input', function(){
    grid.innerHTML="";

    size = parseInt(slider.value) * parseInt(slider.value);

    for(i=0; i<size; i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('items');
        grid.appendChild(newDiv);
    };

    for(i=0; i<items.length; i++){
        items[i].addEventListener("mouseover", changeGridColor, false);
    };

    grid.style.gridTemplate = "repeat(" + slider.value + ", 1fr) / repeat(" + slider.value + ", 1fr)";
});

blackBtn.addEventListener('click', () => {
    black = true;
    color = false;
});

colorBtn.addEventListener('click', () => {
    black = false;
    color = true;
});

resetBtn.addEventListener('click', () => {
    grid.innerHTML="";

    for(i=1; i<size; i++){
        newDiv = document.createElement('div');
        newDiv.classList.add('items');
        grid.appendChild(newDiv);
    }

    for(i=0; i<items.length; i++){
        items[i].addEventListener("mouseover", changeGridColor, false);
    }
});

// float: left;
// border-style: solid;
// border-width: thin;
// aspect-ratio: 1;