
let y = 0;

let x = 0;

document.body.addEventListener("keydown", function(event){

switch(event.key){

        case 'ArrowUp':
         document.getElementById('bloco').style.top = y + "px";
        y--;
        break;

        case 'ArrowDown':
            document.getElementById('bloco').style.top = y + "px";
            y++;
        break;

        case 'ArrowLeft':
            document.getElementById('bloco').style.left = x + "px";
            x--;
        break;

        case 'ArrowRight':
            document.getElementById('bloco').style.left = x + "px";
            x++;
        break;

}



})

