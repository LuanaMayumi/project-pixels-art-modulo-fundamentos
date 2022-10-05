
let sectionPai = document.querySelector('section')//chama a primeira

let criandoUl = document.createElement('ul')
criandoUl.id = 'color-palette'
sectionPai.appendChild(criandoUl)

function addingPaletaCores () {

for (let index = 0; index < 4; index += 1) {
let criandoLi = document.createElement('li')
criandoLi.className = 'color'
criandoUl.appendChild(criandoLi)
}
}

function addClasseSelected () {
    let pegandoClasseBlack = document.getElementsByClassName('color')[0];
      pegandoClasseBlack.classList.add('selected'); 
}


function gettingColors () {
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
return rgb = `rgb(${r}, ${g}, ${b})`;
}

function paintingSquare () {

       let gettingClassColors = document.querySelectorAll('.color'); // capturando a classe COLOR dos quadrados
    gettingClassColors[0].style.backgroundColor = 'black'
        
    for (let index = 1; index < gettingClassColors.length ; index += 1) {

        gettingClassColors[index].style.backgroundColor = gettingColors(); 

        }
    }

    let gettingButton = document.getElementById('button-random-color')
    console.log(gettingButton);
    gettingButton.addEventListener('click', paintingSquare)


let pixelSection = document.getElementById('pixelSection')


for (let index = 0; index < 5 ; index += 1) {
let section = document.createElement('ul');
section.id = 'pixel-board'
pixelSection.appendChild(section);

    for(let index2 = 0; index2 < 5; index2 += 1) {
    let criandoLi = document.createElement('li');
    criandoLi.classList.add('pixel') //para add uma classe sem sobreescrever a que existe
    section.appendChild(criandoLi)
}
}  


// chamadas functions

addingPaletaCores ()
paintingSquare ()
addClasseSelected ()
