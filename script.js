let sectionPai = document.querySelector('section')//chama a primeira

let criandoUl = document.createElement('ul')
criandoUl.id = 'color-palette'
sectionPai.appendChild(criandoUl)

function addingPaletaCores() {

    for (let index = 0; index < 4; index += 1) {
        let criandoLi = document.createElement('li')
        criandoLi.className = 'color'
        criandoUl.appendChild(criandoLi)
    }
}

function addClasseSelected() {
    let pegandoClasseBlack = document.getElementsByClassName('color')[0];
    pegandoClasseBlack.classList.add('selected');
}


function gettingColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return rgb = `rgb(${r}, ${g}, ${b})`;
}

function addLocalStorage(arrayColors) { //adicionando cores novas no local storage, depois que a função é chamada no PantingSquare (linha 48)
    localStorage.setItem('colorPalette', JSON.stringify(arrayColors));
}


function paintingSquare() {

    let aleatoryColors = ['rgb(0, 0, 0)'];
    let gettingClassColors = document.getElementsByClassName('color'); // capturando os quadrados

    console.log(gettingClassColors)
    gettingClassColors[0].style.backgroundColor = 'black' //colocando cor preta no 1 quadrado


    for (let index = 1; index < gettingClassColors.length; index += 1) {
        gettingClassColors[index].style.backgroundColor = gettingColors();
        aleatoryColors.push(gettingClassColors[index].style.backgroundColor) //pintando outros quadrados com cor aleatoria

    }
    addLocalStorage(aleatoryColors) //toda vez que uma cor é gerada esta sendo salva no LocalStorage
}

function getLocalStorage() {  //pegando as cores do local Storage // qundo eu fecho o nagevador, vai puxar minhas cores iniciais e o localStorage vai estar vazio. 
    const pegandoItem = JSON.parse(localStorage.getItem('colorPalette'))
    console.log(pegandoItem)
    recebeCoresPintaLocalStorage(pegandoItem) //pegando item ColorPalette do localStorage com as cores, e atribuindo pra função RecebeCoresPintaLocalStorage que vai pintas os quadrados, embaixo
}



function recebeCoresPintaLocalStorage(coresLocalStorage) { //rececendo as cores salvas no LocalStorage

    if (coresLocalStorage !== null) { // se as cores salvas lo LocalStorage forem diferente de Nulas (se tiver cor)

        let gettingClassColors = document.getElementsByClassName('color'); // capturando os quadrados 

        for (let index = 0; index < coresLocalStorage.length; index += 1) { //percorrendo as cores que estao no localStorage

            gettingClassColors[index].style.backgroundColor = coresLocalStorage[index]; //adicionando as cores aos quadrados    
        }
    }
}


let gettingButton = document.getElementById('button-random-color') //aperta o botão pra receber cores aleatórias
console.log(gettingButton);
gettingButton.addEventListener('click', paintingSquare)


let pixelSection = document.getElementById('pixelSection') //capturando o quadro Pixel


for (let index = 0; index < 5; index += 1) { //criando o quadro através de UL
    let section = document.createElement('ul');
    section.id = 'pixel-board'
    pixelSection.appendChild(section);

    for (let index2 = 0; index2 < 5; index2 += 1) { //criando o quadro através de li
        let criandoLi = document.createElement('li');
        criandoLi.classList.add('pixel') //para add uma classe sem sobreescrever a que existe
        section.appendChild(criandoLi)
    }
}

function paintingSquareBlack() {
    let pintandoQuadrado0 = document.getElementsByClassName('color')
    pintandoQuadrado0[0].style.backgroundColor = 'black'
}

function paintingSquarePurple() {
    let pintandoQuadrado1 = document.getElementsByClassName('color')
    pintandoQuadrado1[1].style.backgroundColor = 'rgb(201,152,247)'
}

function paintingSquareBlue() {
    let pintandoQuadrado2 = document.getElementsByClassName('color')
    pintandoQuadrado2[2].style.backgroundColor = 'rgb(46,134,216)'
}

function paintingSquareBlueMarine() {
    let pintandoQuadrado3 = document.getElementsByClassName('color')
    pintandoQuadrado3[3].style.backgroundColor = 'rgb(14,104,187)'
}

//EXERCICIO 9


let paletteCores = document.getElementById('color-palette') //retorna em array?
console.log(paletteCores); // variável fora de uma função, ela é global, pode ser utilizada em qualquer lugar do programa

let cor = 'rgb(0, 0, 0)' //a cor preta é substituida pela cor clicada no palete, atraves do event.target.style.backgroudColor

    paletteCores.addEventListener('click', function (event) {
console.log('entrei');

let selected = document.querySelector('.selected')
console.log(selected); //está retornando Null
  
            selected.classList.remove('selected')
            event.target.classList.add('selected')

            cor = event.target.style.backgroundColor //variável criada pro exercício 10, onde o meu Event vai puxar o background color depois do meu click na paleta. target = alvo
        }
             );

//exercicio 10

let pixels = document.getElementById('pixelSection')
console.log(pixels);

pixels.addEventListener('click', function (event) {
console.log(event.target)//mostra no meu console exatamente o LI que eu cliquei

if (event.target.className === 'pixel') {//se o nome da Classe do meu pixel for igual a pixel
    console.log(event.target);
    event.target.style.backgroundColor = cor //sempre que for propriedade CSS, usar uma string pra atribuir valor. //classList.add - função, atribuir a string dentro do parênteses ( )
}

});

//exercicio 11

let buttonClear = document.getElementById('clear-board')

buttonClear.addEventListener('click', function (){ //função anônima pode ser usada aqui pq vai ser chamada somente no ex 11
let pixels = document.getElementsByClassName('pixel')
console.log(pixels);

for (let pixel of pixels) { //para cada pixel dos pixels (grid)

    pixel.style.backgroundColor = 'white';

} 

})


 



window.onload = function () {
            paintingSquareBlack()
            paintingSquarePurple()
            paintingSquareBlue()
            paintingSquareBlueMarine()
            getLocalStorage()
        }

// chamadas functions
addingPaletaCores();
addClasseSelected();