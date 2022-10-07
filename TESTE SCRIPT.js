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

paintingSquareBlack ()
paintingSquarePurple ()
paintingSquareBlue ()
paintingSquareBlueMarine ()








//exercicio 9 pra pegar a cor

// 1 fzer um addEventLitener para que qdo eu clico na cor eu pego o selected
// 2 percorrer um for pra ver se alguma das minhas cores tem a classe seleted
// Se sim, copiar o meu RGB pro click/selected
// 3 clicar no grid e colar o meu rgb
let button = document.getElementById('button-random-color')

button.addEventListener('click', function(event){
    let capturing = document.getElementsByClassName('selected') //capturando a classe Selected
    let capturing = event.target.className; //capturando as classes
    
    


})

function changingColor () {
    let capturingClassSelected = document.getElementsByClassName('selected') //pegando a classe Selected
    let capturingClassColor = document.getElementsByClassName('color')
    let capturingPalette = document.getElementById('color-palette') //pegando meu palette
    let capturingPixels = document.getElementById('pixelSection') //pegando o ID do grid
  

    capturingPalette.addEventListener('click', function (event) {
    
        event.target.className = 'color selected' //capturando a Classe
    
    for (let index = 0; index < capturingPalette.length; index += 1)
    
        if (capturingPalette[index] === capturingClassSelected) { //precisa por algo pra className for igual a selected? //SE algum quadrado do palette tiver a classe Slected

            capturingPixels.style.backgroundColor = capturingClassSelected
        }
        else {
            capturingPixels.style.backgroundColor = capturingClassColor
        }
    
    })
}










function selectColor(){
    let treinador = "black"
    let quadradoPreto = document.getElementsByClassName('cor')
 
    quadradoPreto[0].addEventListener('click', function(event){
   event.target.style.backgroundColor = treinador
   
    let quadrado1 = document.getElementsByClassName('xablau')
    quadrado1[0].addEventListener('click', function(event) {
        quadrado1[0].style.backgroundColor = treinador
    })





//    Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.
//    A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros
//    A cor clicada deve receber a classe selected e a cor previamente selecionada deve perder esta classe;
   
//    Somente uma das cores da paleta pode ter a classe selected de cada vez;
   
//    Os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.