const buttonFilter = document.querySelectorAll('.filterbtn')
const divCards = document.querySelectorAll('.content__item')

console.log(buttonFilter)

buttonFilter.forEach((btnclick) =>{
    btnclick.addEventListener('click', () => {
        divCards.forEach((cardsItem) => {
            if(cardsItem.classList.contains(btnclick.getAttribute('data-filter'))) {
                cardsItem.style.display = 'flex'
            } else {
                cardsItem.style.display = 'none'
            }
        })
    })
})