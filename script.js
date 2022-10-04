// chamadas globais
let chamandoPaiPaletaCores = document.createElement('section');
document.body.appendChild(chamandoPaiPaletaCores);

let div = document.createElement('div') //capturando a DIV com os quadrados

chamandoPaiPaletaCores.style.display = 'flex'
chamandoPaiPaletaCores.style.marginLeft = '400px'

// functions

function AtualizandoPai () {
chamandoPaiPaletaCores.id = 'color-palette'
}



let li = document.createElement('li'); //teste
chamandoPaiPaletaCores.appendChild(li) //teste
li.innerHTML = 'Preto, Roxo, Azul, Azul marinho'
li.style.marginBottom = '50px'

// li.style.textAlign = 'center'

function addingPaletaCores () {

for (let index = 0; index < 4; index += 1) {
let div = document.createElement('div');
// let li = document.createElement('li'); //teste
div.className = 'color'
div.style.border = 'solid 1px black'
div.style.width = '50px'
div.style.height = '50px'
div.style.marginTop = '100px'
chamandoPaiPaletaCores.appendChild(div)
// chamandoPaiPaletaCores.appendChild(li) //teste
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
paintingSquareBlack ()
paintingSquarePurple ()
paintingSquareBlue ()
paintingSquareBlueMarine ()
