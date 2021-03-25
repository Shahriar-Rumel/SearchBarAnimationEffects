const search =document.querySelector('.search-box');
const button =document.querySelector('.btn');
const input =document.querySelector('.input');

button.addEventListener('click',() =>{
    search.classList.toggle('active');
    input.focus();
});