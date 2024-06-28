//  let jantar = Number(prompt('qual o valor que voçê pagou na sua janta?'));

//  let taxa = Number((jantar * 10)/ 100);

//  let resultado = (jantar + taxa);

//  alert(`a taxa do garçom é de ${taxa} e o total a ser pago é de ${resultado}`);
 

let nota1 = Number(prompt('nota da AV1:'))
let nota2 = Number(prompt('nota da AV2:'))

let media = Number((nota1 + nota2)/2)

if(media >= 6){
    alert(`parabens, você passou de ano 
    e sua nota foi de: ${media}`);
}else{
    alert(`você não passou de ano, 
    sua media foi de: ${media}`);
}