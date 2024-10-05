// ? This is an empty array where the tasks are stored
let Tasks =  JSON.parse(localStorage.getItem('saved')) || [] ;

const input = document.querySelector('.input');

const button = document.querySelector('.release');

const section = document.querySelector('.stored');

const clearIt = document.querySelector('.clearit');

const darkly =  document.querySelector('.rug');

const whitely =  document.querySelector('body');

input.value = '';

// ? This controls the theme
function smooth() {
  darkly.classList.toggle('smudge');
  whitely.classList.toggle('space');
}



// ? This function pushes the todo to an empty array
const empty = function() {
  console.log(Tasks);
  if(input.value === ''){
    alert("There's nothing on the list!");
    return;
  }
  button.classList.add('torus');
setTimeout(() => {
  button.classList.remove('torus');

  
  let store = input.value;
  
  Tasks.unshift(store.trim());
  console.log(Tasks[0]);
  localStorage.setItem('saved', JSON.stringify(Tasks));
  Add();
  input.value = '';
},1000) 
};


// ? This function Adds and saves the todo's
function Add(){
 let  Htmlsection =`<div class="same"><h3>${Tasks[0]}</h3><button class="delete-selective">Remove</button></div>`
  section.innerHTML +=  Htmlsection;
  localStorage.setItem('set',  section.innerHTML)
}
console.log(Tasks);

let annihalate = document.querySelectorAll('.delete-selective');




// ? This Clears the storage
function Removeit(){
  if(section.innerHTML === ''){
    alert("Put something there!")
    return;
  };
  clearIt.classList.add('tor');
  setTimeout(() => {
  clearIt.classList.remove('tor');
    localStorage.clear('saved');
    console.log(Tasks && 'Storage has been cleared');
    section.innerHTML = '';
  },4000)
  
}

section.innerHTML = localStorage.getItem('set');