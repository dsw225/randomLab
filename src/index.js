/*
All possible characters allowed in hex
*/
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/*
Random 6 Alphanumeric hex method
*/

function generateColor() {
    let result = '#';
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 6));
    }
    
    return result;
}

function boxColor() {
    let color1 =generateColor();
    let color2 =generateColor();
    let color3 =generateColor();

    document.getElementById("color-box1").style.backgroundColor = color1;
    document.getElementById("color-box2").style.backgroundColor = color2;
    document.getElementById("color-box3").style.backgroundColor = color3;
}