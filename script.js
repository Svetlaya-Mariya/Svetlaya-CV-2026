const examples = document.querySelectorAll('.example');
const exampleWrapper = document.querySelector('.example__wrapper');

exampleWrapper.addEventListener('click', (event) => {
    if(event.target.closest('.example') && event.target.tagName != 'A'){
        showDiscription();
    }
});

function showDiscription(){
    console.log('hello');
}
