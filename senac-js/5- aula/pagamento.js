let preco = Number(prompt('qual o preço'));
let vista = Number(preco * 10)/100;
let vista2 =  preco-vista ;
let prazo = preco/3;

alert(`o valor do produto é de ${preco}, a vista fica ${vista2}, a prazo fica ate 3 vezes de ${prazo.toFixed(2)}`);