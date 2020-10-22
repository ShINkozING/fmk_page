const imageInput = document.querySelector('#img-search')
let inputSearch = document.querySelector('.header__right-input')
let focusSearch = document.querySelector('#input-search')
console.log(inputSearch);

imageInput.addEventListener('click', () => {
    inputSearch.classList.add('is-active')
    focusSearch.focus()
    
})

if(focusSearch !== focusSearch.focus()) {
    inputSearch.classList.remove('is-active')
}