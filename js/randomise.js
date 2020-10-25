// изменение курсов валют после обновление страниц

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


// динамическое изменение текущих индексов

const divP = document.querySelectorAll('#item-value')
let dinArrow = document.querySelectorAll('.arrow123')


console.log(divP)

let setRandomValue = function() {
    let timerId = setInterval(() => {
        divP.forEach((dItem) =>{
            let result3 = Math.floor(getRandomFloat(15, 20) * 100) / 100
            dItem.innerHTML = result3
            dinArrow.forEach((arrowChage) => {
                if (result3 > '17') {
                    arrowChage.innerHTML = `<img class='arrowUp' src="img/ArrowUp.svg" alt="">`
                } else {
                    arrowChage.innerHTML = `<img class='arrowDown' src="img/ArrowDown.svg" alt="">`
                }
            })
        })
    }, 2000);
}

setRandomValue()