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






function paintingSquare () {

    
    let aleatoryColors =['rgb(0, 0, 0)']; //guardando as cores aleatórias dentro do array
   
    let gettingClassColors = document.querySelectorAll('.color'); // capturando a classe COLOR dos quadrados
    gettingClassColors[0].style.backgroundColor = 'black'
        
    for (let index = 1; index < gettingClassColors.length ; index += 1) {

    
         gettingClassColors[index].style.backgroundColor = gettingColors(); 

    aleatoryColors.push(gettingClassColors[index])//subir cores aleatorias para meu array

        return aleatoryColors
    }

      function addLocalStorage (arrayColors) { //// criar uma função que vai receber um parametro e o que for recebido no parametro vai ser mandado para o localStorage,pra criar (set item)
localStorage.setItem('colorPalette', JSON.stringify(arrayColors));
    }

    function getLocalStorage () { // as coisas do local storage e outra pra pegar (get items)
    const pegandoItem =  localStorage.getItem('colorPalette')
    }

    botaoReset.addEventListener('click', function (){
        addLocalStorage(paintingSquare())
        adicionacor();
        
    })

window.onload = function () {
getLocalStorage()//recuperando os dados

}



//exercicio 9 pra pegar a cor

function seletingColor () {
let capturing = document//capturar o pixelpegar a classe

// for (let index = 0; index < capturing.length, index += 1)
capturing.addEventListener('click', function (event) {
    console.log(event.target)
    event.target.className = 'color selected'

    if (className === selected)
    
   
}



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
   // }


//exercicio 9 > a captura do botão deve ficar depois que clicamos no botao para cor aleatorias ?
window.onload =function () {
let button = document.getElementById('#button-random-color');
//criando uma variável pra pegar o botão

}
button.addEventListener > para clicar e pegar a cor 


function xxx
se clicar na cor, guardar a cor

outro button pra clicar e deixar a cor?

//    let EscolherACor = tentar pegar a cor aqui

   if (EscolherACor) {

   }

//    Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.
//    A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros
//    A cor clicada deve receber a classe selected e a cor previamente selecionada deve perder esta classe;
   
//    Somente uma das cores da paleta pode ter a classe selected de cada vez;
   
//    Os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.