/*
All possible characters allowed in hex
*/
const characters ='ABCDEF0123456789';

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
    let hex1 = generateColor();
    let hex2 = generateColor();
    let hex3 = generateColor();

    document.getElementById("color-box1").style.backgroundColor = hex1;
    document.getElementById("color-box2").style.backgroundColor = hex2;
    document.getElementById("color-box3").style.backgroundColor = hex3;

    document.getElementById("hex-val1").value = hex1;
    document.getElementById("hex-val2").value = hex2;
    document.getElementById("hex-val3").value = hex3;
}