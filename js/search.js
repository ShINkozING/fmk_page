const imageInput = document.querySelector('#img-search')
const inputSearch = document.querySelector('.header__right-input')
let focusSearch = document.querySelector('#input-search')
console.log(inputSearch);

imageInput.addEventListener('click', () => {
    inputSearch.classList.add('is-active')
    focusSearch.focus()
    
})

focusSearch.onblur = () => {
    inputSearch.classList.remove('is-active') 
}