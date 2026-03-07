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

const langRus = document.querySelector('#rus');
const langEng = document.querySelector('#eng');

const rusVersion = document.querySelectorAll('.lang_rus');
const engVersion = document.querySelectorAll('.lang_eng');

console.log(rusVersion)

langRus.addEventListener('click', changeEngToRus);
langEng.addEventListener('click', changeRusToEng);


function changeEngToRus(){ 
    rusVersion.forEach((item) => {
        item. classList.remove('hidden');
        })

    engVersion.forEach((item) => {
        item. classList.add('hidden');
    }
    )
}

function changeRusToEng(){ 
    engVersion.forEach((item) => {
        item. classList.remove('hidden');
        })

    rusVersion.forEach((item) => {
        item. classList.add('hidden');
    }
    )
}
