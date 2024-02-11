


function calculator(){

    const buttonRef = document.querySelectorAll('.number');
const inputRef = document.querySelector('input');

inputRef.value = "";
inputRef.textContent ="";

buttonRef.forEach((number)=>{
 
number.addEventListener("click", (e) =>{
   
    if(e.target.textContent !== '='){
        inputRef.value += e.target.textContent;
        inputRef.textContent = buttonRef.value;
    }

})
})

const equalRef = document.querySelector('.equal');

equalRef.addEventListener('click', () =>{
    inputRef.value = eval(inputRef.value);
    inputRef.textContent = inputRef.value;
})


document.querySelector('.clear-btn').addEventListener('click',() => {
    inputRef.value = "";
    inputRef.textContent ='';

})
    
}

calculator();

// coded with ❤ by Abhishek :)