
// variaveis
let numero = 5;
let nome = 'arlindo';
let peso = 69.5;    
let sistemaAtivo = false;
            
// inpressoes
console.log('o nome é: ' + nome);
// alert(`o nome e ${nome}`);

// estrutura consicional
/*
if(numero > 10 ){
    alert(`numero maior que 10!`);
}  else {
    alert(`numero menor que 10!`);
} */
let contador = 0;

while(contador < 5){
    console.log("o numero é: " + contador);
    contador = contador +1;
}

// trabalhando com lista

let nomes = ['julius', 'marcos', 'lucas',' jonas', 'guilherme']; 

console.log('nome:' + nomes[2]);

for(contador= 0; contador < nomes.length; contador ++ ){
    console.log('imprimindo nome: '+ nomes [contador]);
}


 