const mulher = document.querySelector('.mulher');
const pia = document.querySelector('.pia');

const jump = () =>{
    mulher.classList.add('jump');
    setTimeout(() =>{
        mulher.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const piaPosition = pia.offsetLeft;
    const mulherPosition = +window.getComputedStyle(mulher).bottom.replace('px', '');
   if(piaPosition <= 85 && piaPosition > 0 && mulherPosition < 80){
    pia.style.animation = 'none';
    pia.style.left = `${piaPosition}px`;

    mulher.style.animation = 'none';
    mulher.style.left = `${mulherPosition}px`;
   } 
}, 10);

document.addEventListener('keydown', jump);
function reiniciar(){
window.location.reload();
}