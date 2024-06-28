let num1;
let num2;
let total;

function entrada(){
     // armazena nas variaveis os valores do input 
    num1 =Number( document.getElementById('n1').value);
    num2 = Number(document.getElementById('n2').value);
    total = document.getElementById('resultado');
}

function somar(){

    entrada()
    total.innerHTML = num1 + num2;

}
function subtrair(){

    entrada()
    total.innerHTML = num1 - num2;

}
function multiplicar(){

    entrada()
    total.innerHTML = num1 * num2;

}
function dividir(){

    entrada()
    total.innerHTML = num1 / num2;

}

function limpar(){
  total = document.getElementById('resultado');
  total.innerHTML= '';
  document.getElementById('n1').value= '';
  document.getElementById('n2').value= '';
}