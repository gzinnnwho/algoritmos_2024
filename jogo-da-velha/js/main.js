var jogador = 'x';

function jogar(celula){
    if(celula.innerHTML === ''){
        celula.innerHTML = jogador;

        if(jogador === 'x'){

            jogador = 'o';
            celula.style.backgroundColor = 'black';

        }else{

            jogador = 'x';
            celula.style.backgroundColor = 'green';
        }
    }
}

function reiniciar(){
    window.location.reload();
}

//criando uma lista no javascript
let nomes = [];
//posições     0        1       2         3             4       5       indexadores

//função para gerar a batalha
function gerarBatalha(){
    //variáveis nome1 e nome2 armazenam nomes sorteados
    let nome1 = nomes[ Math.floor( Math.random() * nomes.length  )];
    let nome2 = nomes[ Math.floor( Math.random() * nomes.length  )];

    //gera batalha de novo, quando nome1 for igual a nome2
    if(nome1 === nome2){
        gerarBatalha();
    } else {
    //escreva na tela
    document.getElementById('jogadores').textContent = nome1 + " vs " + nome2;

    //imprime no console a batalha da vez
    console.log(`Batalha da vez: ${nome1}  x  ${nome2}`);
    console.log("Batalha da vez: " + nome1 + " x " +  nome2);

    //entendendo lógica do sorteio passo a passo
    let numero = Math.random();
    console.log('Número sorteado: '+ numero);
    console.log('posição da lista sem arredondar: '+ numero * nomes.length);
    console.log('posição da lista arredondado: '+ Math.floor(numero * nomes.length));
    console.log('Nome sorteado: ' + nomes[ Math.floor( numero * nomes.length  )] );

    }
}


function adicionar (){
    var nome = document.getElementById('nome').value;
    // adicionar valor de nome na lista
    nomes.push(nome);
    var nome = document.getElementById('nome').value="";
    listar()
}
listar()


function listar(){
    var listagem = document.getElementById('lista');
    // limpar lista
    listagem.innerHTML = '';


    // roda enquanto contador for menor que o tamanho da lista 
    for(var contador = 0; contador < nomes.length; contador++ ){
     var item = document.createElement('li');
     var valor = nomes[contador];
     item.innerHTML = valor;
     listagem.appendChild(item);

    }
}