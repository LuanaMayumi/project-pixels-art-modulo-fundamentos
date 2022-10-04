// chamadas globais
let chamandoPaiPaletaCores = document.createElement('section');
document.body.appendChild(chamandoPaiPaletaCores);

let div = document.createElement('div') //capturando a DIV com os quadrados

// let button = document.getElementById('button-random-color'); //capturando o botão

chamandoPaiPaletaCores.style.display = 'flex'
chamandoPaiPaletaCores.style.marginLeft = '400px'

// functions

function AtualizandoPai () {
chamandoPaiPaletaCores.id = 'color-palette'
// chamandoPaiPaletaCores.style.margin = '0 auto'
}


function addingPaletaCores () {

for (let index = 0; index < 4; index += 1) {
let div = document.createElement('div');
div.className = 'color'
div.style.border = 'solid 1px black'
div.style.width = '50px'
div.style.height = '50px'
div.style.marginTop = '100px'
chamandoPaiPaletaCores.appendChild(div)
}
}

function paintingSquareBlack (){
let pintandoQuadrado0 = document.getElementsByClassName('color')
pintandoQuadrado0[0].style.backgroundColor = 'black'
}

function paintingSquarePurple (){
let pintandoQuadrado1 = document.getElementsByClassName('color')
pintandoQuadrado1[1].style.backgroundColor = 'rgb(201,152,247)'
}

function paintingSquareBlue (){
let pintandoQuadrado2 = document.getElementsByClassName('color')
pintandoQuadrado2[2].style.backgroundColor = 'rgb(46,134,216)'
}

function paintingSquareBlueMarine () {
let pintandoQuadrado3 = document.getElementsByClassName('color')
pintandoQuadrado3[3].style.backgroundColor = 'rgb(14,104,187)'
}

function gettingColors () {
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
return rgb = `rgb(${r}, ${g}, ${b})`;
}
// console.log(gettingColors)


    function paintingSquare () {

        //colocar cor preta no quadrado 1

        let gettingClassColors = document.querySelectorAll('.color'); // capturando a classe COLOR dos quadrados
        gettingClassColors[0].style.backgroundColor = 'black'
        
        for (let index = 1; index < gettingClassColors.length ; index += 1) {
            console.log(gettingClassColors)
           gettingClassColors[index].style.backgroundColor = gettingColors(); 
        }
        console.log('teste')
    }

    let gettingButton = document.getElementById('button-random-color')
    console.log(gettingButton);
    gettingButton.addEventListener('click', paintingSquare)
    





// função que gera cores aleatorias

// function selectColor(){
//     let treinador = "black"
//     let quadradoPreto = document.getElementsByClassName('cor')
//     //quadradoPreto[0].style.backgroundColor = 'black'
//     quadradoPreto[0].addEventListener('click', function(event){
//    event.target.style.backgroundColor = treinador
//     // function pintaQuadrado(){
//     let quadrado1 = document.getElementsByClassName('xablau')
//     quadrado1[0].addEventListener('click', function(event) {
//         quadrado1[0].style.backgroundColor = treinador

//     }




// chamadas functions
AtualizandoPai ()
addingPaletaCores ()
// paintingSquareBlack ()
// paintingSquarePurple ()
// paintingSquareBlue ()
// paintingSquareBlueMarine ()
paintingSquare () 
