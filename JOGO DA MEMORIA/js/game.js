const grid = document.querySelector('.grid');
const spanplayer = document.querySelector('.player');
const timer = document.querySelector('.timer');




const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer',

];

const createElement = (tag, classname) => {
const element = document.createElement(tag);
element.className = classname;
return element;

}

let firstcard = '';
let secondcard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
  
    if (disabledCards.length === 20) {
      clearInterval(this.loop);
      alert(`Parabéns, ${spanplayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
    }
  }



const checkcards =() => {
    const firstcharacter = firstcard.getAttribute('data-character');
    const secondcharacter = secondcard.getAttribute('data-character');

    

if(firstcharacter === secondcharacter){

firstcard.firstChild.classList.add('disabled-card');
secondcard.firstChild.classList.add('disabled-card');

firstcard = '';
secondcard = '';
checkEndGame();
} else{
  setTimeout(() => {
    firstcard.classList.remove('reveal-card');
    secondcard.classList.remove('reveal-card');

    firstcard = '';
    secondcard = '';
  }, 500);
}

}



const revealcard = ({target}) => {

if (target.parentNode.className.includes('reveal-card')){
        return;
    }

if (firstcard === ''){
    target.parentNode.classList.add('reveal-card');
    firstcard = target.parentNode;
    
} else if ( secondcard === ''){
    target.parentNode.classList.add('reveal-card');
    secondcard = target.parentNode;

    checkcards();
}



}

const createcard = (characters) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

   front.style.backgroundImage = `url('../img/${characters}.png')`;

    card.appendChild (front);
    card.appendChild (back);

    
card.addEventListener('click', revealcard);
card.setAttribute('data-character', characters)

    return card;
}

const loadgame =() => {

const duplicatecharacters =[ ...characters, ...characters]

const embaralhar = duplicatecharacters.sort( () => Math.random() - 0.5);

embaralhar.forEach((characters) => {

        const card = createcard(characters);
        grid.appendChild(card);
    
});
}

const starttimer = () => {

this.loop = setInterval(()=> {

const currenttimer = + timer.innerHTML
timer.innerHTML = currenttimer + 1; 

}, 1000)

}

window.onload = () => {


spanplayer.innerHTML = localStorage.getItem('player');
 
starttimer();
    loadgame();
}

function jogar(){
    window.location.reload();
}


