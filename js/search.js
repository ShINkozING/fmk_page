const imageInput = document.querySelector('#img-search')
let inputSearch = document.querySelector('.header__right-input')
console.log(inputSearch);

imageInput.addEventListener('click', ()=> {
    inputSearch.classList.add('is-active')
})
