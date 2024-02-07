const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function randomColor(length) {
    let result = ' ';
    for ( let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 6));
    }
    return result;
}