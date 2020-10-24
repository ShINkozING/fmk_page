function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
let result = Math.floor(getRandomFloat(80, 82) * 100) / 100
let result2 = Math.floor(getRandomFloat(80, 82) * 100) / 100
let arrow1 = document.querySelector('.arrow1')
let arrow2 = document.querySelector('.arrow2')

if(result < result2) {
    arrow1.innerHTML += `<img class='arrowDown' src="img/ArrowDown.svg" alt="">`    
    arrow2.innerHTML += `<img class='arrowUp' src="img/ArrowUp.svg" alt="">`
} else {
    arrow1.innerHTML += `<img class='arrowUp' src="img/ArrowUp.svg" alt="">`
    arrow2.innerHTML += `<img class='arrowDown' src="img/ArrowDown.svg" alt="">`
} 

document.querySelector('#randomised').innerHTML = result;
document.querySelector('#randomiseeur').innerHTML = result2;


